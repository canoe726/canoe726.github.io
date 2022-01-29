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
        padding='2em 2.5em 2em 2.5em'>
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
