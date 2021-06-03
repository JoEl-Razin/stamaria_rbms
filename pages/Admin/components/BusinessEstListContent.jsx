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

import MoreOptionRes from '../../components/admin/MoreOption-Business'
import AddBusiness from '../../components/admin/AddBusiness'

import { AiOutlinePrinter } from 'react-icons/ai'
import { MdAdd } from 'react-icons/md'

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
      <Flex>
        <Heading size='lg' mb={2}>Business Establishment List</Heading>
        <Spacer />
        <Button
          colorScheme='green'
          size='sm'
          my={2}
          mx={1}
          leftIcon={<MdAdd />}
          ref={btnRef}
          onClick={onOpen}
        >
          Add Business Est
          </Button>
      </Flex>


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
          {
            business.map((row) => {
              return (
                <Tr key={row._id}>
                  <Td>{row.businessName}</Td>
                  <Td>{row.businessAddress}</Td>
                  <Td>{row.businessType}</Td>
                  <Td>{row.owner.name}</Td>
                  <Td>
                    <MoreOptionRes
                      url='business'
                      _id={row._id}
                      _businessName={row.businessName}
                      _businessAddress={row.businessAddress}
                      _businessType={row.businessType}
                      _businessPermit={row.businessPermit}
                      _owner={row.owner.name}
                      _contactNo={row.owner.contactNo}
                      _address={row.owner.address}
                    />
                  </Td>
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

          <AddBusiness />

        </ModalContent>
      </Modal>
    </Box>
  )
}