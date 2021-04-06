import Head from 'next/head'
import Image from 'next/image'

import { Center, Box, Flex, Heading, Tabs, TabList, TabPanels, TabPanel} from "@chakra-ui/react"

//imports
import SideBarTab from './components/SideBarTab'
import TopNavbar from './components/TopNavbar'
import DashboardContent from './pages/DashboardContent'
import BusinessEstListContent from './pages/BusinessEstListContent'
import ResidentsListContent from './pages/ResidentsListContent'

// icon imports
import { RiDashboardLine, RiNewspaperLine } from 'react-icons/ri'
import { HiOutlineHome, HiOutlineClipboardList, HiOutlineUserGroup } from 'react-icons/hi'
import { MdBusiness, MdHelpOutline } from 'react-icons/md'
import { BsFillPersonLinesFill } from 'react-icons/bs'

export default function Dashboard() {
  return (
    <Flex bgColor='gray.50' h='100%' w='100%'>
      <Head>
        <title>Dashboard</title>
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
          <SideBarTab icon={<RiDashboardLine />} name='Dashboard' />
          <SideBarTab icon={<BsFillPersonLinesFill />} name='Residents List' />
          <SideBarTab icon={<HiOutlineHome />} name='Household List' />
          <SideBarTab icon={<MdBusiness />} name='Business Establishments List' />
          <SideBarTab icon={<RiNewspaperLine />} name='Certificates' />
          <SideBarTab icon={<HiOutlineClipboardList />} name='System logs' />
          <SideBarTab icon={<HiOutlineUserGroup />} name='Users' />
          <SideBarTab icon={<MdHelpOutline />} name='Documentation/Help' />

        </TabList>

        <Center >
          <Box h='100vh' w='calc(100vw - 300px)'  p={4}>
            <TopNavbar />
            <TabPanels>
              <TabPanel>
                <DashboardContent />        
              </TabPanel>

              <TabPanel>
                <ResidentsListContent />
              </TabPanel>

              <TabPanel>
                
              </TabPanel>

              <TabPanel>
                <BusinessEstListContent />
              </TabPanel>

              <TabPanel>
                Cert
              </TabPanel>

              <TabPanel>
                Sys Log
              </TabPanel>

              <TabPanel>
                Users
              </TabPanel>
              
              <TabPanel>
                Docu
              </TabPanel>
            </TabPanels>

          </Box>
        </Center>
      </Tabs>

    </Flex>

  )
}


/*

<SideBarTab icon={<BsFillPersonLinesFill />} name='Residents List' />
<SideBarTab icon={<HiOutlineHome />} name='Household List' />

export default function Dashboard() {
  return (
    <Flex bgColor='gray.50' h='100vh' w='100vw'>
      <Center bgColor='gray.800' w='18vw'>
        <Box h='100vh' w='90%'>
          <Box color='white' py={5}>
            <Center w='100%' h={200}>
              <Image src='/image/stamaria_logo.png' alt='Sta. Maria Logo' width={200} height={200} />
            </Center>
            <Heading size='md'>Barangay</Heading>
            <Heading size='lg'>Sta. Maria</Heading>
          </Box>
          <SidebarBtn icon={<RiDashboardLine />} name='Dashboard' />
          <SidebarBtn icon={<HiOutlineHome />} name='Household and Residents' />
          <SidebarBtn icon={<MdBusiness />} name='Business Establishments' />
          <SidebarBtn icon={<RiNewspaperLine />} name='Certificates' />
          <SidebarBtn icon={<HiOutlineClipboardList />} name='System logs' />
          <SidebarBtn icon={<HiOutlineUserGroup />} name='Users' />
          <SidebarBtn icon={<MdHelpOutline />} name='Documentation/Help' />
        </Box>
      </Center>

      <Center >
        <Box h='100vh' w='82vw' p={5}>
          <TopNavbar />
        </Box>
      </Center>
    </Flex>

  )
} */