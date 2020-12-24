import Tags from '../components/Tags'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import ToTopButton from '../components/ToTopButton'

/**
 * The Home component rendered at /
 */
export default function Home() {
  return (
    <>
      <Tags />
      <Header />
      <Main />
      <ToTopButton />
      <Footer />
    </>
  )
}
