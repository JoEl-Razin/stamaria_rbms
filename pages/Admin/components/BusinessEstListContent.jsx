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
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'

import MoreOptionRes from '../../components/admin/MoreOption-Business'
/* import AddBusiness from '../../components/admin/AddBusiness' */

import addProfile from '../../api/admin/addBusiness'

import { AiOutlinePrinter } from 'react-icons/ai'
import { MdAdd } from 'react-icons/md'

export default function BusinessEstListContent() {
  const [businessName, setBusinessName] = useState()
  const [businessAddress, setBusinessAddress] = useState()
  const [businessType, setBusinessType] = useState()
  const [businessPermit, setBusinessPermit] = useState()
  const [name, setName] = useState()
  const [contactNo, setContactNo] = useState()
  const [address, setAddress] = useState()

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

  function clearFields() {
    setBusinessName('')
    setBusinessAddress('')
    setBusinessType('')
    setBusinessPermit('')
    setName('')
    setContactNo('')
    setAddress('')
  }

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
          <ModalBody >
            <Flex>
              <Box flex='1' mr={10}>
                <Heading size='sm'>Business Details</Heading>
                <FormControl mt={2} isRequired Flex='1'>
                  <FormLabel>Business Name</FormLabel>
                  <Input placeholder="Business Name" value={businessName} onChange={(e) => setBusinessName(e.target.value)} />
                </FormControl>

                <FormControl mt={2} isRequired Flex='1'>
                  <FormLabel>Business Address</FormLabel>
                  <Input placeholder="Business Address" value={businessAddress} onChange={(e) => setBusinessAddress(e.target.value)} />
                </FormControl>

                <FormControl mt={2} isRequired Flex='1'>
                  <FormLabel>Business Type</FormLabel>
                  <Input placeholder="Business Type" value={businessType} onChange={(e) => setBusinessType(e.target.value)} />
                </FormControl>

                <FormControl mt={2} isRequired Flex='1'>
                  <FormLabel>Business Permit</FormLabel>
                  <Input placeholder="Business Permit" value={businessPermit} onChange={(e) => setBusinessPermit(e.target.value)} />
                </FormControl>
              </Box>

              <Box flex='1'>
                <Heading size='sm'>Owner Details</Heading>
                <FormControl mt={2} isRequired Flex='1'>
                  <FormLabel>Owner Name</FormLabel>
                  <Input placeholder="Owner Name" value={name} onChange={(e) => setName(e.target.value)} />
                </FormControl>

                <FormControl mt={2} isRequired Flex='1'>
                  <FormLabel>Owner Contact No</FormLabel>
                  <Input placeholder="Owner" value={contactNo} onChange={(e) => setContactNo(e.target.value)} />
                </FormControl>

                <FormControl mt={2} isRequired Flex='1'>
                  <FormLabel>Owner Address</FormLabel>
                  <Input placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                </FormControl>
              </Box>
            </Flex>

          </ModalBody>
          <ModalFooter>
            <Button mx={2} colorScheme='green' onClick={clearFields}>Clear Fields</Button>
            <Button mx={2} colorScheme='blue' onClick={addProfile({ businessName, businessAddress, businessType, businessPermit, name, contactNo, address })}>Save</Button>
          </ModalFooter>

          {/* <AddBusiness /> */}
        </ModalContent>
      </Modal>
    </Box>
  )
}