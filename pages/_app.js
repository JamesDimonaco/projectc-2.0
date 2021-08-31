import 'tailwindcss/tailwind.css'
import Header from '../components/header'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Component {...pageProps} />
  <Footer/>
  </>
  )
}

export default MyApp
