import { Flex, Text } from '@chakra-ui/react'
import { NextPage } from 'next'

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
      <Flex>
      </Flex>
      <Text fontWeight='light' fontSize='md'>{copyRightText}</Text>
    </Flex>
  )
}

export default Footer
