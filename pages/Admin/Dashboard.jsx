
import Head from 'next/head'
import Image from 'next/image'

import {
  Center,
  Box,
  Flex,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  FormControl,
  FormLabel,
} from "@chakra-ui/react"

//imports

import TopNavbar from '../components/admin/TopNavbar'
import Sidebar from '../components/admin/Sidebar'

import DashboardContent from './components/DashboardContent'
import BusinessEstListContent from './components/BusinessEstListContent'
import ResidentsListContent from './components/ResidentsListContent'
import HouseholdListContent from './components/HouseholdListContent'
import CertificateContent from './components/CertificateContent'
import UsersProfileCard from './components/UsersContent'
import RequestedCertificate from './components/RequestedCertificate'
import PageEdit from './components/PageEditContent'

// icon imports
import { RiDashboardLine, RiNewspaperLine, RiPagesLine } from 'react-icons/ri'
import { HiOutlineHome, HiOutlineClipboardList, HiOutlineUserGroup } from 'react-icons/hi'
import { MdBusiness } from 'react-icons/md'
import { BsFillPersonLinesFill } from 'react-icons/bs'

export default function Dashboard() {

  // const username = localStorage.getItem('username')
  const username = 'elrazinjo@gmail.com'

  return (
    <Flex bgColor='gray.50' h='100vh' w='100%'>
      <Head>
        <title>Sta. Maria RBMS | Dashboard</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Tabs orientation='vertical' size='sm' variant='unstyled'>

        <TabList bgColor='gray.800' w='300px' px={2}>
          <Box color='white' py={5}>
            <Center w='100%' h={150}>
              <Image src='/image/stamaria_logo.png' alt='Sta. Maria Logo' width={170} height={170} />
            </Center>
            <Heading size='md'>Barangay</Heading>
            <Heading size='lg'>Sta. Maria</Heading>
          </Box>
          <Tab color='gray.200' px={1} py={2} my={2} borderRadius='md' _hover={{ bgColor: 'gray.700', }} _active={{ bgColor: 'gray.700', transform: 'scale(0.98)', }} _selected={{ bgColor: 'gray.700' }}>
            <Sidebar icon={<RiDashboardLine />} name='Dashboard' />
          </Tab>
          <Tab color='gray.200' px={1} py={2} my={2} borderRadius='md' _hover={{ bgColor: 'gray.700', }} _active={{ bgColor: 'gray.700', transform: 'scale(0.98)', }} _selected={{ bgColor: 'gray.700' }}>
            <Sidebar icon={<BsFillPersonLinesFill />} name='Residents List' />
          </Tab>
          <Tab color='gray.200' px={1} py={2} my={2} borderRadius='md' _hover={{ bgColor: 'gray.700', }} _active={{ bgColor: 'gray.700', transform: 'scale(0.98)', }} _selected={{ bgColor: 'gray.700' }}>
            <Sidebar icon={<HiOutlineHome />} name='Household List' />
          </Tab>
          <Tab color='gray.200' px={1} py={2} my={2} borderRadius='md' _hover={{ bgColor: 'gray.700', }} _active={{ bgColor: 'gray.700', transform: 'scale(0.98)', }} _selected={{ bgColor: 'gray.700' }}>
            <Sidebar icon={<MdBusiness />} name='Business Establishments List' />
          </Tab>
          <Tab color='gray.200' px={1} py={2} my={2} borderRadius='md' _hover={{ bgColor: 'gray.700', }} _active={{ bgColor: 'gray.700', transform: 'scale(0.98)', }} _selected={{ bgColor: 'gray.700' }}>
            <Sidebar icon={<RiNewspaperLine />} name='Provide Certificate' />
          </Tab>
          <Tab color='gray.200' px={1} py={2} my={2} borderRadius='md' _hover={{ bgColor: 'gray.700', }} _active={{ bgColor: 'gray.700', transform: 'scale(0.98)', }} _selected={{ bgColor: 'gray.700' }}>
            <Sidebar icon={<HiOutlineClipboardList />} name='Requested Certificate' />
          </Tab>
          <Tab color='gray.200' px={1} py={2} my={2} borderRadius='md' _hover={{ bgColor: 'gray.700', }} _active={{ bgColor: 'gray.700', transform: 'scale(0.98)', }} _selected={{ bgColor: 'gray.700' }}>
            <Sidebar icon={<HiOutlineUserGroup />} name='Users' />
          </Tab>
          <Tab color='gray.200' px={1} py={2} my={2} borderRadius='md' _hover={{ bgColor: 'gray.700', }} _active={{ bgColor: 'gray.700', transform: 'scale(0.98)', }} _selected={{ bgColor: 'gray.700' }}>
            <Sidebar icon={<RiPagesLine />} name='Page Edit' />
          </Tab>
        </TabList>


        <Box w='calc(100vw - 300px)' p={4}>
          <TopNavbar username={username} />
          <TabPanels>
            <TabPanel>
              {/* DASHBOARD CONTENT */}
              <DashboardContent />
            </TabPanel>

            <TabPanel>
              {/* RESIDENTS LIST CONETNT */}
              <ResidentsListContent />
            </TabPanel>

            <TabPanel>
              {/* HOUSEHOLD LIST CONTENT */}
              <HouseholdListContent />
            </TabPanel>

            <TabPanel>
              {/* BUSINESS ESTABLISHMENT CONTENT */}
              <BusinessEstListContent />
            </TabPanel>

            <TabPanel>
              {/*  */}
              <CertificateContent />
            </TabPanel>

            <TabPanel>
              <RequestedCertificate />
            </TabPanel>

            <TabPanel>
              <UsersProfileCard />
            </TabPanel>

            <TabPanel>
              <PageEdit />
            </TabPanel>
          </TabPanels>

        </Box>

      </Tabs>

    </Flex>
  )

}

