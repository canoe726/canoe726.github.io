import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

import { Box, Text } from '@chakra-ui/react'

import { PostsFrontMatter, postsFrontMatterState } from '../stores/posts'
import PostCardGrid from '../components/index/postCardGrid'

interface HomeProps {
  posts: PostsFrontMatter[]
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  const setPostsFrontMatter = useSetRecoilState(postsFrontMatterState)

  useEffect(() => {
    setPostsFrontMatter(posts)
  }, [posts, setPostsFrontMatter])

  return (
    <Box padding='2em 4em 4em 4em' background='linear-gradient(0deg, #bebebe, transparent)'>
      <Text fontSize='5xl' fontWeight='bold' margin='0 0 0.2em 0'>
        This is Blog
      </Text>
      <PostCardGrid></PostCardGrid>
    </Box>
  )
}

export async function getStaticProps () {
  const baseUrl = './public/post'
  const dirs = fs.readdirSync(path.join(baseUrl))
  const dirList = dirs.map((dir) => {
    return {
      category: dir,
      files: fs.readdirSync(path.join(`${baseUrl}/${dir}`))
    }
  })
  const posts = dirList.map((dir) => {
    const post = {
      category: dir.category,
      files: dir.files.map((postDirName) => {
        const postDir = fs.readdirSync(path.join(`${baseUrl}/${dir.category}/${postDirName}`))
        const filename = postDir.filter(postItem => postItem.includes('.md'))[0]
        const slug = filename.replace('.md', '')
        const markdownWithMeta =
          fs.readFileSync(path.join(`${baseUrl}/${dir.category}/${postDirName}`, filename), 'utf-8')
        const { data: frontmatter, content } = matter(markdownWithMeta)

        return {
          slug: slug,
          frontmatter: frontmatter,
          content: content
        }
      })
    }
    return post
  })

  return {
    props: {
      posts: posts
    }
  }
}

export default Home
