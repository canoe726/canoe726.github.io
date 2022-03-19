import { Box, Flex, Text, UseDisclosureProps } from '@chakra-ui/react'
import { NextPage } from 'next'
import Link from 'next/link'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'
import { EGA_EVENT_NAME, EGA_EVENT_PROPERTY, EGA_PAGE_NAME, generateEventName, getPageName, pageEvent } from '../../utils/gtag'

const copyRightText = '© 2021. canoe all rights reserved.'

interface FooterProps {
  background?: string;
  color?: string;
  padding: string;
  drawerDisclosure: UseDisclosureProps;
}

const Footer: NextPage<FooterProps> = ({
  background,
  color,
  padding,
  drawerDisclosure
}) => {
  const { onClose } = drawerDisclosure

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
          _hover={{ background: 'rgba(255, 255, 255, 0.2)', borderRadius: '8px' }}
          onClick={() => {
            pageEvent({
              eventName: generateEventName([
                getPageName(location.href),
                EGA_EVENT_PROPERTY.GITHUB,
                EGA_EVENT_NAME.MOVE
              ]),
              eventCategory: EGA_PAGE_NAME.FOOTER,
              eventLabel: EGA_EVENT_PROPERTY.GITHUB,
              value: `${EGA_PAGE_NAME.FOOTER}-${EGA_EVENT_PROPERTY.GITHUB}`
            })
            window.open('https://github.com/canoe726', '_blank')
          }}
        >
          <IoLogoGithub aria-label='github'/>
        </Box>
        <Box
          cursor='pointer'
          aria-label='github'
          fontSize='48px'
          margin='0 0.2em 0 0.2em'
          _hover={{ background: 'rgba(255, 255, 255, 0.2)', borderRadius: '8px' }}
          onClick={() => {
            pageEvent({
              eventName: generateEventName([
                getPageName(location.href),
                EGA_EVENT_PROPERTY.LINKEDIN,
                EGA_EVENT_NAME.MOVE
              ]),
              eventCategory: EGA_PAGE_NAME.FOOTER,
              eventLabel: EGA_EVENT_PROPERTY.LINKEDIN,
              value: `${EGA_PAGE_NAME.FOOTER}-${EGA_EVENT_PROPERTY.LINKEDIN}`
            })
            window.open('https://www.linkedin.com/in/youngkim0726/', '_blank')
          }}
        >
          <IoLogoLinkedin aria-label='linkedin'/>
        </Box>
      </Flex>
      <Flex margin='0.5em 0 1em 0'>
        <Link href='/license' passHref>
          <Text _hover={{ color: 'white' }} textAlign='center' cursor='pointer' color='gray.500' onClick={onClose}>License</Text>
        </Link>
      </Flex>
      <Text fontWeight='light' textAlign='center' fontSize='md' color='white'>{copyRightText}</Text>
    </Flex>
  )
}

export default Footer
