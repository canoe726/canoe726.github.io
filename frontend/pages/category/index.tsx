import { Box, Flex, Text } from '@chakra-ui/react'
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
    <Flex display='flex' flexDirection='column' padding='100px 4em 4em 4em' minHeight='85vh'>
      <Text textAlign='center' fontSize='5xl' color='black' fontWeight='normal' padding='0'>Category</Text>
      <Text textAlign='center' fontSize='2xl' color='gray.400' fontWeight='light' padding='0'>Keywords</Text>
      <Flex margin='4em 0 0 0' height='100%' justifyContent='center' alignItems='center'>
        <Flex flexWrap='wrap' justifyContent='center' alignItems='center'>
          {categories && (
            categories.map((category, idx) => {
              return (
                <Link key={idx} href={`category/${category}`} passHref>
                  <Box
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
                    margin='-1px -1px 0 0'
                    border='1px solid rgba(0, 0, 0, 0.2)'
                    padding='2em'
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'
                  >
                    <Text ref={el => { gridItemTextRef.current[idx] = el! }} fontWeight='light' fontSize='md' textAlign='center'>{category}</Text>
                  </Box>
                </Link>
              )
            })
          )}
        </Flex>
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
