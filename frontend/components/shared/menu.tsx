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
import { IoMdMenu, IoMdSearch } from 'react-icons/io'
import Link from 'next/link'
import { useRef } from 'react'
import Footer from './footer'
import { useRouter } from 'next/router'

const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<HTMLButtonElement>(null)
  const router = useRouter()

  return (
    <header>
      <Flex className='header' alignItems='center' justifyContent='space-between' padding='1em 4em 1em 4em'>
        <Flex alignItems='center' justifyContent='center'>
          <IconButton
            aria-label='menu'
            icon={<IoMdMenu/>}
            ref={btnRef}
            fontSize='48px'
            variant='ghost'
            onClick={onOpen}
            marginRight='0.5em'
            size='lg'>
          </IconButton>
          <Link href='/' passHref={true}>
            <Avatar
              name='This is for developer'
              size='md'
              cursor='pointer'></Avatar>
          </Link>
        </Flex>
        <Flex
          alignItems='center'
          justifyContent='center'>
          <IconButton
            aria-label='menu'
            icon={<IoMdSearch/>}
            fontSize='48px'
            variant='ghost'
            marginRight='0.5em'
            size='lg'>
          </IconButton>
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
              <Button fontWeight='light' variant='ghost' margin='0.5em 0 0.5em 0'
                onClick={() => {
                  router.push('/')
                  onClose()
                }}
              >
                Home
              </Button>
              <Button fontWeight='light' variant='ghost' margin='0.5em 0 0.5em 0'
                onClick={() => {
                  router.push('/about')
                  onClose()
                }}
              >
                About
              </Button>
              <Button fontWeight='light' variant='ghost' margin='0.5em 0 0.5em 0'
                onClick={() => {
                  router.push('/category')
                  onClose()
                }}
              >
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
