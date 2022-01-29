import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

import { Box, Text } from '@chakra-ui/react'

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
    <Box padding='2em 4em 4em 4em'>
      <Text fontSize='5xl' fontWeight='bold' margin='0 0 0.2em 0'>
        This is Blog
      </Text>
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
