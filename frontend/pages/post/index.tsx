import type { NextPage } from 'next'

const Post: NextPage = (props) => {
  return (
    <div>
      post
    </div>
  )
}

// export async function getStaticProps ({ ...ctx }) {
//   const data = matter(content.default)

//   return {
//     props: {
//       siteTitle: config.title,
//       frontmatter: data.data,
//       markdownBody: data.content,
//     },
//   }
// }

export default Post
