import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Link href='post'>
        <a>Post</a>
      </Link>
      MY page
    </div>
  )
}

export default Home
