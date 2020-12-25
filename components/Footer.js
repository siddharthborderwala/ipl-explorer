import HeartIcon from '../assets/icons/heart.svg'

/**
 * Footer of the Site
 */
export default function Footer() {
  return (
    <footer className="bg-white border-t py-8 flex justify-center dark:border-gray-400 dark:bg-my-black">
      <p className="text-gray-700 mx-auto m-0 text-sm sm:text-base dark:text-gray-50">
        Created with <HeartIcon className="text-red-500 inline" /> by {}
        <a
          href="https://codexsid.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:underline"
        >
          Siddharth Borderwala
        </a>
        {} &copy; {new Date().getFullYear()}
      </p>
    </footer>
  )
}
