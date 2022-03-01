import {
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import { IoIosMenu, IoIosSearch } from 'react-icons/io'
import Link from 'next/link'
import { useCallback, useEffect, useRef } from 'react'
import Footer from './footer'
import { useRouter } from 'next/router'
import CircularAvatar from './circularAvatar'

const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<HTMLDivElement>(null)
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
      <Flex ref={headerRef} className='header' position='fixed' top='0' left='0' width='100%' height='64px' zIndex={999} alignItems='center' justifyContent='space-between' padding={['1em 1.5em 1em 1.5em', '1em 2.5em 1em 2.5em', '1em 4em 1em 4em']}>
        <Flex alignItems='center' justifyContent='center'>
          <Box
            ref={btnRef}
            cursor='pointer'
            aria-label='menu'
            textAlign='center'
            fontSize='32px'
            onClick={onOpen}
            marginRight='0.5em'
            outline='none'
          >
            <IoIosMenu/>
          </Box>
          <Link href='/' passHref={true}>
            <Box fontSize='xl' cursor='pointer' color='black' fontWeight='normal' fontStyle='italic' textDecoration='underline'>
              This is Blog
            </Box>
          </Link>
        </Flex>
        <Flex position='absolute' top='50%' left='50%' transform='translate(-50%, -50%)'>
          <Text id='top-title'></Text>
        </Flex>
        <Flex alignItems='center' justifyContent='center'>
          <Box
            width='100%'
            cursor='pointer'
            aria-label='search'
            display='flex'
            justifyContent='center'
            alignItems='center'
            fontSize='32px'
            outline='none'
          >
            <IoIosSearch/>
          </Box>
        </Flex>
        <Divider ref={progressBackRef} display='none' top='64px' left='0' position='absolute' border='1px' borderColor='rgba(0, 0, 0, 0.05)'></Divider>
        <Divider ref={progressRef} display='none' top='64px' left='0' width='1px' position='absolute' border='1px' borderColor='black'></Divider>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader background='rgba(0,0,0,0.01)' padding='2em 0 2em 0' borderBottom='1px solid rgba(0, 0, 0, 0.05)'>
            <Box display='flex' flexDirection='column' alignItems='center' justifyItems='center'>
              <CircularAvatar
                size={'xl'}
                src={'/about/avatar.jpg'}
              ></CircularAvatar>
              <Text fontSize='lg' fontStyle='italic' fontWeight='light' color='black' margin='0.4em 0 0.2em 0'>Anything you can write</Text>
              <Text fontSize='sm' fontStyle='italic' fontWeight='light' color='gray.600'>- canoe918 -</Text>
            </Box>
          </DrawerHeader>
          <DrawerBody>
            <Flex flexDirection='column'>
              <Box textAlign='center' fontWeight='normal' margin='0.6em 0em 0.6em 0em' padding='0.6em 0 0.6em 0' cursor='pointer' _hover={{ background: 'rgba(0,0,0,0.05)', borderRadius: '4px', transition: '0.5s ease' }}
                onClick={() => {
                  router.push('/')
                  onClose()
                }}
              >
                Home
              </Box>
              <Box textAlign='center' fontWeight='normal' margin='0.6em 0em 0.6em 0em' padding='0.6em 0 0.6em 0' cursor='pointer' _hover={{ background: 'rgba(0,0,0,0.05)', borderRadius: '4px', transition: '0.5s ease' }}
                onClick={() => {
                  router.push('/about')
                  onClose()
                }}
              >
                About
              </Box>
              <Box textAlign='center' fontWeight='normal' margin='0.6em 0em 0.6em 0em' padding='0.6em 0 0.6em 0' cursor='pointer' _hover={{ background: 'rgba(0,0,0,0.05)', borderRadius: '4px', transition: '0.5s ease' }}
                onClick={() => {
                  router.push('/category')
                  onClose()
                }}
              >
                Category
              </Box>
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
