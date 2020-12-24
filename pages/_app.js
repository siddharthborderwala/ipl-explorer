import '../styles/tailwind.css'
import '../styles/base.css'

/**
 * The main app component
 *
 * @param {React.HTMLAttributes<HTMLDivElement> & {Component: React.Component; pageProps: React.PropsWithChildren;}} props
 */
function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default App
