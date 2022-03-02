import { Badge, Box, Flex, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import CircularAvatar from '../components/shared/circularAvatar'
import { AboutData } from '../stores/about'
import { getAbout } from '../utils/loadMarkdownFiles'
import markdownToHtml from '../utils/markdownToHtml'

interface AboutProps {
  about: AboutData;
}

const About: NextPage<AboutProps> = ({ about }) => {
  const [htmlContent, setHtmlContent] = useState<string>('')

  useEffect(() => {
    markdownToHtml(about.content).then((html) => {
      setHtmlContent(html)
    })
  }, [about.content, setHtmlContent])

  return (
    <>
      <Head>
        <meta name="description" content={`This is Blog - About | ${about.frontmatter.author}`}></meta>
      </Head>
      <Flex flexDirection='column' padding={['80px 1.5em 4em 1.5em', '100px 2.5em 4em 2.5em', '100px 4em 4em 4em']}>
        <Box width='100%' height={['9.5em', '11em', '11em']} background='rgba(0,0,0,0.05)' pointerEvents='none' position='absolute' top='0' left='0'></Box>
        <Box position='absolute' top='5em' right={['1.5em', '2em', '8em']}>
          <CircularAvatar size={['128px', '168px', '168px']} src='/about/avatar.jpg'></CircularAvatar>
        </Box>
        <Box width='fit-content' padding='6em 0 0 0'>
          {about.frontmatter.author && (
            <Text fontSize='5xl'>{about.frontmatter.author}</Text>
          )}
          {about.frontmatter.summary && (
            <Text color='gray.400'>{about.frontmatter.summary}</Text>
          )}
          {about.frontmatter.email && (
            <Text width='fit-content' margin='1em 0 0 0' color='gray.600'>
              ✉️&nbsp;&nbsp;
              <a href={`mailto:${about.frontmatter.email}`}>
                {about.frontmatter.email}
              </a>
            </Text>
          )}
          {about.frontmatter.url && (
            <Text color='gray.600'>
              🔗&nbsp;&nbsp;
              <a href={about.frontmatter.url} target='_blank' rel='noreferrer'>
                {about.frontmatter.url}
              </a>
            </Text>
          )}
          {about.frontmatter.tags && (
            <Flex flexWrap='wrap' margin='1.5em 0 0 0'>
              {(
                about.frontmatter.tags.replace(' ', '').split(',').map((tag, idx) => {
                  return (
                    <Badge key={idx} padding='1' margin='0 1em 0.8em 0' borderRadius='4px' colorScheme='blue'>{`# ${tag}`}</Badge>
                  )
                })
              )}
            </Flex>
          )}
        </Box>
        <Box>
          <div className='post-body' dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
        </Box>
      </Flex>
    </>
  )
}

export async function getStaticProps () {
  return {
    props: {
      about: getAbout()
    }
  }
}

export default About
