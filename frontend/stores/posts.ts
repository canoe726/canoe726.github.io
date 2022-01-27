import { atom, selector } from 'recoil'

export interface PostsFrontMatter {
  category: string,
  files: PostFrontMatterItem[]
}

export interface PostFrontMatterItem {
  slug: string,
  frontmatter: {
    title: string,
    category: string,
    date: string,
    coverImage: string
  },
  content: string
}

export const postsFrontMatterState = atom<PostsFrontMatter[]>({
  key: 'postsFrontMatterState',
  default: []
})

const sortByDate = (a: PostFrontMatterItem, b: PostFrontMatterItem) => {
  if (a.frontmatter.date < b.frontmatter.date) {
    return 1
  }
  if (a.frontmatter.date < b.frontmatter.date) {
    return -1
  }
  return 0
}

export const postsFrontMatterSelector = selector({
  key: 'postsFrontMatterSelector',
  get: ({ get }) => {
    const posts = get(postsFrontMatterState)
    const categories = posts.map(post => post.category)
    const files = posts.map(post => post.files).flat().sort(sortByDate)

    return {
      categories,
      files
    }
  }
})
