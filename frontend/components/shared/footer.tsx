import { Flex, IconButton, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'

const copyRightText = '© 2021. canoe all rights reserved.'

interface FooterProps {
  background?: string
  color?: string
  padding: string
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
        <IconButton
          aria-label='github'
          icon={<IoLogoGithub size='lg'/>}
          variant='ghost'
          size='lg'
          margin='0 0.2em 0 0.2em'
          onClick={() => window.open('https://github.com/canoe726', '_blank')}
        ></IconButton>
        <IconButton
          aria-label='linkedin'
          icon={<IoLogoLinkedin size='lg'/>}
          variant='ghost'
          size='lg'
          margin='0 0.2em 0 0.2em'
          onClick={() => window.open('https://www.linkedin.com/in/youngkim0726/', '_blank')}
        ></IconButton>
      </Flex>
      <Text fontWeight='light' fontSize='md'>{copyRightText}</Text>
    </Flex>
  )
}

export default Footer
