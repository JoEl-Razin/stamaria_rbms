import * as React from 'react'
import {
  Heading,
  Box,
  Divider,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Spacer,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react'

import MoreOptionsList from '../components/MoreOptionsList'
import AddProfile from '../components/AddProfile'

import { AiOutlinePrinter, AiOutlineUserAdd } from 'react-icons/ai'


export default function DashboardContent() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <Box>
      <Heading size='lg' mb={2}>Residents List</Heading>
      <Spacer />

      <Divider my={3} />

      <Table variant='striped' colorScheme='gray' size='sm'>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Address</Th>
            <Th>Resident Type</Th>
            <Th>Nationality</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Al Pedro Jon Kanalang</Td>
            <Td>Saavedra St.</Td>
            <Td>Permanent</Td>
            <Td>Filipino</Td>
            <Td>
              <MoreOptionsList text='Residents'/>
            </Td>
          </Tr>
        </Tbody>
      </Table>
      <Flex>
        <Button 
          colorScheme='green' 
          size='sm' 
          my={2} 
          mx={1} 
          leftIcon={<AiOutlineUserAdd />}
          ref={btnRef}
          onClick={onOpen}
          >
            Add
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay>
              <DrawerContent>
                <DrawerCloseButton/>
                <DrawerHeader>Add Profile</DrawerHeader>
                <DrawerBody>
                  <AddProfile/>
                </DrawerBody>
                <DrawerFooter>
                  <Button variant='outline' onClick={onClose}>Discard</Button>
                  <Button colorScheme='blue'>Save</Button>
                </DrawerFooter>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        <Button colorScheme='teal' size='sm' my={2} mx={1} leftIcon={<AiOutlinePrinter />}>Print List</Button>
      </Flex>
    </Box>
  )
}