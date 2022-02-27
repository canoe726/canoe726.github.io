import { Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { PostsData } from '../../stores/posts'
import { getPosts } from '../../utils/loadMarkdownFiles'

interface CategoryProps {
  posts: PostsData[];
}

const Category: NextPage<CategoryProps> = ({ posts }) => {
  const [categories, setCategories] = useState<string[]>([])
  const gridItemRef = useRef<HTMLDivElement[]>([])
  const gridItemTextRef = useRef<HTMLParagraphElement[]>([])

  useEffect(() => {
    setCategories(posts.map((post) => {
      return post.category
    }))
  }, [posts])

  return (
    <Flex display='flex' flexDirection='column' padding='120px 4em 4em 4em' minHeight='80vh'>
      <Text textAlign='center' fontSize='3xl' color='black' fontWeight='normal' padding='0'>This is Blog Category</Text>
      <Text textAlign='center' fontSize='xl' color='gray.400' fontWeight='light' padding='0'>Keywords</Text>
      <Flex margin='2em 0 0 0' height='100%' justifyContent='center' alignItems='center'>
        <Grid gridTemplateColumns='repeat(4, 1fr)' gridGap='0.5em'>
          {categories && (
            categories.map((category, idx) => {
              return (
                <Link key={idx} href={`category/${category}`} passHref>
                  <GridItem
                    onMouseOver={() => {
                      if (gridItemRef.current && gridItemTextRef.current) {
                        gridItemRef.current[idx].style.borderColor = '#4299E1'
                        gridItemTextRef.current[idx].style.color = '#4299E1'
                      }
                    }}
                    onMouseOut={() => {
                      if (gridItemRef.current && gridItemTextRef.current) {
                        gridItemRef.current[idx].style.borderColor = 'rgba(0, 0, 0, 0.2)'
                        gridItemTextRef.current[idx].style.color = 'black'
                      }
                    }}
                    ref={el => { gridItemRef.current[idx] = el! }}
                    cursor='pointer'
                    w='140px'
                    h='140px'
                    border='1px solid rgba(0, 0, 0, 0.2)'
                    padding='2em'
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'
                  >
                    <Text ref={el => { gridItemTextRef.current[idx] = el! }} fontWeight='light' fontSize='md' textAlign='center'>{category}</Text>
                  </GridItem>
                </Link>
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
