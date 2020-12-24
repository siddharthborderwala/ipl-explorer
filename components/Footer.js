import HeartIcon from '../assets/icons/heart.svg'

export default function Footer() {
  return (
    <footer className="bg-white border-t py-8 flex justify-center">
      <p className="text-gray-700 mx-auto m-0">
        Created with <HeartIcon className="text-red-500 inline" /> by{' '}
        <a
          href="https://codexsid.com"
          target="_blank"
          className="text-indigo-500 hover:underline"
        >
          Siddharth Borderwala {}
        </a>
        &ncopy; {new Date().getFullYear()}
      </p>
    </footer>
  )
}
