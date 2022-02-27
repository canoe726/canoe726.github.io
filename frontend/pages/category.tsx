import { NextPage } from 'next'
import { getPosts } from '../utils/loadMarkdownFiles'

interface CategoryProps {
}

const Category: NextPage<CategoryProps> = () => {
  return (
    <div>Category Page</div>
  )
}

export async function getStaticProps () {
  return {
    props: {
      posts: getPosts()
    }
  }
}

export default Category
