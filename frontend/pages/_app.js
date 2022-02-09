import '../styles/globals.css'
import { RecoilRoot } from 'recoil'
import { ChakraProvider } from '@chakra-ui/react'

import Menu from '../components/shared/menu'
import Footer from '../components/shared/footer'

function MyApp ({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <Menu></Menu>
        <Component {...pageProps}/>
        <Footer
          background='black'
          color='white'
          padding='2em 3em 2em 3em'
        ></Footer>
      </ChakraProvider>
    </RecoilRoot>
  )
}

export default MyApp
