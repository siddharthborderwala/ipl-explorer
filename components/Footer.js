import HeartIcon from '../assets/icons/heart.svg'

export default function Footer() {
  return (
    <footer className="bg-white border-t py-8 flex justify-center">
      <p className="text-gray-700 mx-auto m-0 text-sm sm:text-base">
        Created with <HeartIcon className="text-red-500 inline" /> by{' '}
        <a
          href="https://codexsid.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline"
        >
          Siddharth Borderwala
        </a>
        {} &copy; {new Date().getFullYear()}
      </p>
    </footer>
  )
}
