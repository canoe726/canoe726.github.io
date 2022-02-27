import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Box, Flex, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import { PostData } from '../../stores/posts'

interface CategoryItemListProps {
  files: PostData[];
}

const CategoryItemList: NextPage<CategoryItemListProps> = ({
  files
}) => {
  return (
    <Flex padding='120px 3em 2em 3em'>
      <Box>
        {files.map((file, idx) => {
          return (
            <Text key={idx}>{file.frontmatter.title}</Text>
          )
        })}
      </Box>
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
      frontmatter,
      content
    }
  })

  return {
    props: {
      files: files
    }
  }
}

export default CategoryItemList
