import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import {
  Box,
  Center,
  Heading,
  Text,
  Flex,
  Avatar,
  Divider,
  IconButton,
} from '@chakra-ui/react'

import TopNavigationBar from './components/landing/TopNavigationBar'
import AnnouncementCard from './components/landing/AnnouncementCard'
import Footer from './components/landing/Footer'

import { BsChevronDoubleDown } from 'react-icons/bs'

export default function Home() {
  return (
    <Box h='100vh'>
      <Head>
        <title>Sta. Maria RBMS</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <Box position='absolute' zIndex={1} w='100%' h='110%' top='0'> //bgImage
        <Image
          src='/image/landing_page_bg.svg'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </Box>

      <TopNavigationBar />

      <Center position='relative' px={['5vw', '10vw']} zIndex={2}>
        <Box>

          <Box color='white' mb='25vh' id={'home'}>                                           {/* HOME */}
            <Center h='75vh' >
              <Image src='/image/stamaria_logo.png' alt='Sta. Maria Logo' width={150} height={150} />
              <Box px={2}>
                <Heading size='lg'>Barangay</Heading>
                <Heading size='2xl'>Sta. Maria</Heading>
              </Box>
            </Center>
            <Center>
              <IconButton 
                icon={<BsChevronDoubleDown />} 
                variant='outline'
                onClick={ () => 
                  document.getElementById('announcement')
                  .scrollIntoView({behavior: 'smooth'})
                }
              />
            </Center>
          </Box>


          <Center py='25px' id={'announcement'}>                                           {/* ANNOUNCEMENT */}
            <Box p={5}>
              <Center>
                <Heading>Announcements</Heading>
              </Center>

              <Flex>
                <AnnouncementCard />
                <AnnouncementCard />
              </Flex>

            </Box>
          </Center>

          <Center mb='25vh' py='25px'>                                                      {/* ABOUT */}
            <Box p={5}>
              <Center pb='25px'>
                <Heading>About the Barangay</Heading>
              </Center>

              <Box>
                <Center py={5}>
                  <Avatar size='xl' name='Los Eli Angeles' src='' />
                </Center>
                <Center>
                  <Heading size='md'>Los Eli Angles</Heading>
                </Center>
                <Center>
                  <Text size='sm'>Barangay Chairman</Text>
                </Center>
              </Box>

              <Divider py={5} />
              <Box px={[150], [25]}>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dicta quaerat, necessitatibus numquam consectetur adipisci assumenda nulla unde excepturi accusantium!
                </Text>
              </Box>
            </Box>
          </Center>
        </Box>

      </Center>

      <Footer/>

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
