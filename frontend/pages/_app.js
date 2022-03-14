import '../styles/globals.css'
import { RecoilRoot } from 'recoil'
import { ChakraProvider, useDisclosure } from '@chakra-ui/react'

import Menu from '../components/shared/menu'
import Footer from '../components/shared/footer'
import Head from 'next/head'
import Script from 'next/script'
import { GA_TRACKING_ID } from '../utils/gtag'

export const metaConstants = {
  generator: 'canoe',
  author: 'canoe',
  subject: 'Tech Blog by Github Pages',
  sitename: 'This is for Developer',
  copyright: 'Copyrights © 2021 canoe All Rights Reserved'
}

function MyApp ({ Component, pageProps }) {
  const drawerDisclosure = useDisclosure()

  return (
    <RecoilRoot>
      <ChakraProvider>
        <Head>
          <title>This is for Developer</title>
          <meta charSet="utf-8" lang='en'></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2.0, minimum-scale=0.5" />
          <meta name="theme-color" content="#000000" />
          <meta name="image" property="og:image" content="/logo.png"/>
          <meta name ="keywords" content="This is for Developer - Github Pages Blog"/>
          <meta name ="reply-to" content="canoe918@gmail.com"/>
          <meta name ="content-language" content="kr"/>
          <meta httpEquiv="content-type" content="text/html; charset=kr"/>
          <meta name="robots" content="ALL"/>
          <meta name="generator" content={metaConstants.generator}></meta>
          <meta name="author" content={metaConstants.author}></meta>
          <meta name="subject" content={metaConstants.subject}></meta>
          <meta name="copyright" content={metaConstants.copyright}></meta>
          <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css" />
          <link rel="icon" href="/logo.png" />
          <link rel="shortcut icon" href="/logo.png"/>
          <link rel="apple-touch-icon" href="/logo.png" />
        </Head>
        {/* Global site tag (gtag.js) - Google Analytics */}
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}></Script>
        <Script
          id="google-analytics-dev"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_TRACKING_ID}');
            `
          }}
        />
        <Menu drawerDisclosure={drawerDisclosure}></Menu>
        <Component {...pageProps}/>
        <Footer
          background='black'
          color='white'
          padding='2em 1em 2em 1em'
          drawerDisclosure={drawerDisclosure}
        ></Footer>
      </ChakraProvider>
    </RecoilRoot>
  )
}

export default MyApp
