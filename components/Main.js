import { useEffect, useState } from 'react'
import Info from './Info'
import List from './List'
import Nav from './Nav'

/**
 * Main component carries the Nav and the List component
 * It also holds the states of the tab for nav and filter for list
 */
export default function Main() {
  const [tab, setTab] = useState('')
  const [filter, setFilter] = useState('')

  const handleHashChange = (event) => {
    setTab(event.currentTarget.location.hash.slice(1))
  }

  const handleFilterSubmit = (value) => {
    setFilter(value)
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
      className="bg-gray-50 py-6 px-4 dark:bg-gray-700"
      style={{ minHeight: 'calc(100vh - 150px)' }}
    >
      <div className="max-w-7xl bg-white mx-auto border rounded-lg shadow-sm dark:border-gray-400">
        <Nav activeTab={tab} handleFilterSubmit={handleFilterSubmit} />
        <main className="p-4 bg-white dark:bg-my-black dark:text-gray-50 rounded-lg rounded-t-none">
          <h2 className="text-2xl font-bold capitalize">{tab}</h2>
          {tab === '' ? <Info /> : <List tab={tab} filter={filter} />}
        </main>
      </div>
    </div>
  )
}
