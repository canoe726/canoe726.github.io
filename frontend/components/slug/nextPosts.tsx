import { Box, Divider, Flex, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { PostData, postsDataState } from '../../stores/posts'
import { EGA_EVENT_NAME, EGA_EVENT_PROPERTY, generateEventName, getPageName, pageEvent } from '../../utils/gtag'
import { imageLoader } from '../../utils/loader'

const NextPosts = () => {
  const sliceLen = 10
  const postsData = useRecoilValue(postsDataState)
  const [randomPosts, setRandomPosts] = useState<PostData[]>([])
  const [relatedPosts, setRelatedPosts] = useState<PostData[]>([])
  const router = useRouter()
  const { category } = router.query

  useEffect(() => {
    const allPosts = postsData.map((postData) => {
      return postData.files.flat()
    }).flat()
    if (allPosts.length > 0) {
      const allPostsLen = allPosts.length >= sliceLen ? sliceLen : allPosts.length
      const randTen: number[] = []
      while (randTen.length < allPostsLen) {
        const randInt = Math.floor(Math.random() * allPostsLen)
        if (randTen.indexOf(randInt) === -1) {
          randTen.push(randInt)
        }
      }
      const randFivePosts: PostData[] = []
      randTen.forEach((postIdx) => {
        randFivePosts.push(allPosts[postIdx])
      })
      setRandomPosts(randFivePosts)
    }
  }, [postsData])

  useEffect(() => {
    const categoryPosts = postsData
      .filter((postData) => {
        return postData.category === category
      })
      .map((postData) => {
        return postData.files
      })
      .slice(0, sliceLen)
      .flat()
    setRelatedPosts(categoryPosts)
  }, [postsData, category])

  return (
    <Flex justifyContent='center' alignItems='center' flexDirection='column'>
      <Divider margin='0 0 4em 0' width='100%' height='1px' background='rgba(0, 0, 0, 0.05)'></Divider>
      <NextPostList
        title={'Related Posts'}
        data={relatedPosts}
        margin={['0 0 0 0']}
        status={'related'}
      ></NextPostList>
      <NextPostList
        title={'Random Posts'}
        data={randomPosts}
        margin={['2em 0 0 0']}
        status={'random'}
      ></NextPostList>
    </Flex>
  )
}

interface NextPostListProps {
  title: string;
  data: PostData[];
  margin: string[];
  status: 'related' | 'random';
}

const NextPostList: NextPage<NextPostListProps> = ({ title, data, margin, status }) => {
  const titleRef = useRef<HTMLParagraphElement[]>([])

  return (
    <Box width='100%' margin={margin}>
      <Text fontSize='1.2em' fontWeight='normal'>{title}</Text>
      <Box width='100%' overflow='auto' margin='1em 0 0 0'>
        <Flex>
          {data.map((postData, idx) => {
            return (
              <Link key={idx} href={`/post/${postData.frontmatter.category}/${postData.slug}`} passHref={true}>
                <Box paddingBottom='4px' position='relative' cursor='pointer'
                  onMouseOver={() => {
                    if (titleRef.current[idx]) {
                      titleRef.current[idx].style.textDecoration = 'underline'
                    }
                  }}
                  onMouseOut={() => {
                    if (titleRef.current[idx]) {
                      titleRef.current[idx].style.textDecoration = 'none'
                    }
                  }}
                  onClick={() => {
                    pageEvent({
                      eventName: generateEventName([
                        getPageName(location.href),
                        status === 'related' ? EGA_EVENT_PROPERTY.RELATED_POSTS : EGA_EVENT_PROPERTY.RANDOM_POSTS,
                        EGA_EVENT_NAME.ITEM_CLICK
                      ]),
                      eventCategory: postData.frontmatter.category,
                      eventLabel: postData.frontmatter.title,
                      value: `${postData.frontmatter.category}-${postData.slug}`
                    })
                  }}
                >
                  <Box width={['180px', '220px', '240px']} height={['180px', '220px', '240px']} position='relative'>
                    <Image
                      layout='fill'
                      objectFit='cover'
                      alt={`${postData.frontmatter.category}-${postData.slug}`}
                      src={`/post/${postData.frontmatter.category}/${postData.slug}/${postData.frontmatter.coverImage}`}
                      loader={imageLoader}
                      unoptimized={true}
                      priority={true}
                    ></Image>
                  </Box>
                  <Box top='0' left='0' borderRight='1px solid white' width={['180px', '220px', '240px']} height={['180px', '220px', '240px']} position='absolute' background='rgba(0, 0, 0, 0.4)'>
                    <Text ref={el => { titleRef.current[idx] = el! }} pointerEvents='none' width='100%' fontSize={['1.1em', '1.1em', '1.3em']} textAlign='center' padding='0 1em 0 1em' color='white' position='absolute' fontWeight='normal' top='50%' left='50%' transform='translate(-50%, -50%)'>
                      {postData.frontmatter.title}
                    </Text>
                  </Box>
                </Box>
              </Link>
            )
          })}
        </Flex>
      </Box>
    </Box>
  )
}

export default NextPosts
