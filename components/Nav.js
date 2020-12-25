import NavLink from './NavLink'
import { useEffect, useState } from 'react'

/**
 * A Nav for navigating through different NavLinks
 *
 * @param {React.PropsWithChildren & {activeTab: string; handleFilterSubmit: (inp: string) => void;}} props
 */
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
    <nav className="bg-white dark:bg-my-black p-4 border-b dark:border-gray-400 rounded-b-none rounded-md flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center">
      <div className="space-x-2 w-full flex justify-between md:block">
        <NavLink tabName="players" isActive={activeTab === 'players'} />
        <NavLink tabName="teams" isActive={activeTab === 'teams'} />
        <NavLink tabName="venues" isActive={activeTab === 'venues'} />
      </div>
      <form
        className="flex w-full md:w-auto items-center mt-3 md:mt-0"
        autoComplete="off"
        autoCapitalize="off"
        autoCorrect="off"
        onSubmit={handleFormSubmit}
      >
        <input
          className="text-indigo-600 dark:bg-my-gray dark:text-indigo-100 dark:border-gray-400 flex-grow flex-shrink md:flex-grow-0 md:flex-shrink-0 inline-block border placeholder-current rounded p-2.5 focus:outline-none focus-within:ring-2"
          type="text"
          placeholder="Filter here"
          onChange={handleInputChange}
          value={filterValue}
          id="filter-input"
        />
        <label
          htmlFor="filter-input"
          className="w-0 h-0 opacity-0 pointer-events-none"
        >
          Filter here
        </label>
        <button
          aria-label="apply filter to results button"
          type="submit"
          className="py-2.5 px-6 md:px-8 ml-2 text-white focus:outline-none focus:ring-2 border rounded border-indigo-400 bg-indigo-400"
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
