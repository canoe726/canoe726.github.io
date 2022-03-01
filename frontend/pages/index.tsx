import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

import { Box, Flex, Text } from '@chakra-ui/react'

import { PostsData, postsDataState } from '../stores/posts'
import PostCardGrid from '../components/index/postCardGrid'
import ImageSlider from '../components/index/imageSlider'
import { getPosts } from '../utils/loadMarkdownFiles'

interface HomeProps {
  posts: PostsData[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  const setPostsData = useSetRecoilState(postsDataState)

  useEffect(() => {
    setPostsData(posts)
  }, [posts, setPostsData])

  return (
    <Box padding='84px 0em 4em 0em'>
      <Flex flexDirection='column' justifyContent='center' alignItems='flex-start' padding='1em 4em 4em 4em'>
        <Text fontSize='6xl' color='black' fontWeight='normal' padding='0'>
          This is tech blog
        </Text>
        <Text fontSize='5xl' color='gray.600' fontWeight='light'>
          Hello World!
        </Text>
        <Text fontSize='5xl' color='gray.300' fontWeight='light'>
          This is git blog
        </Text>
      </Flex>
      <ImageSlider></ImageSlider>
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
