import '../styles/globals.css'
import Menu from '../components/shared/menu'
import { RecoilRoot } from 'recoil'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp ({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <Menu></Menu>
        <Component {...pageProps}/>
      </ChakraProvider>
    </RecoilRoot>
  )
}

export default MyApp
