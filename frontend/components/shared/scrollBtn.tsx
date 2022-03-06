import { Button, Flex } from '@chakra-ui/react'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'

const ScrollBtn = () => {
  return (
    <Flex flexDirection='column'>
      <Button position='fixed' colorScheme='gray' bottom='4.5em' right='1.5em' onClick={() => scrollTo(0, 0)}>
        <RiArrowUpSLine className='text-lg' />
      </Button>
      <Button position='fixed' colorScheme='gray' bottom='1.5em' right='1.5em' onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
        <RiArrowDownSLine className='text-lg' />
      </Button>
    </Flex>
  )
}

export default ScrollBtn
