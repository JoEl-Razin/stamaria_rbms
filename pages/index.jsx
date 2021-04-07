import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

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

import TopNavigationBar from './components/landing/TopNavigationBar'
import AnnouncementCard from './components//landing/AnnouncementCard'

import { HiPhone, HiMail } from 'react-icons/hi'
import { ImFacebook } from 'react-icons/im'

export default function Home() {
  return (
    <Box h='100%' bgColor='gray.100'>
      <Head>
        <title>Sta. Maria RBMS</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <TopNavigationBar />
      <Center bgColor='gray.900' h='80vh' objectFit='cover'>
        <Box color='white'>
          <Center>
            <Heading size='sm'>
              A friendly barangay
            </Heading>
          </Center>
          <Center m={2}>
            <Heading size='lg'>
              Barangay Sta. Maria
            </Heading>
          </Center>
          <Center m={5}>
            <Button colorScheme='green'>Request for Certificates</Button>
          </Center>
        </Box>
        {/* <Image src='/image/brgyhall.jpg' layout='fill'/> */}
      </Center>
      <Center mx='auto'>
        <Box w={["100vw", "70vw"]} p={5}>
          <Divider />
          <Heading>Announcements</Heading>
          <Flex>
            <AnnouncementCard />
            <AnnouncementCard />
          </Flex>
        </Box>
      </Center>
      <Center mx='auto'>
        <Box w={["100vw", "70vw"]} p={5}>
          <Divider />
          <Heading>About</Heading>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, eius.</Text>
        </Box>
      </Center>

      <Box bgColor='gray.900' color='gray.400' p={5} mt={5}> {/* FOOTER */}
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
            <Text><Button variant='link'>Home</Button></Text>
            <Text><Button variant='link'>Announcments</Button></Text>
            <Text><Button variant='link'>About</Button></Text>
          </Box>
          <Box px={10}>
            <Heading size='sm' mb={2}>Residents Corner</Heading>
            <Text><Button variant='link'>Search Business</Button></Text>
            <Text><Button variant='link'>Search home rentals</Button></Text>
            <Text><Button variant='link'>Request Certificate</Button></Text>
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
              <Button variant='link'>
                <a>
                  Admin login
                </a>
              </Button>
            </Link>
          </Center>
        </Flex>
      </Box>
    </Box>
  )
}

/*
<Link href='/Admin'>
  <a>Admin Login</a>
</Link>
<Heading>
  Hello
</Heading>
*/
