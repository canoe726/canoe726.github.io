import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '../styles/globals.css'
import { RecoilRoot } from 'recoil'
import { ChakraProvider } from '@chakra-ui/react'

import Menu from '../components/shared/menu'
import Footer from '../components/shared/footer'

config.autoAddCss = false

function MyApp ({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <Menu></Menu>
        <Component {...pageProps}/>
        <Footer></Footer>
      </ChakraProvider>
    </RecoilRoot>
  )
}

export default MyApp
