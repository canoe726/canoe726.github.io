import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const baseUrl = './public/_post'

export const getPosts = () => {
  const dirs = fs.readdirSync(path.join(baseUrl))
  const dirList = dirs.map((dir) => {
    return {
      category: dir,
      files: fs.readdirSync(path.join(`${baseUrl}/${dir}`))
    }
  })
  const posts = dirList.map((dir) => {
    const post = {
      category: dir.category,
      files: dir.files.map((postDirName) => {
        const postDir = fs.readdirSync(path.join(`${baseUrl}/${dir.category}/${postDirName}`))
        const filename = postDir.filter(postItem => postItem.includes('.md'))[0]
        const slug = filename.replace('.md', '')
        const markdownWithMeta =
          fs.readFileSync(path.join(`${baseUrl}/${dir.category}/${postDirName}`, filename), 'utf-8')
        const { data: frontmatter } = matter(markdownWithMeta)

        return {
          slug: slug,
          frontmatter: frontmatter
        }
      })
    }
    return post
  })
  return posts
}

export const getPostsWithContent = () => {
  const dirs = fs.readdirSync(path.join(baseUrl))
  const dirList = dirs.map((dir) => {
    return {
      category: dir,
      files: fs.readdirSync(path.join(`${baseUrl}/${dir}`))
    }
  })
  const posts = dirList.map((dir) => {
    const post = {
      category: dir.category,
      files: dir.files.map((postDirName) => {
        const postDir = fs.readdirSync(path.join(`${baseUrl}/${dir.category}/${postDirName}`))
        const filename = postDir.filter(postItem => postItem.includes('.md'))[0]
        const slug = filename.replace('.md', '')
        const markdownWithMeta =
          fs.readFileSync(path.join(`${baseUrl}/${dir.category}/${postDirName}`, filename), 'utf-8')
        const { data: frontmatter, content } = matter(markdownWithMeta)

        return {
          slug: slug,
          frontmatter: frontmatter,
          content: content
        }
      })
    }
    return post
  })
  return posts
}

export const getPostWithContent = (categoryId: string, postId: string) => {

}
