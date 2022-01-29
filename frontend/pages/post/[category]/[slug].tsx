import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { NextPage } from 'next'
import { Box, Text } from '@chakra-ui/react'
// import { useRouter } from 'next/router'

import { FrontMatter } from '../../../stores/posts'

interface PostProps {
  slug: string,
  category: string,
  frontmatter: FrontMatter,
  content: string
}

const Post: NextPage<PostProps> = ({
  slug,
  category,
  frontmatter,
  content
}) => {
  // const router = useRouter()
  // const { category, slug } = router.query
  // const [content, setContent] = useState<string>('')
  // useEffect(() => {
  //   markdownToHtml(data.content).then(content => setContent(content))
  // }, [data.content])

  return (
    <Box padding='2em 4em 4em 4em'>
      <Text fontSize='2xl'>{frontmatter.title}</Text>
      {/* {content ? <div dangerouslySetInnerHTML={{ __html: (content) }}></div> : ''} */}
    </Box>
  )
}

export async function getStaticPaths () {
  const files = fs.readdirSync(path.join('./public/_post'))
  const paths = files.map(dirName => {
    const dirs = fs.readdirSync(path.join(`./public/_post/${dirName}`))
    const slugs = dirs.map(dir => {
      return dir.replace('.md', '')
    })
    const params = slugs.map((slug) => {
      return {
        params: {
          category: dirName,
          slug: slug
        }
      }
    })
    return params
  })
  return {
    paths: paths.flat(),
    fallback: false
  }
}

interface getStaticPropsProperty {
  params: {
    category: string,
    slug: string
  }
}

export async function getStaticProps ({ params: { category, slug } }: getStaticPropsProperty) {
  const markdownWithMeta = fs.readFileSync(path.join(`./public/_post/${category}/${slug}`, `${slug}.md`), 'utf-8')
  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      slug: slug,
      category: category,
      frontmatter: frontmatter,
      content: content
    }
  }
}

export default Post
