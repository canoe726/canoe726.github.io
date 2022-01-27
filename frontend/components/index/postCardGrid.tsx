import { NextPage } from 'next'
import Image from 'next/image'
import { useRecoilValue } from 'recoil'

import { PostFrontMatterItem, postsFrontMatterSelector } from '../../stores/posts'

const PostCardGrid = () => {
  const { files } = useRecoilValue(postsFrontMatterSelector)

  return (
    <div>
      {files.map((file, idx) => {
        return (
          <PostCard
            key={idx}
            data={file}>
          </PostCard>
        )
      })}
    </div>
  )
}

interface PostCardProps {
  data: PostFrontMatterItem
}

const PostCard: NextPage<PostCardProps> = ({ data }) => {
  return (
    <div>
      <Image
        src={`/post/${data.frontmatter.category}/${data.slug}/${data.frontmatter.coverImage}`}
        width='100px'
        height='100px'>
      </Image>
      {data.frontmatter.date}
    </div>
  )
}

export default PostCardGrid
