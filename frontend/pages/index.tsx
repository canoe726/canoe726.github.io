import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

import { Box, Container, Text } from '@chakra-ui/react'

import { PostsData, postsDataState } from '../stores/posts'
import PostCardGrid from '../components/index/postCardGrid'
import { getPosts } from '../utils/loadMarkdownFiles'

interface HomeProps {
  posts: PostsData[]
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  const setPostsData = useSetRecoilState(postsDataState)

  useEffect(() => {
    setPostsData(posts)
  }, [posts, setPostsData])

  return (
    <Box padding='0em 4em 4em 4em'>
      <Container flexDirection='column' margin='1em 0 2em 0'>
        <Text fontSize='5xl' color='black' fontWeight='bold' padding='0'>
          This is tech blog, canoe
        </Text>
        <Text fontSize='4xl' color='blackAlpha.600' fontWeight='bold'>
          Hello World!
        </Text>
        <Text fontSize='4xl' color='blackAlpha.300' fontWeight='bold'>
          This is git blog
        </Text>
      </Container>
      <PostCardGrid></PostCardGrid>
    </Box>
  )
}

export async function getStaticProps () {
  return {
    props: {
      posts: getPosts()
    }
  }
}

export default Home
