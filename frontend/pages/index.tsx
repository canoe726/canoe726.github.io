import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

import { Box, Flex, Text } from '@chakra-ui/react'

import { PostsData, postsDataState } from '../stores/posts'
import PostCardGrid from '../components/index/postCardGrid'
import ImageSlider from '../components/index/imageSlider'
import { getPosts } from '../utils/loadMarkdownFiles'
import Head from 'next/head'

interface HomeProps {
  posts: PostsData[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  const setPostsData = useSetRecoilState(postsDataState)

  useEffect(() => {
    setPostsData(posts)
  }, [posts, setPostsData])

  return (
    <>
      <Head>
        <meta name="description" content="This is for Developer"></meta>
      </Head>
      <Box padding='84px 0em 4em 0em'>
        <Flex flexDirection='column' justifyContent='center' alignItems='flex-start' padding={['1em 1.5em 4em 1.5em', '1em 2.5em 4em 2.5em', '1em 4em 4em 4em']}>
          <Text fontSize={['3xl', '4xl', '5xl']} color='black' fontWeight='normal' padding='0'>
            This is for Developer
          </Text>
          <Text fontSize={['2xl', '3xl', '4xl']} color='gray.600' fontWeight='light'>
            🖥 프론트엔드 개발에 관한 모든 것
          </Text>
          <Text fontSize={['2xl', '3xl', '4xl']} color='gray.400' fontWeight='light'>
            # Javascript # React
          </Text>
        </Flex>
        <ImageSlider></ImageSlider>
        <PostCardGrid></PostCardGrid>
      </Box>
    </>
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
