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
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

import MoreOptionRes from '../../components/admin/MoreOptionRes'
import AddProfile from '../../components/admin/AddProfile'

import { AiOutlinePrinter, AiOutlineUserAdd } from 'react-icons/ai'

/* function TableBody({ residents }) {
  const rows = residents.map((row, index) => {
    return (
      <Tr key={index}>
        <Td>{row.name.firstName + ' ' + row.name.lastName}</Td>
        <Td>{row.address.householdNo + ', ' + row.address.streetName}</Td>
        <Td>{row.profession}</Td>
        <Td>{row.nationality}</Td>
        <Td><MoreOptionRes text='Resident' /></Td>

      </Tr>
    )
  })

  return (
    <Tbody>
      {rows}
    </Tbody>
  )
}
 */



export default function DashboardContent() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  var [residents, setResidents] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/resident', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(res => res.json())
      .then(
        (result) => {
          setResidents(result)
        }
      )
  }, [])

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
            <Th>Profession</Th>
            <Th>Nationality</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            residents.map((row, index) => {
              return (
                <Tr key={row._id}>
                  <Td>{row.name.firstName + ' ' + row.name.lastName}</Td>
                  <Td>{row.address.householdNo + ' ' + row.address.streetName}</Td>
                  <Td>{row.profession}</Td>
                  <Td>{row.nationality}</Td>
                  <Td><MoreOptionRes text='Resident' /></Td>
                </Tr>
              )
            })
          }
        </Tbody>


        {/* <TableBody residents={residents} /> */}

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
        <Modal
          isOpen={isOpen}
          onClose={onClose}
        // scrollBehavior='inside'
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Profile</ModalHeader>
            <ModalCloseButton />

            <AddProfile onClick={onClose} />

          </ModalContent>
        </Modal>
        <Button colorScheme='teal' size='sm' my={2} mx={1} leftIcon={<AiOutlinePrinter />}>Print List</Button>
      </Flex>
    </Box>
  )
}