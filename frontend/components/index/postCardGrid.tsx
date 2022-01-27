import { NextPage } from 'next'
import { useRecoilValue } from 'recoil'
import { Box, Container, Image, Grid, GridItem, Text, Spacer } from '@chakra-ui/react'

import { PostFrontMatterItem, postsFrontMatterSelector } from '../../stores/posts'
import { useEffect, useState } from 'react'
import markdownToHtml from '../../utils/markdownToHtml'

const PostCardGrid = () => {
  const { files } = useRecoilValue(postsFrontMatterSelector)

  return (
    <Grid templateColumns='repeat(2, 1fr)' gap={6}>
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
  data: PostFrontMatterItem
}

const PostCard: NextPage<PostCardProps> = ({ data }) => {
  const [content, setContent] = useState<string>('')

  useEffect(() => {
    markdownToHtml(data.content).then(content => setContent(content))
  }, [data.content])

  return (
    <GridItem w='100%' h='300px' overflow='hidden' cursor='pointer'>
      <Container width='100%' height='100%' padding='0'>
        <Box width='100%' height='180px' borderRadius='16px'>
          <Image
            src={`/post/${data.frontmatter.category}/${data.slug}/${data.frontmatter.coverImage}`}
            width='100%'
            height='100%'
            objectFit='cover'>
          </Image>
        </Box>
        <Box width='100%' height='100px'>
          <Spacer height='1em'></Spacer>
          <Text fontSize='sm' color='gray.600'>{data.frontmatter.date}</Text>
          <Spacer height='0.5em'></Spacer>
          <Text fontSize='xl' fontWeight='bold'>
            {data.frontmatter.title}
          </Text>
          <Spacer height='0.5em'></Spacer>
          {content ? <div dangerouslySetInnerHTML={{ __html: (content) }}></div> : ''}
        </Box>
      </Container>
    </GridItem>
  )
}

export default PostCardGrid
