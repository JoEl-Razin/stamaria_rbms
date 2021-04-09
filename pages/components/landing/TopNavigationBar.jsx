import Image from 'next/image'
import Link from 'next/link'

import {
  Box,
  Center,
  Flex,
  Heading,
  Button,
  Spacer,
  Stack
} from '@chakra-ui/react'

export default function TopNavigationBar() {

  return (
    <Box pos='sticky' top='0' bgColor='gray.200' zIndex='1'>
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
    </Box>

  )
}