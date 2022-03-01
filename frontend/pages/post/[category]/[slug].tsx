import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { NextPage } from 'next'
import { Box, Text } from '@chakra-ui/react'
import { FrontMatter } from '../../../stores/posts'
import { useCallback, useEffect, useRef, useState } from 'react'
import markdownToHtml from '../../../utils/markdownToHtml'
import Image from 'next/image'

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
  const imageZoomBoxRef = useRef<HTMLImageElement>(null)

  const imageZoomScroll = useCallback(() => {
    if (imageZoomBoxRef.current) {
      imageZoomBoxRef.current.style.transform = `scale(calc(1.0 + ${window.pageYOffset / 500}))`
      imageZoomBoxRef.current.style.opacity = `${1 - window.pageYOffset / 500}`
    }
    const topTitle = document.getElementById('top-title')
    if (window.scrollY >= 120 && topTitle) {
      topTitle.innerHTML = frontmatter.title
    } else if (window.screenY < 120 && topTitle) {
      topTitle.innerHTML = ''
    }
  }, [frontmatter.title])

  useEffect(() => {
    const topTitle = document.getElementById('top-title')
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
  }, [imageZoomScroll])

  useEffect(() => {
    markdownToHtml(content).then((html) => {
      setHtmlContent(html)
    })
  }, [content, setHtmlContent])

  return (
    <Box position='relative' padding='35vh 3em 4em 3em'>
      <Box
        position='absolute'
        overflow='hidden'
        top='64px'
        left='3em'
        right='3em'
        height='35vh'
      >
        <Box ref={imageZoomBoxRef} width='100%' height='100%' position='relative'>
          <Image
            layout='fill'
            objectFit='cover'
            alt={`${frontmatter.category}-${slug}`}
            src={`/post/${frontmatter.category}/${slug}/${frontmatter.coverImage}`}
          ></Image>
        </Box>
      </Box>
      <Box position='absolute' top='64px' left='3em' right='3em' height='35vh' backgroundColor='rgba(0, 0, 0, 0.4)'>
        <Text fontWeight='medium' position='absolute' width='100%' padding='0 1em 0 1em' top='40%' left='50%' transform='translate(-50%, -40%)' textAlign='center' fontSize='5xl' color='white'>{frontmatter.title}</Text>
        {frontmatter.shortcut && (
          <Text fontWeight='light' position='absolute' top='70%' left='50%' transform='translate(-50%, -70%)' fontSize='2xl' textAlign='center' color='gray.100'>{frontmatter.shortcut}</Text>
        )}
      </Box>
      <Box margin='100px 0 0 0'>
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
