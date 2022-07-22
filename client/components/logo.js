import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { MdAdjust } from 'react-icons/md'

const LogoBox = styled.div`
  display: flex;
  column-gap: 0.2rem;
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  svg {
    transition: 200ms ease;
  }

  &:hover svg {
    transform: scale(1.2);
  }
`

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          <MdAdjust />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}
          >
            Mijnlieff
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
