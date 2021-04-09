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
import Footer from './components/landing/Footer'

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

      <Footer />
      
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
