import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { postsDataState } from '../../stores/posts'

const NextPosts = () => {
  const postsData = useRecoilValue(postsDataState)
  // const [filtered, setFiltered] = useState<>()

  return (
    <Flex justifyContent='center' alignItems='center' flexDirection='column' padding={['0 1.5em 4em 1.5em', '0 2.5em 4em 2.5em', '0 4em 4em 4em']}>
      <Box display='flex'>
        <Button margin='0 0.5em 0 0.5em'>{'< Prev'}</Button>
        <Button margin='0 0.5em 0 0.5em'>{'Next >'}</Button>
      </Box>
      <Box margin='1em 0 0 0'>
        <Text fontWeight='normal'>Related Posts</Text>
        {postsData.map((postData, idx) => {
          return (
            <Text key={idx}>
              {postData.category}
            </Text>
          )
        })}
      </Box>
      <NextPostList data={postsData}></NextPostList>
    </Flex>
  )
}

interface NextPostListProps {
  data: any;
}

const NextPostList: NextPage<NextPostListProps> = ({ data }) => {
  return (
    <Box margin='1em 0 0 0'>
      <Text fontWeight='normal'>Random Posts</Text>
      {data.map((postData, idx) => {
        return (
          <Text key={idx}>
            {postData.category}
          </Text>
        )
      })}
    </Box>
  )
}

export default NextPosts
