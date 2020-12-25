import axios from 'axios'
import { useEffect, useState } from 'react'
import Accordian from './Accordian'

/**
 * A List of Accordian(s) when receives proper data
 * Renders pulsating skeleton while loading and an
 * error message on error
 *
 * @param {React.HTMLAttributes<HTMLAnchorElement> & {tab: string; filter: string;}} props
 */
export default function List({ tab, filter }) {
  const [data, setData] = useState([])

  useEffect(() => {
    axios(`/api/data?resource=${tab}&size=0&page=1`)
      .then((res) => setData(res.data.data))
      .catch(() => setData(null))
  }, [tab])

  useEffect(() => setData([]), [tab])

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
    <div className="mt-4 space-y-2 bg-transparent">
      {data
        .filter((elem) => {
          for (const prop of Object.keys(elem)) {
            if (elem[prop].toLowerCase().includes(filter.toLowerCase()))
              return true
          }
          return false
        })
        .map((elem, index) => (
          <Accordian key={index} title={elem['name']} data={elem} />
        ))}
    </div>
  )
}
