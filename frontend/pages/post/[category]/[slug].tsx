import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { NextPage } from 'next'
import { Box, Text } from '@chakra-ui/react'
import { FrontMatter } from '../../../stores/posts'
import { useEffect, useRef, useState } from 'react'
import markdownToHtml from '../../../utils/markdownToHtml'

interface PostProps {
  slug: string;
  category: string;
  frontmatter: FrontMatter;
  content: string;
}

const Post: NextPage<PostProps> = ({
  slug,
  category,
  frontmatter,
  content
}) => {
  const [htmlContent, setHtmlContent] = useState<string>('')
  const imageZoomBoxRef = useRef<HTMLDivElement>(null)

  const imageZoomScroll = () => {
    if (imageZoomBoxRef.current) {
      imageZoomBoxRef.current.style.backgroundSize = 120 - window.pageYOffset / 20 + '%'
      imageZoomBoxRef.current.style.opacity = `${1 - window.pageYOffset / 500}`
    }
  }

  useEffect(() => {
    const topTitle = document.getElementById('top-title')
    if (topTitle) {
      topTitle.innerHTML = frontmatter.title
    }
    return () => {
      if (topTitle) {
        topTitle.innerHTML = ''
      }
    }
  }, [frontmatter])

  useEffect(() => {
    window.addEventListener('scroll', imageZoomScroll)
    return () => {
      window.removeEventListener('scroll', imageZoomScroll)
    }
  }, [])

  useEffect(() => {
    markdownToHtml(content).then((html) => {
      setHtmlContent(html)
    })
  }, [content, setHtmlContent])

  return (
    <Box position='relative' padding='50vh 3em 4em 3em'>
      <Box
        ref={imageZoomBoxRef}
        position='absolute'
        top='64px'
        left='0'
        width='100%'
        height='50vh'
        background={`url(${`/post/${frontmatter.category}/${slug}/${frontmatter.coverImage}`})`}
        backgroundRepeat='no-repeat'
        backgroundSize='120%'
        backgroundPosition='center'
      >
      </Box>
      <Box position='absolute' top='64px' left='0' width='100%' height='50vh' backgroundColor='rgba(0, 0, 0, 0.25)'>
        <Text fontWeight='medium' position='absolute' top='50%' left='50%' transform='translate(-50%, -50%)' textAlign='center' fontSize='3xl' color='white'>{frontmatter.title}</Text>
        <Text fontWeight='light' position='absolute' top='70%' left='50%' transform='translate(-50%, -70%)' fontSize='md' textAlign='center' color='gray.100'>{category}</Text>
      </Box>
      <Box margin='104px 0 0 0'>
        <div className='post-body' dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
      </Box>
    </Box>
  )
}

export async function getStaticPaths () {
  const files = fs.readdirSync(path.join('./public/post'))
  const paths = files.map(dirName => {
    const dirs = fs.readdirSync(path.join(`./public/post/${dirName}`))
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
    category: string;
    slug: string;
  }
}

export async function getStaticProps ({ params: { category, slug } }: getStaticPropsProperty) {
  const markdownWithMeta = fs.readFileSync(path.join(`./public/post/${category}/${slug}`, `${slug}.md`), 'utf-8')
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