// !localStorage.getItem('token') ?
//       <Center h='100vh'>
//         <Heading>Login first to see the contents</Heading>
//       </Center>

//       :

//       <Flex bgColor='gray.50' h='100%' w='100%'>
//         <Head>
//           <title>Dashboard</title>
//           <meta name='viewport' content='initial-scale=1.0, width=device-width' />
//         </Head>
//         <Tabs orientation='vertical' size='sm' variant='unstyled'>

//           <TabList bgColor='gray.800' w='300px' px={2}>
//             <Box color='white' py={5}>
//               <Center w='100%' h={150}>
//                 <Image src='/image/stamaria_logo.png' alt='Sta. Maria Logo' width={170} height={170} />
//               </Center>
//               <Heading size='md'>Barangay</Heading>
//               <Heading size='lg'>Sta. Maria</Heading>
//             </Box>
//             <Tab color='gray.200' px={1} py={2} my={2} borderRadius='md' _hover={{ bgColor: 'gray.700', }} _active={{ bgColor: 'gray.700', transform: 'scale(0.98)', }} _selected={{ bgColor: 'gray.700' }}>
//               <Sidebar icon={<RiDashboardLine />} name='Dashboard' />
//             </Tab>
//             <Tab color='gray.200' px={1} py={2} my={2} borderRadius='md' _hover={{ bgColor: 'gray.700', }} _active={{ bgColor: 'gray.700', transform: 'scale(0.98)', }} _selected={{ bgColor: 'gray.700' }}>
//               <Sidebar icon={<BsFillPersonLinesFill />} name='Residents List' />
//             </Tab>
//             <Tab color='gray.200' px={1} py={2} my={2} borderRadius='md' _hover={{ bgColor: 'gray.700', }} _active={{ bgColor: 'gray.700', transform: 'scale(0.98)', }} _selected={{ bgColor: 'gray.700' }}>
//               <Sidebar icon={<HiOutlineHome />} name='Household List' />
//             </Tab>
//             <Tab color='gray.200' px={1} py={2} my={2} borderRadius='md' _hover={{ bgColor: 'gray.700', }} _active={{ bgColor: 'gray.700', transform: 'scale(0.98)', }} _selected={{ bgColor: 'gray.700' }}>
//               <Sidebar icon={<MdBusiness />} name='Business Establishments List' />
//             </Tab>
//             <Tab color='gray.200' px={1} py={2} my={2} borderRadius='md' _hover={{ bgColor: 'gray.700', }} _active={{ bgColor: 'gray.700', transform: 'scale(0.98)', }} _selected={{ bgColor: 'gray.700' }}>
//               <Sidebar icon={<RiNewspaperLine />} name='Certificates' />
//             </Tab>
//             <Tab color='gray.200' px={1} py={2} my={2} borderRadius='md' _hover={{ bgColor: 'gray.700', }} _active={{ bgColor: 'gray.700', transform: 'scale(0.98)', }} _selected={{ bgColor: 'gray.700' }}>
//               <Sidebar icon={<HiOutlineClipboardList />} name='Transactions' />
//             </Tab>
//             <Tab color='gray.200' px={1} py={2} my={2} borderRadius='md' _hover={{ bgColor: 'gray.700', }} _active={{ bgColor: 'gray.700', transform: 'scale(0.98)', }} _selected={{ bgColor: 'gray.700' }}>
//               <Sidebar icon={<HiOutlineUserGroup />} name='Users' />
//             </Tab>
//             <Tab color='gray.200' px={1} py={2} my={2} borderRadius='md' _hover={{ bgColor: 'gray.700', }} _active={{ bgColor: 'gray.700', transform: 'scale(0.98)', }} _selected={{ bgColor: 'gray.700' }}>
//               <Sidebar icon={<RiPagesLine />} name='Page Edit' />
//             </Tab>
//           </TabList>

//           <Center >
//             <Box h='100vh' w='calc(100vw - 300px)' p={4}>
//               <TopNavbar username={username} />
//               <TabPanels>
//                 <TabPanel>
//                   {/* DASHBOARD CONTENT */}
//                   <DashboardContent />
//                 </TabPanel>

//                 <TabPanel>
//                   {/* RESIDENTS LIST CONETNT */}
//                   <ResidentsListContent />
//                 </TabPanel>

//                 <TabPanel>
//                   {/* HOUSEHOLD LIST CONTENT */}
//                   <HouseholdListContent />
//                 </TabPanel>

//                 <TabPanel>
//                   {/* BUSINESS ESTABLISHMENT CONTENT */}
//                   <BusinessEstListContent />
//                 </TabPanel>

//                 <TabPanel>
//                   {/*  */}
//                   <CertificateContent />
//                 </TabPanel>

//                 <TabPanel>
//                   Sys Log
//             </TabPanel>

//                 <TabPanel>
//                   <UsersProfileCard />
//                 </TabPanel>

//                 <TabPanel>
//                   Docu
//             </TabPanel>
//               </TabPanels>

//             </Box>
//           </Center>
//         </Tabs>

//       </Flex>