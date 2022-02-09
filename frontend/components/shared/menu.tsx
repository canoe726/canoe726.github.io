import { Search2Icon } from '@chakra-ui/icons'
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import { IoMdMenu } from 'react-icons/io'
import Link from 'next/link'
import { useRef } from 'react'
import Footer from './footer'

const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<HTMLButtonElement>(null)

  return (
    <header>
      <Flex className='header' alignItems='center' justifyContent='space-between' padding='1em 2.5em 1em 2.5em'>
        <Flex alignItems='center' justifyContent='center'>
          <IconButton
            aria-label='menu'
            icon={<IoMdMenu/>}
            ref={btnRef}
            onClick={onOpen}
            marginRight='0.5em'
            size='lg'>
          </IconButton>
          <Link href='/'>
            <Avatar
              name='This is for developer'
              size='md'
              cursor='pointer'></Avatar>
          </Link>
        </Flex>
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
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader background='gray.100' padding='2em 0 2em 0'>
            <Box display='flex' flexDirection='column' alignItems='center' justifyItems='center'>
              <Avatar name='Avatar' size='md' margin='0 0 0.5em 0'></Avatar>
              <Text fontSize='sm' fontStyle='italic' fontWeight='light' color='black' margin='0 0 0.2em 0'>Anything you can make</Text>
              <Text fontSize='xx-small' fontStyle='italic' fontWeight='light' color='blackAlpha.700'>- canoe918 -</Text>
            </Box>
          </DrawerHeader>
          <Divider orientation='horizontal' height='3px' background='gray.200'/>
          <DrawerBody>
            <Flex flexDirection='column'>
              <Button fontWeight='light' variant='ghost' margin='0.5em 0 0.5em 0'>
                Home
              </Button>
              <Button fontWeight='light' variant='ghost' margin='0.5em 0 0.5em 0'>
                About
              </Button>
              <Button fontWeight='light' variant='ghost' margin='0.5em 0 0.5em 0'>
                Category
              </Button>
            </Flex>
          </DrawerBody>
          <DrawerFooter padding='0'>
            <Footer
              background='black'
              color='white'
              padding='2em 1em 2em 1em'
            ></Footer>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </header>
  )
}

export default Menu
