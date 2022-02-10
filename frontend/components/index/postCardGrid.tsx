import { NextPage } from 'next'
import { useRecoilValue } from 'recoil'
import { Box, Container, Image, Grid, GridItem, Text, Spacer } from '@chakra-ui/react'

import { PostData, postsDataSelector } from '../../stores/posts'
import Link from 'next/link'

const PostCardGrid = () => {
  const { files } = useRecoilValue(postsDataSelector)

  return (
    <Grid templateColumns='repeat(2, 1fr)' gap={6} padding='0 4em 0 4em'>
      {files.map((file, idx) => {
        return (
          <PostCard
            key={idx}
            data={file}>
          </PostCard>
        )
      })}
    </Grid>
  )
}

interface PostCardProps {
  data: PostData
}

const PostCard: NextPage<PostCardProps> = ({ data }) => {
  return (
    <Link href={`/post/${data.frontmatter.category}/${data.slug}`}>
      <GridItem w='100%' h='300px' overflow='hidden' cursor='pointer' margin='0 0 2em 0'>
        <Container width='100%' height='100%' padding='0'>
          <Box width='100%' height='180px' borderRadius='16px'>
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
