import { NextPage } from 'next'
import { useRecoilValue } from 'recoil'
import { Box, Container, Image, Grid, GridItem, Text, Spacer, Flex } from '@chakra-ui/react'

import { PostData, postsDataSelector } from '../../stores/posts'
import Link from 'next/link'
import { useRef } from 'react'

const PostCardGrid = () => {
  const { files } = useRecoilValue(postsDataSelector)

  return (
    <Flex flexDirection='column' padding='0 4em 0 4em'>
      <Text fontSize='5xl' textAlign='center' fontWeight='normal' margin='1em 0 0em 0'>Recent Articles</Text>
      <Text fontSize='2xl' color='gray.400' fontWeight='light' textAlign='center' margin='0em 0 4em 0'>Various Articles</Text>
      <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']} gap={6}>
        {files.map((file, idx) => {
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
  data: PostData;
}

const PostCard: NextPage<PostCardProps> = ({ data }) => {
  const titleTextRef = useRef<HTMLDivElement>(null)

  return (
    <Link href={`/post/${data.frontmatter.category}/${data.slug}`} passHref={true}>
      <GridItem w='100%' h='480px' overflow='hidden' cursor='pointer' margin='0 0 2em 0'
        onMouseOver={() => {
          if (titleTextRef.current) {
            titleTextRef.current.style.textDecoration = 'underline'
          }
        }}
        onMouseOut={() => {
          if (titleTextRef.current) {
            titleTextRef.current.style.textDecoration = 'none'
          }
        }}
      >
        <Container width='100%' height='100%' padding='0'>
          <Box width='100%' height='300px' borderRadius='16px'>
            <Image
              alt={`${data.frontmatter.category}-${data.slug}`}
              src={`/post/${data.frontmatter.category}/${data.slug}/${data.frontmatter.coverImage}`}
              width='100%'
              height='100%'
              objectFit='cover'>
            </Image>
          </Box>
          <Box width='100%' height='120px'>
            <Spacer height='1em'></Spacer>
            <Text className='title' ref={titleTextRef} fontSize='xl' color='black' fontWeight='medium'>
              {data.frontmatter.title}
            </Text>
            <Spacer height='0.5em'></Spacer>
            <Text className='summary' fontSize='sm' color='gray.600' fontWeight='light' textOverflow='ellipsis'>
              {data.frontmatter.summary ? data.frontmatter.summary : ''}
            </Text>
            <Spacer height='1em'></Spacer>
            <Text fontSize='sm' color='black' fontWeight='medium'>
              {data.frontmatter.date}
            </Text>
          </Box>
        </Container>
      </GridItem>
    </Link>
  )
}

export default PostCardGrid
