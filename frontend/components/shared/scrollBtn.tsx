import { Button, Flex } from '@chakra-ui/react'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'

const ScrollBtn = () => {
  return (
    <Flex flexDirection='column'>
      <Button size='sm' position='fixed' colorScheme='gray' bottom={['3.5em', '4em', '4.5em']} right={['1.0em', '1.2em', '1.5em']} onClick={() => scrollTo(0, 0)}>
        <RiArrowUpSLine className='text-lg' />
      </Button>
      <Button size='sm' position='fixed' colorScheme='gray' bottom={['1em', '1.5em', '2em']} right={['1.0em', '1.2em', '1.5em']} onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
        <RiArrowDownSLine className='text-lg' />
      </Button>
    </Flex>
  )
}

export default ScrollBtn
