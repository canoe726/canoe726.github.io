import { NextPage } from 'next'
import { useRecoilValue } from 'recoil'
import { Box, Container, Image, Grid, GridItem, Text, Spacer, Flex } from '@chakra-ui/react'

import { PostData, postsDataSelector } from '../../stores/posts'
import Link from 'next/link'

const PostCardGrid = () => {
  const { files } = useRecoilValue(postsDataSelector)

  return (
    <Flex flexDirection='column' padding='0 4em 0 4em'>
      <Text fontSize='4xl' textAlign='center' margin='2em 0 0em 0'>Recent Articles</Text>
      <Text fontSize='xl' color='gray.400' textAlign='center' margin='0em 0 3em 0'>Various Articles</Text>
      <Grid templateColumns='repeat(3, 1fr)' gap={6}>
        {files.slice().sort((a: PostData, b: PostData) => {
          if (a.frontmatter.date > b.frontmatter.date) {
            return -1
          } else if (a.frontmatter.date < b.frontmatter.date) {
            return 1
          } else {
            return 0
          }
        }).map((file, idx) => {
          return (
            <PostCard
              key={idx}
              data={file}>
            </PostCard>
          )
        })}
      </Grid>
    </Flex>
  )
}

interface PostCardProps {
  data: PostData
}

const PostCard: NextPage<PostCardProps> = ({ data }) => {
  console.log(`/_post/${data.frontmatter.category}/${data.slug}/${data.frontmatter.coverImage}`)
  return (
    <Link href={`/post/${data.frontmatter.category}/${data.slug}`}>
      <GridItem w='100%' h='450px' overflow='hidden' cursor='pointer' margin='0 0 2em 0'>
        <Container width='100%' height='100%' padding='0'>
          <Box width='100%' height='300px' borderRadius='16px'>
            <Image
              src={`/_post/${data.frontmatter.category}/${data.slug}/${data.frontmatter.coverImage}`}
              width='100%'
              height='100%'
              objectFit='cover'>
            </Image>
          </Box>
          <Box width='100%' height='120px'>
            <Spacer height='1em'></Spacer>
            <Text fontSize='sm' color='gray.600'>{data.frontmatter.date}</Text>
            <Spacer height='0.5em'></Spacer>
            <Text fontSize='xl' fontWeight='bold'>
              {data.frontmatter.title}
            </Text>
            <Spacer height='0.5em'></Spacer>
            <Text fontSize='sm' color='gray.600'>
              {data.frontmatter.summary ? data.frontmatter.summary : ''}
            </Text>
          </Box>
        </Container>
      </GridItem>
    </Link>
  )
}

export default PostCardGrid
