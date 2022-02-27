import { Box, Flex, IconButton, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { GrPrevious, GrNext } from 'react-icons/gr'
import { useRecoilValue } from 'recoil'
import { postsDataSelector } from '../../stores/posts'

const ImageSlider = () => {
  const { files } = useRecoilValue(postsDataSelector)
  const topTen = files.slice(0, 10)
  const imageSliderRef = useRef<HTMLDivElement>(null)
  const imageBoxRef = useRef<HTMLDivElement>(null)
  const [isPrevBtnShow, setIsPrevBtnShow] = useState<boolean>(false)
  const [isNextBtnShow, setIsNextBtnShow] = useState<boolean>(true)

  const sliderMove = (dir: number): void => {
    if (imageSliderRef.current && imageBoxRef.current) {
      const boxWidth: number = imageBoxRef.current.offsetWidth
      let nextLeft = imageSliderRef.current.scrollLeft + (boxWidth * 2 * dir)
      if (nextLeft > 0) {
        setIsPrevBtnShow(true)
      }
      if (nextLeft < (imageSliderRef.current.scrollWidth - imageSliderRef.current.clientWidth)) {
        setIsNextBtnShow(true)
      }
      if (nextLeft <= 0) {
        nextLeft = 0
        setIsPrevBtnShow(false)
      } else if (nextLeft >= (imageSliderRef.current.scrollWidth - imageSliderRef.current.clientWidth)) {
        nextLeft = imageSliderRef.current.scrollWidth - imageSliderRef.current.clientWidth
        setIsNextBtnShow(false)
      }
      imageSliderRef.current.scrollLeft = nextLeft
    }
  }

  return (
    <Flex position='relative' margin='0 0 4em 0'>
      <Flex id='image-slider' ref={imageSliderRef} width='100%' padding='0 4em 0 4em' overflow='hidden' position='relative' scrollBehavior='smooth'>
        {topTen.map((file, idx) => {
          return (
            <Link key={idx} href={`/post/${file.frontmatter.category}/${file.slug}`} passHref={true}>
              <Box id='image-box' ref={imageBoxRef} width='480px' height='520px' position='relative' overflow='hidden' flexShrink='0' cursor='pointer'>
                <Image
                  alt={`${file.frontmatter.category}-${file.slug}`}
                  src={`/post/${file.frontmatter.category}/${file.slug}/${file.frontmatter.coverImage}`}
                  width='100%'
                  height='100%'
                  borderRadius='none'
                  objectFit='cover'
                  transition='1s ease'
                  opacity='1.0'
                  _hover={{
                    opacity: '0.8',
                    transform: 'scale(1.3)',
                    background: 'blackAlpha.600'
                  }}
                ></Image>
                <Box
                  position='absolute'
                  top='0'
                  left='0'
                  width='100%'
                  height='100%'
                  background='blackAlpha.500'
                  pointerEvents='none'
                ></Box>
                <Text
                  fontSize='4xl'
                  fontWeight='medium'
                  textAlign='center'
                  position='absolute'
                  width='100%'
                  padding='0 1em 0 1em'
                  top='50%'
                  left='50%'
                  transform='translate(-50%, -50%)'
                  color='white'
                  pointerEvents='none'
                >
                  {file.frontmatter.title}
                </Text>
              </Box>
            </Link>
          )
        })}
      </Flex>
      <div>
        <IconButton
          aria-label='prev'
          display={isPrevBtnShow ? 'flex' : 'none'}
          onClick={() => sliderMove(-1)}
          width={['1em', '2em', '2em', '3em', '3em']}
          height={['1em', '2em', '2em', '3em', '3em']}
          fontSize='42px'
          icon={<GrPrevious opacity='0.7'></GrPrevious>}
          position='absolute'
          borderRadius='50%'
          padding='20px'
          top='50%'
          left='4%'
          transform='translate(-4%, -50%)'
          background='white'
          opacity='0.8'
        ></IconButton>
        <IconButton
          aria-label='next'
          display={isNextBtnShow ? 'flex' : 'none'}
          onClick={() => sliderMove(1)}
          width={['1em', '2em', '2em', '3em', '3em']}
          height={['1em', '2em', '2em', '3em', '3em']}
          fontSize='42px'
          icon={<GrNext opacity='0.7'></GrNext>}
          position='absolute'
          borderRadius='50%'
          padding='20px'
          top='50%'
          right='4%'
          transform='translate(-4%, -50%)'
          background='white'
          opacity='0.8'
        ></IconButton>
      </div>
    </Flex>
  )
}

export default ImageSlider
