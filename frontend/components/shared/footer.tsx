import { Flex, Text } from '@chakra-ui/react'

const copyRightText = '© 2021. canoe918@gmail.com all rights reserved.'

const Footer = () => {
  return (
    <Flex id='footer' alignItems='center' justifyContent='center' padding='3em 0 3em 0' flexDirection='column'>
      <Flex>
      </Flex>
      <Text fontSize='md'>{copyRightText}</Text>
    </Flex>
  )
}

export default Footer
