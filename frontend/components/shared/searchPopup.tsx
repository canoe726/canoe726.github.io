import { Box, Flex, Input } from '@chakra-ui/react'
import { NextPage } from 'next'
import { IoIosSearch } from 'react-icons/io'
import { VscChromeClose } from 'react-icons/vsc'

interface SearchPopupProps {
  setShowSearchPopup: (showSearchPopup: boolean) => void;
}

const SearchPopup: NextPage<SearchPopupProps> = ({
  setShowSearchPopup
}) => {
  return (
    <Flex position='fixed' width='100%' height='100%' background='rgba(230, 230, 230, 0.95)' top='0' left='0' right='0' bottom='0' zIndex='9999'>
      <Box
        position='fixed'
        cursor='pointer'
        top='0.8em'
        right='1.2em'
        width='fit-content'
        aria-label='close'
        display='flex'
        justifyContent='center'
        alignItems='center'
        fontSize={['32px', '32px', '48px']}
        outline='none'
        onClick={() => setShowSearchPopup(false)}
      >
        <VscChromeClose
        ></VscChromeClose>
      </Box>
      <Input
        position='fixed'
        width={['70%', '75%', '80%']}
        height='2.5em'
        padding={['0 0 0 2em', '0 0 0 2em', '0 0 0 3em']}
        fontSize={['24px', '24px', '34px']}
        background='transparent'
        outline='none'
        _focus={{ outline: 'none' }}
        top='0.5em'
        left='1.5em'
        borderBottom='2px'
        borderRadius='0'
      ></Input>
      <Box
        position='fixed'
        cursor='pointer'
        top='0.8em'
        left='1.2em'
        width='fit-content'
        aria-label='search'
        display='flex'
        justifyContent='center'
        alignItems='center'
        fontSize={['32px', '32px', '48px']}
        outline='none'
        onClick={() => setShowSearchPopup(false)}
      >
        <IoIosSearch
        ></IoIosSearch>
      </Box>
      <Box
        position='fixed'
        top={['8em', '8em', '10em']}
        left='1.2em'
        right='1.2em'
        bottom='1.2em'
        background='rgba(0, 0, 0, 0.1)'
      >
        <Box position='relative' width='100%' height='100%' overflow='hidden' overflowY='auto' padding='1em 1.5em 1em 1.5em'>
          <div>hello</div>
        </Box>
      </Box>
    </Flex>
  )
}

export default SearchPopup
