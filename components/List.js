import axios from 'axios'
import { useEffect, useState } from 'react'
import Accordian from './Accordian'

export default function List({ tab }) {
  const [data, setData] = useState([])

  const getAccTitle = () => (tab === 'matches' ? 'home' : 'name')

  useEffect(() => {
    axios(`/api/data?resource=${tab}&size=0&page=1`)
      .then((res) => setData(res.data.data))
      .catch(() => setData([]))
  }, [tab])

  return (
    <div className="mt-4 space-y-2">
      {data.map((elem) => (
        <Accordian key={elem.id} title={elem[getAccTitle()]} data={elem} />
      ))}
    </div>
  )
}
