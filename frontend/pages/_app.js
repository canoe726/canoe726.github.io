import '../styles/globals.css'
import Menu from '../components/shared/menu'
import { RecoilRoot } from 'recoil'

function MyApp ({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Menu></Menu>
      <Component {...pageProps}/>
    </RecoilRoot>
  )
}

export default MyApp
