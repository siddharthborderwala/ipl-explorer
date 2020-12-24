import NavLink from './NavLink'
import { useEffect, useState } from 'react'

export default function Nav({ activeTab, handleFilterSubmit }) {
  const [filterValue, setFilterValue] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    handleFilterSubmit(filterValue)
  }

  const handleInputChange = (e) => {
    const latestValue = e.target.value
    setFilterValue(latestValue)
    if (latestValue.length === 0) handleFilterSubmit('')
  }

  useEffect(() => {
    setFilterValue('')
    handleFilterSubmit('')
  }, [activeTab])

  return (
    <nav className="p-4 border-none rounded-lg flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center">
      <div className="space-x-2">
        <NavLink tabName="players" isActive={activeTab === 'players'} />
        <NavLink tabName="teams" isActive={activeTab === 'teams'} />
        <NavLink tabName="venues" isActive={activeTab === 'venues'} />
      </div>
      <form
        className="flex items-center mt-3 sm:mt-0"
        autoComplete="off"
        autoCapitalize="off"
        autoCorrect="off"
        onSubmit={handleFormSubmit}
      >
        <input
          className="border rounded p-2 focus:outline-none focus-within:ring-2"
          type="text"
          placeholder="Filter"
          onChange={handleInputChange}
          value={filterValue}
        />
        <button
          type="submit"
          className="py-2 px-6 ml-2 text-white focus:outline-none focus:ring-2 border rounded border-green-400 bg-green-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
          </svg>
        </button>
      </form>
    </nav>
  )
}
