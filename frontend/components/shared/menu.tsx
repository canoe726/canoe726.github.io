import { Search2Icon } from '@chakra-ui/icons'
import { Avatar, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'

const Menu = () => {
  return (
    <header>
      <Flex
        className='header'
        alignItems='center'
        justifyContent='space-between'
        padding='1em 2em 1em 2em'>
        <Link href='/'>
          <Avatar
            name='This is for developer'
            size='md'
            cursor='pointer'></Avatar>
        </Link>
        <Flex
          alignItems='center'
          justifyContent='center'>
          <Link href='/'>
            <Text fontSize='md' marginLeft='1em' cursor='pointer'>Category</Text>
          </Link>
          <Link href='/'>
            <Search2Icon marginLeft='1em' cursor='pointer'></Search2Icon>
          </Link>
        </Flex>
      </Flex>
    </header>
  )
}

export default Menu
