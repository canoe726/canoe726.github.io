import type { NextPage } from 'next'
// import { useRouter } from 'next/router'

import { Box, Text } from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'
import { postsDataState } from '../../../stores/posts'

const Post: NextPage = (props) => {
  // const router = useRouter()
  // const { category, slug } = router.query
  const posts = useRecoilValue(postsDataState)
  console.log(posts)
  // const [content, setContent] = useState<string>('')
  // useEffect(() => {
  //   markdownToHtml(data.content).then(content => setContent(content))
  // }, [data.content])

  return (
    <Box padding='2em 4em 4em 4em'>
      <Text fontSize='2xl'>{'title'}</Text>
      post
      {/* {content ? <div dangerouslySetInnerHTML={{ __html: (content) }}></div> : ''} */}
    </Box>
  )
}

export default Post
