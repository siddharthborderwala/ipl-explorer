import GitHubIcon from '../assets/icons/github.svg'
import SunIcon from '../assets/icons/sun.svg'

export default function Header() {
  const toggleDarkMode = () => {
    document.querySelector('html').classList.toggle('dark')
  }

  return (
    <header className="w-full bg-white px-6 py-3 flex justify-between items-center border-b">
      <a
        href="#"
        className="focus:outline-none focus:ring-2 border-none rounded"
      >
        <h1 className="text-3xl font-bold text-gray-800">IPL Explorer</h1>
      </a>
      <div className="flex space-x-6">
        <button
          aria-label="toggle dark mode button"
          onClick={toggleDarkMode}
          className="focus:outline-none focus:ring-1 border-none rounded scale-150 transform"
        >
          <SunIcon className="transition-colors text-gray-600 hover:text-gray-900" />
        </button>
        <a
          href="https://github.com/siddharthborderwala/ipl-explorer"
          target="_blank"
          aria-label="link to github repository"
          rel="noopener noreferrer"
          className="focus:outline-none focus:ring-1 border-none rounded scale-150 transform"
        >
          <GitHubIcon className="transition-colors text-gray-600 hover:text-gray-900" />
        </a>
      </div>
    </header>
  )
}
