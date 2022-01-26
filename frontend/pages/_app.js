import '../styles/globals.css'
import Menu from '../components/shared/menu'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Menu></Menu>
      <Component {...pageProps}/>
    </>
  )
}

export default MyApp
