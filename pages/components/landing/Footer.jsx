import {
  Box,
  Flex,
  Center,
  Button,
  Heading,
  Divider,
  Text,
  Spacer,
} from '@chakra-ui/react'

import Image from 'next/image'
import Link from 'next/link'

import { HiPhone, HiMail } from 'react-icons/hi'
import { ImFacebook } from 'react-icons/im'

export default function Footer() {
  return (
    <Box bgColor='gray.900' color='gray.300' py={50} px={10} mt={10}> {/* FOOTER */}
      <Flex >
        <Center>
          <Image src='/image/stamaria_logo.png' alt='Sta. Maria Logo' width={50} height={50} />
          <Box px={2}>
            <Heading size='xs'>Barangay</Heading>
            <Heading size='lg'>Sta. Maria</Heading>
          </Box>
        </Center>

        <Spacer />

        <Box px={10}>
          <Heading size='sm' mb={2}>Links</Heading>
          <Text><Button variant='link' color='gray.500'>Home</Button></Text>
          <Text><Button variant='link' color='gray.500'>Announcments</Button></Text>
          <Text><Button variant='link' color='gray.500'>About</Button></Text>
        </Box>
        <Box px={10}>
          <Heading size='sm' mb={2}>Residents Corner</Heading>
          <Text><Button variant='link' color='gray.500'>Search Business</Button></Text>
          <Text><Button variant='link' color='gray.500'>Search home rentals</Button></Text>
          <Text><Button variant='link' color='gray.500'>Request Certificate</Button></Text>
        </Box>
        <Box px={10}>
          <Heading size='sm' mb={2}>Contacts</Heading>
          <Flex py={1}>
            <HiPhone />
            <Heading mx={2} size='xs' color='gray.500'>(062)-00000</Heading>
          </Flex>
          <Flex py={1}>
            <HiMail />
            <Heading mx={2} size='xs' color='gray.500'>brgystamaria@zc.gov.co</Heading>
          </Flex>
          <Flex py={1}>
            <ImFacebook />
            <Heading mx={2} size='xs' color='gray.500'>fb.com/brgystamariazc</Heading>
          </Flex>
        </Box>
        <Center px={10}>
          <Link href='/Admin'>
            <Button variant='link' color='gray.500'>
              <a>
                Admin login
                </a>
            </Button>
          </Link>
        </Center>
      </Flex>
    </Box>
  )
}
