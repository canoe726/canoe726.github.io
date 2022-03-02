import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Box, Flex, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import { PostData } from '../../stores/posts'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { imageLoader } from '../../utils/loader'

interface CategoryItemListProps {
  category: string;
  files: PostData[];
}

const CategoryItemList: NextPage<CategoryItemListProps> = ({
  category,
  files
}) => {
  const titleTextRef = useRef<HTMLParagraphElement[]>([])

  useEffect(() => {
    const topTitle = document.getElementById('top-title')
    if (topTitle) {
      topTitle.innerHTML = category
    }
    return () => {
      if (topTitle) {
        topTitle.innerHTML = ''
      }
    }
  }, [category])

  return (
    <Flex flexDirection='column' padding={['96px 1.5em 2em 1.5em', '96px 2.5em 2em 2.5em', '112px 4em 2em 4em', '112px 8em 2em 8em']} minHeight='85vh' backgroundColor='rgba(0,0,0,0.05)'>
      <Box width='100%' height='64px' background='white' position='absolute' top='0' left='0' pointerEvents='none' borderBottom='1px solid rgba(0, 0, 0, 0.2)'></Box>
      {files.map((file, idx) => {
        return (
          <Link key={idx} href={`/post/${file.frontmatter.category}/${file.slug}`} passHref>
            <Box
              cursor='pointer'
              display='flex'
              width='100%'
              height={['180px', '180px', '240px']}
              overflow='hidden'
              margin='0 0 2em 0'
              backgroundColor='white'
              borderBottom='1px solid rgba(0, 0, 0, 0.1)'
              onMouseOver={() => {
                if (titleTextRef.current) {
                  titleTextRef.current[idx].style.textDecoration = 'underline'
                }
              }}
              onMouseOut={() => {
                if (titleTextRef.current) {
                  titleTextRef.current[idx].style.textDecoration = 'none'
                }
              }}
            >
              <Flex flex={['2.5', '2.5', '3']} flexDirection='column' padding='2em'>
                <Text className='title' ref={el => { titleTextRef.current[idx] = el! }} fontSize={['xl', 'xl', '2xl']} fontWeight='medium'>{file.frontmatter.title}</Text>
                <Text className='summary' marginTop='0.5em' fontSize='sm' fontWeight='light' textOverflow='ellipsis' overflow='hidden' color='gray.600'>{file.frontmatter.summary}</Text>
                <Text marginTop='1.5em' fontSize='x-small' color='gray.400'>{file.frontmatter.date}</Text>
              </Flex>
              <Flex flex={['1.5', '1.5', '1']} position='relative' justifyContent='center' alignItems='center' padding={['0 1em 0 0', '0 1em 0 0', '0 1.5em 0 0']}>
                <Box
                  width={['140px', '140px', '180px']}
                  height={['140px', '140px', '180px']}
                  position='relative'
                >
                  <Image
                    alt={`${file.frontmatter.category}-${file.slug}`}
                    src={`/post/${file.frontmatter.category}/${file.slug}/${file.frontmatter.coverImage}`}
                    layout='fill'
                    objectFit='cover'
                    loader={imageLoader}
                  ></Image>
                </Box>
              </Flex>
            </Box>
          </Link>
        )
      })}
    </Flex>
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
  }
}

export async function getStaticProps ({ params: { category } }: getStaticPropsProperty) {
  const categoryDirs = fs.readdirSync(path.join(`./public/post/${category}`))
  const files = categoryDirs.map((categoryDir) => {
    const markdownWithMeta = fs.readFileSync(path.join(`./public/post/${category}/${categoryDir}`, `${categoryDir}.md`), 'utf-8')
    const { data: frontmatter, content } = matter(markdownWithMeta)
    return {
      slug: categoryDir,
      frontmatter,
      content
    }
  })

  return {
    props: {
      category: category,
      files: files
    }
  }
}

export default CategoryItemList
