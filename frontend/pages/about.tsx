import { Box, Flex, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { AboutData } from '../stores/about'
import { getAbout } from '../utils/loadMarkdownFiles'
import markdownToHtml from '../utils/markdownToHtml'

interface AboutProps {
  about: AboutData
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
      <Box>
        <Text>{about.frontmatter.author}</Text>
        <Text>{about.frontmatter.summary}</Text>
      </Box>
      <Box>
        <Text>{about.frontmatter.email}</Text>
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
