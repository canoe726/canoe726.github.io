import { Badge, Box, Flex, Stack, Text } from '@chakra-ui/react'
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
    <Flex flexDirection='column' padding='100px 3em 4em 3em'>
      <Box width='100%' height='11em' background='blue.50' pointerEvents='none' position='absolute' top='0' left='0'></Box>
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
          <Stack direction='row' margin='1.5em 0 0 0'>
            {(
              about.frontmatter.tags.replace(' ', '').split(',').map((tag, idx) => {
                return (
                  <Badge key={idx} padding='1' borderRadius='4px' colorScheme='blue'>{`# ${tag}`}</Badge>
                )
              })
            )}
          </Stack>
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
