import { Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { PostsData } from '../stores/posts'
import { getPosts } from '../utils/loadMarkdownFiles'

interface CategoryProps {
  posts: PostsData[];
}

const Category: NextPage<CategoryProps> = ({ posts }) => {
  const [categories, setCategories] = useState<string[]>([])
  const [categoryItemSizes, setCategoryItemSizes] = useState<number[]>([])

  useEffect(() => {
    setCategories(posts.map((post) => {
      return post.category
    }))
    setCategoryItemSizes(posts.map((post) => {
      return post.files.length
    }))
  }, [posts])

  return (
    <Flex display='flex' flexDirection='column' padding='120px 4em 4em 4em' minHeight='80vh'>
      <Text textAlign='center' fontSize='4xl' color='black' fontWeight='normal' padding='0'>This is Blog Category</Text>
      <Text textAlign='center' fontSize='2xl' color='black' fontWeight='light' padding='0'>This is Blog Category</Text>
      <Flex margin='2em 0 0 0' height='100%' justifyContent='center' alignItems='center'>
        <Grid gridTemplateColumns='repeat(3, 1fr)' gridGap='0.5em'>
          {categories && (
            categories.map((category, idx) => {
              return (
                <GridItem key={idx} w='180px' h='180px' border='1px solid rgba(0, 0, 0, 0.2)' padding='2em' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                  <Text textAlign='center' margin='0 0 1em 0'>{category}</Text>
                  <Text fontSize='x-small' textAlign='center'>Posts ({categoryItemSizes[idx]})</Text>
                </GridItem>
              )
            })
          )}
        </Grid>
      </Flex>
    </Flex>
  )
}

export async function getStaticProps () {
  return {
    props: {
      posts: getPosts()
    }
  }
}

export default Category
