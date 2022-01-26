import { useRecoilValue } from 'recoil'
import { postsFrontMatterSelector } from '../../stores/posts'

const PostCardGrid = () => {
  const { files } = useRecoilValue(postsFrontMatterSelector)

  return (
    <div>
      {files.map((file, idx) => {
        return (
          <div key={idx}>
            <div>{file.frontmatter.title}</div>
          </div>
        )
      })}
    </div>
  )
}

export default PostCardGrid
