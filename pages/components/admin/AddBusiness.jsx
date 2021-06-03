import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  HStack,
  Radio,
  Box,
  Flex,
  ModalBody,
  ModalFooter,
  Button,
  Heading,
} from '@chakra-ui/react'

export default function addBusiness() {
  const [businessName, setBusinessName] = useState()
  const [businessAddress, setBusinessAddress] = useState()
  const [businessType, setBusinessType] = useState()
  const [businessPermit, setBusinessPermit] = useState()
  const [name, setName] = useState()
  const [contactNo, setContactNo] = useState()
  const [address, setAddress] = useState()

  function clearFields() {
    setBusinessName('')
    setBusinessAddress('')
    setBusinessType('')
    setBusinessPermit('')
    setName('')
    setContactNo('')
    setAddress('')
  }

  async function addProfile() {
    const credentials = JSON.stringify({
      businessName,
      businessAddress,
      businessType,
      businessPermit,
      owner: {
        name,
        contactNo,
        address,
      }
    })

    const response = await fetch('http://localhost:8080/business', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: credentials,
    }).then((res) => res.json())
  }

  return (
    <Box>
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
        <Button mx={2} colorScheme='blue' onClick={addProfile}>Save</Button>
      </ModalFooter>

    </Box>
  )
}