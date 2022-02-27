import { Flex } from '@chakra-ui/react'
import { NextPage } from 'next'
import Image from 'next/image'

interface AvatarSizeProps {
  [key: string]: {
    width: string;
    height: string;
  }
}

const avatarSize: AvatarSizeProps = {
  sm: {
    width: '32px',
    height: '32px'
  },
  lg: {
    width: '64px',
    height: '64px'
  },
  xl: {
    width: '84px',
    height: '84px'
  },
  '2xl': {
    width: '128px',
    height: '128px'
  }
}

interface CircularAvatarProps {
  size: string;
  src: string;
}

const CircularAvatar: NextPage<CircularAvatarProps> = ({
  size,
  src
}) => {
  return (
    <Flex
      position='relative'
      width={avatarSize[size].width}
      height={avatarSize[size].height}
      alignItems='center'
      justifyContent='center'
      overflow='hidden'
      borderRadius='50%'
      margin='0.5em'
    >
      <Image
        layout='fill'
        objectFit='cover'
        src={src}
        alt='avatar-img'
      ></Image>
    </Flex>
  )
}

export default CircularAvatar
