import { useEffect, useState } from 'react'
import Info from './Info'
import List from './List'
import Nav from './Nav'

export default function Main() {
  const [tab, setTab] = useState('')

  const handleHashChange = (event) => {
    setTab(event.currentTarget.location.hash.slice(1))
  }

  useEffect(() => {
    const hash = window.location.hash
    if (hash.length > 1) setTab(hash.slice(1))
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return (
    <div
      className="bg-gray-50 py-6 px-4"
      style={{ minHeight: 'calc(100vh - 150px)' }}
    >
      <div className="max-w-7xl bg-white mx-auto border rounded-xl shadow-sm">
        <Nav activeTab={tab} />
        <hr />
        <main className="p-4">
          <h2 className="text-2xl font-bold capitalize">{tab}</h2>
          {tab === '' ? <Info /> : <List tab={tab} />}
        </main>
      </div>
    </div>
  )
}
