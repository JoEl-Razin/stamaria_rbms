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

import MoreOptionsList from '../../components/admin/MoreOptionsList'
import AddProfile from '../../components/admin/AddProfile'

import { AiOutlinePrinter } from 'react-icons/ai'
import { MdAdd } from 'react-icons/md'


export default function BusinessEstListContent() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <Box>
      <Heading size='lg' mb={2}>Business Establishment List</Heading>
      <Spacer />

      <Divider my={3} />

      <Table variant='striped' colorScheme='gray' size='sm'>
        <Thead>
          <Tr>
            <Th>Business Name</Th>
            <Th>Address</Th>
            <Th>Business Type</Th>
            <Th>Owner</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Ceciles Pharmacy</Td>
            <Td>Saavedra St.</Td>
            <Td>Pharmacy & Grocery</Td>
            <Td>Al Pedo Jan Kalang</Td>
            <Td>
              <MoreOptionsList text='Business'/>
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
          leftIcon={<MdAdd />}
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