import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'
import { postsDataSelector } from '../../stores/posts'

const ImageSlider = () => {
  const { files } = useRecoilValue(postsDataSelector)
  const topTen = files.slice(0, 10)

  return (
    <Flex width='100%' overflow='hidden' margin='0 0 4em 0' padding='0 4em 0 4em'>
      {topTen.map((file, idx) => {
        return (
          <Box key={idx} width='480px' height='520px' position='relative' overflow='hidden' flexShrink='0'>
            <Image
              src={`/_post/${file.frontmatter.category}/${file.slug}/${file.frontmatter.coverImage}`}
              width='100%'
              height='100%'
              borderRadius='none'
              objectFit='cover'
              transition='1s ease'
              opacity='1.0'
              background='blackAlpha.300'
              _hover={{
                opacity: '0.8',
                transform: 'scale(1.3)',
                background: 'blackAlpha.600'
              }}
            ></Image>
            <Text
              fontSize='2xl'
              fontWeight='light'
              position='absolute'
              top='50%'
              left='50%'
              transform='translate(-50%, -50%)'
              color='white'
              pointerEvents='none'
            >
              {file.frontmatter.title}
            </Text>
          </Box>
        )
      })}
    </Flex>
  )
}

export default ImageSlider
