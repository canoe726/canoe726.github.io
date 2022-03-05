import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'
import { postsDataState } from '../../stores/posts'

const NextPosts = () => {
  const postsData = useRecoilValue(postsDataState)

  return (
    <Flex flexDirection='column' padding={['0 1.5em 4em 1.5em', '0 2.5em 4em 2.5em', '0 4em 4em 4em']}>
      <Box>
        <Button>{'< Prev'}</Button>
        <Button>{'Next >'}</Button>
      </Box>
      <Box>
        <Text>Next Posts</Text>
      </Box>
    </Flex>
  )
}

export default NextPosts
