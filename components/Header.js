import { useEffect } from 'react'
import GitHubIcon from '../assets/icons/github.svg'
import SunIcon from '../assets/icons/sun.svg'

/**
 * Header of the Site
 */
export default function Header() {
  const toggleDarkMode = () => {
    document.querySelector('html').classList.toggle('dark')
  }

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches)
      document.querySelector('html').classList.add('dark')
  }, [])

  return (
    <header className="w-full bg-white dark:bg-my-black px-6 py-3 flex justify-between items-center border-b dark:border-gray-400">
      <a
        href="#"
        className="focus:outline-none focus:ring-2 border-none rounded"
      >
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-50">
          IPL Explorer
        </h1>
      </a>
      <div className="flex space-x-6">
        <button
          aria-label="toggle dark mode button"
          title="click to toggle dark mode"
          onClick={toggleDarkMode}
          className="focus:outline-none focus:ring-1 border-none rounded scale-150 transform"
        >
          <SunIcon className="transition-colors text-gray-600 dark:text-gray-50 hover:text-gray-900" />
        </button>
        <a
          href="https://github.com/siddharthborderwala/ipl-explorer"
          target="_blank"
          aria-label="link to github repository"
          rel="noopener noreferrer"
          className="focus:outline-none focus:ring-1 border-none rounded scale-150 transform"
        >
          <GitHubIcon className="transition-colors text-gray-600 dark:text-gray-50 hover:text-gray-900" />
        </a>
      </div>
    </header>
  )
}
