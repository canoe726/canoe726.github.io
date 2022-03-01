import {
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
import { useCallback, useEffect, useRef } from 'react'
import Footer from './footer'
import { useRouter } from 'next/router'
import CircularAvatar from './circularAvatar'

const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<HTMLButtonElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLHRElement>(null)
  const progressBackRef = useRef<HTMLHRElement>(null)
  const router = useRouter()

  const windowScrollEvent = useCallback(() => {
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
    const scrollLimit = document.documentElement.scrollHeight - document.documentElement.clientHeight
    if (headerRef.current) {
      if (window.scrollY >= 120 && !headerRef.current.classList.contains('active-top')) {
        headerRef.current.classList.add('active-top')
      } else if (window.scrollY < 120) {
        headerRef.current.classList.remove('active-top')
      }
    }
    if (progressRef.current) {
      progressRef.current.style.width = `${(scrollTop / scrollLimit) * 100}%`
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', windowScrollEvent)
    return () => {
      window.removeEventListener('scroll', windowScrollEvent)
    }
  }, [windowScrollEvent])

  useEffect(() => {
    if (router.pathname.includes('post')) {
      if (progressRef.current && progressBackRef.current) {
        progressBackRef.current.style.display = 'block'
        progressRef.current.style.display = 'block'
      }
    } else {
      if (progressRef.current && progressBackRef.current) {
        progressBackRef.current.style.display = 'none'
        progressRef.current.style.display = 'none'
      }
    }
  }, [router.pathname])

  return (
    <header id='header'>
      <Flex ref={headerRef} className='header' position='fixed' top='0' left='0' width='100%' height='64px' zIndex={999} alignItems='center' justifyContent='space-between' padding='1em 3em 1em 3em'>
        <Flex alignItems='center' justifyContent='center'>
          <IconButton
            aria-label='menu'
            icon={<IoMdMenu/>}
            ref={btnRef}
            colorScheme='white'
            fontSize='32px'
            variant='ghost'
            onClick={onOpen}
            marginRight='0.5em'
            outline='none'
            size='lg'>
          </IconButton>
          <Link href='/' passHref={true}>
            <Button
              name='This is for developer'
              size='md'
              cursor='pointer'
              colorScheme='white'
              color='black'
            >This is Blog</Button>
          </Link>
        </Flex>
        <Flex position='absolute' top='50%' left='50%' transform='translate(-50%, -50%)'>
          <Text id='top-title'></Text>
        </Flex>
        <Flex alignItems='center' justifyContent='center'>
          <IconButton
            aria-label='search'
            icon={<IoMdSearch/>}
            colorScheme='white'
            fontSize='32px'
            variant='ghost'
            marginRight='0.5em'
            outline='none'
            size='lg'>
          </IconButton>
        </Flex>
        <Divider ref={progressBackRef} display='none' top='64px' left='0' position='absolute' border='4px' borderColor='rgba(0, 0, 0, 0.05)'></Divider>
        <Divider ref={progressRef} display='none' top='64px' left='0' width='1px' position='absolute' border='4px' borderColor='black'></Divider>
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
              <CircularAvatar
                size={'lg'}
                src={'/about/avatar.jpg'}
              ></CircularAvatar>
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
