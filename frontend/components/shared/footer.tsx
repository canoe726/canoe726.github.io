import { Box, Flex, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'

const copyRightText = '© 2021. canoe all rights reserved.'

interface FooterProps {
  background?: string;
  color?: string;
  padding: string;
}

const Footer: NextPage<FooterProps> = ({
  background,
  color,
  padding
}) => {
  return (
    <Flex
      id='footer'
      width='100%'
      height='fit-content'
      alignItems='center'
      justifyContent='center'
      padding={padding}
      flexDirection='column'
      background={background}
      color={color}>
      <Flex margin='0 0 1em 0'>
        <Box
          cursor='pointer'
          aria-label='github'
          fontSize='48px'
          margin='0 0.2em 0 0.2em'
          onClick={() => window.open('https://github.com/canoe726', '_blank')}
        >
          <IoLogoGithub aria-label='github'/>
        </Box>
        <Box
          cursor='pointer'
          aria-label='github'
          fontSize='48px'
          margin='0 0.2em 0 0.2em'
          onClick={() => window.open('https://www.linkedin.com/in/youngkim0726/', '_blank')}
        >
          <IoLogoLinkedin aria-label='linkedin'/>
        </Box>
      </Flex>
      <Text fontWeight='light' fontSize='md' color='white'>{copyRightText}</Text>
    </Flex>
  )
}

export default Footer
