import { Box, Flex, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
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
    <Flex flexDirection='column' padding='2em 4em 4em 4em'>
      <Box width='100%' height='11em' background='blackAlpha.200' pointerEvents='none' position='absolute' top='0' left='0'></Box>
      <Box position='absolute' top='6em' right='12em'>
        <CircularAvatar size='2xl' src='/about/avatar.jpg'></CircularAvatar>
      </Box>
      <Box width='fit-content' padding='6em 0 0 0'>
        {about.frontmatter.author && (
          <Text fontSize='5xl'>{about.frontmatter.author}</Text>
        )}
        {about.frontmatter.summary && (
          <Text color='gray.400'>{about.frontmatter.summary}</Text>
        )}
        {about.frontmatter.email && (
          <a href={`mailto:${about.frontmatter.email}`}>
            <Text margin='1em 0 0 0' color='gray.600'>✉️ {about.frontmatter.email}</Text>
          </a>
        )}
        {about.frontmatter.url && (
          <a href={about.frontmatter.url} target='_blank' rel='noreferrer'>
            <Text color='gray.600'>🔗 {about.frontmatter.url}</Text>
          </a>
        )}
      </Box>
      <Box>
        <div className='post-body' dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
      </Box>
    </Flex>
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
