import { useEffect, useState } from 'react'

/**
 * ToTopButton observes the scrollTop of document and display a scroll to top button on 1500px
 */
export default function ToTopButton() {
  const [toTopVisible, setToTopVisible] = useState(false)

  const scrollListener = () => {
    if (document.documentElement.scrollTop > 1500)
      !toTopVisible && setToTopVisible(true)
    else setToTopVisible(false)
  }

  const scrollToTop = () => {
    document.documentElement.scrollTo({
      top: 0
    })
  }

  useEffect(() => {
    document.addEventListener('scroll', scrollListener)
    return () => document.removeEventListener('scroll', scrollListener)
  }, [])

  return (
    <>
      {toTopVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-gray-800 dark:bg-gray-400 text-white dark:text-gray-800 p-2 border-none rounded-md focus:outline-none focus:ring-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
            />
          </svg>
        </button>
      )}
    </>
  )
}
