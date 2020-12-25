import { useEffect, useState } from 'react'
import axios from 'axios'
import Accordian from './Accordian'
import LeftArrow from '../assets/icons/left-arrow.svg'
import RightArrow from '../assets/icons/right-arrow.svg'

/**
 * A Paginated list of Accordian(s) when receives proper data
 * Renders pulsating skeleton while loading and an
 * error message on error
 *
 * @param {React.HTMLAttributes<HTMLAnchorElement> & {tab: string; filter: string;}} props
 */
export default function List({ tab, filter, limit = 12 }) {
  const [data, setData] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  let counter = 0

  useEffect(() => {
    setData([])
    setPageNumber(1)
    axios(`/api/data?resource=${tab}&size=0&page=1`)
      .then((res) => setData(res.data.data))
      .catch(() => setData(null))
  }, [tab])

  useEffect(() => {
    setPageNumber(1)
  }, [filter])

  if (data?.length <= 1)
    return (
      <div className="mt-4 space-y-2">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
          <div
            className="bg-gray-200 animate-pulse dark:bg-my-gray h-10 border dark:border-gray-400 rounded"
            key={i}
          />
        ))}
      </div>
    )
  else if (data === null)
    return (
      <p className="font-bold text-xl mt-4 text-red-500">
        Something got messed up, try again later!
      </p>
    )

  return (
    <div className="mt-4 bg-transparent">
      <div className="space-y-2">
        {data
          .filter((elem) => {
            for (const prop of Object.keys(elem)) {
              if (elem[prop].toLowerCase().includes(filter.toLowerCase()))
                return !!++counter
            }
            return false
          })
          .slice((pageNumber - 1) * limit, pageNumber * limit)
          .map((elem, index) => (
            <Accordian key={index} title={elem['name']} data={elem} />
          ))}
      </div>
      <div className="mt-6 flex items-center justify-between sm:space-x-4">
        <button
          aria-label="next page button"
          disabled={pageNumber <= 1}
          className="py-1 px-6 rounded border text-gray-700 focus:outline-none focus:ring-2 dark:border-gray-400 dark:bg-my-gray dark:text-gray-50"
          onClick={() => setPageNumber(pageNumber - 1)}
        >
          <LeftArrow />
        </button>
        <span className="text-gray-800 dark:text-gray-50">
          Page {pageNumber} of {Math.ceil(counter / limit)}
        </span>
        <button
          aria-label="next page button"
          disabled={pageNumber * limit >= counter}
          className="py-1 px-6 rounded border text-gray-700 focus:outline-none focus:ring-2 dark:border-gray-400 dark:bg-my-gray dark:text-gray-50"
          onClick={() => setPageNumber(pageNumber + 1)}
        >
          <RightArrow />
        </button>
      </div>
    </div>
  )
}
