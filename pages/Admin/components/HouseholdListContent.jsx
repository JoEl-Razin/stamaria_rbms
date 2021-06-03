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

import MoreOptionRes from '../../components/admin/MoreOption-Household'
import AddHousehold from '../../components/admin/AddHousehold'

import { AiOutlinePrinter, AiOutlineUserAdd } from 'react-icons/ai'

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
      <Flex>
        <Heading size='lg' mb={2}>Household List</Heading>
        <Spacer />
        <Button
          colorScheme='green'
          size='sm'
          my={2}
          mx={1}
          leftIcon={<AiOutlineUserAdd />}
          ref={btnRef}
          onClick={onOpen}
        >
          Add Household
          </Button>
      </Flex>


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
        <Tbody>
          {
            households.map((row) => {
              return (
                <Tr key={row._id}>
                  <Td>{row.householdNo}</Td>
                  <Td>{row.streetName}</Td>
                  <Td>{row.householdType}</Td>
                  <Td>{row.householdHead}</Td>
                  <Td><MoreOptionRes
                    url='household'
                    id={row._id}
                    _householdNo={row.householdNo}
                    _streetName={row.streetName}
                    _householdType={row.householdType}
                    _householdHead={row.householdHead}
                    _householdMember={row.householdMember}
                  /></Td>
                </Tr>
              )
            })
          }
        </Tbody>

      </Table>
      <Flex>


        {/* <Button colorScheme='teal' size='sm' my={2} mx={1} leftIcon={<AiOutlinePrinter />}>Print List</Button> */}
      </Flex>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size='4xl'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Profile</ModalHeader>
          <ModalCloseButton />

          <AddHousehold />

        </ModalContent>
      </Modal>
    </Box>
  )
}