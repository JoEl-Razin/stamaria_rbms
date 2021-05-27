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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'

import MoreOptionRes from '../../components/admin/MoreOptionRes'
import AddHousehold from '../../components/admin/AddHousehold'

import { AiOutlinePrinter, AiOutlineUserAdd } from 'react-icons/ai'

function TableBody({ households }) {
  const rows = households.map((row, index) => {
    return (
      <Tr key={index}>
        <Td>{row.householdNo}</Td>
        <Td>{row.streetName}</Td>
        <Td>{row.householdType}</Td>
        <Td>{row.householdHead}</Td>
        <Td><MoreOptionRes text='Household' /></Td>
        
      </Tr>
    )
  })

  return (
    <Tbody>
      {rows}
    </Tbody>
  )
}

export default function HouseholdListContent() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const [households, setHouseholds] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/household', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(res => res.json())
      .then(
        (result) => {
          setHouseholds(result)
        }
      )
  }, [])

  return (
    <Box>
      <Heading size='lg' mb={2}>Household List</Heading>
      <Spacer />

      <Divider my={3} />

      <Table variant='striped' colorScheme='gray' size='sm'>
        <Thead>
          <Tr>
            <Th>Household No.</Th>
            <Th>Street Name</Th>
            <Th>Household Type</Th>
            <Th>Household Head</Th>
          </Tr>
        </Thead>

        <TableBody households={households} />

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
          scrollBehavior='inside'
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Profile</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <AddHousehold />
            </ModalBody>
            <ModalFooter>
              <Button variant='outline' onClick={onClose}>Discard</Button>
              <Button colorScheme='blue'>Save</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Button colorScheme='teal' size='sm' my={2} mx={1} leftIcon={<AiOutlinePrinter />}>Print List</Button>
      </Flex>
    </Box>
  )
}