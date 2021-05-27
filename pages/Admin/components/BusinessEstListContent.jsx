import React, { useState, useEffect } from 'react'
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

import MoreOptionRes from '../../components/admin/MoreOptionRes'
import AddProfile from '../../components/admin/AddProfile'

import { AiOutlinePrinter } from 'react-icons/ai'
import { MdAdd } from 'react-icons/md'

function TableBody({ business }) {
  const rows = business.map((row, index) => {
    return (
      <Tr key={index}>
        <Td>{row.businessName}</Td>
        <Td>{row.businessAddress}</Td>
        <Td>{row.businessType}</Td>
        <Td>{row.owner.name}</Td>
        <Td><MoreOptionRes text='Resident'/></Td>
        
      </Tr>
    )
  })

  return (
    <Tbody>
      {rows}
    </Tbody>
  )
}

export default function BusinessEstListContent() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const [business, setBusiness] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/business', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(res => res.json())
    .then(
      (result) => {
        setBusiness(result)
      }
    )
  }, [])

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
        <TableBody business={business} />
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