import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  Heading,
  MenuItem,
  Spacer,
  Button,
} from '@chakra-ui/react'

import { BsChevronDown } from 'react-icons/bs'

export default function TopNavigationBar() {

  return (
    <Box
      pos='sticky'
      top='0'
      zIndex='3'
    >
      <Flex alignItems='center' px={[100], [5]} py={5}>
        <Spacer />
        <Box>
          <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
              Residents Corner
            </MenuButton>
            <MenuList>
              <Link href='/request-certificate'>
                <MenuItem>Request Certificate</MenuItem>
              </Link>

            </MenuList>
          </Menu>
        </Box>
      </Flex>

    </Box>

  )
}


{/* <Box pos='sticky' top='0' bgColor='gray.200' zIndex='1'>
  <Flex alignItems='center' px={100} py={5}>
    <Image src='/image/stamaria_logo.png' alt='Sta. Maria Logo' width={50} height={50} />
    <Box px={2}>
      <Heading size='xs'>Barangay</Heading>
      <Heading size='lg'>Sta. Maria</Heading>
    </Box>

    <Spacer />
    <Button variant='ghost' colorScheme='green'>Home</Button>
    <Button variant='ghost' colorScheme='green'>Announcements</Button>
    <Button variant='ghost' colorScheme='green'>About</Button>
    <Button variant='ghost' colorScheme='green'>Residents Corner</Button>
    <Link href='/Admin'>
      <Button colorScheme='green'>
        <a>
          Login
            </a>
      </Button>
    </Link>
  </Flex>
</Box> */}