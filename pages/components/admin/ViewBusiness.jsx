import React, { useState, useEffect } from 'react'
import {
  Box,
  Button,
  ModalFooter,
  ModalBody,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  HStack,
  Radio,
  Heading,
  Flex,
  Divider,
} from '@chakra-ui/react'

// import ViewResident from '../../api/admin/resident/resident-view-one'

export default function view({
  _id,
  _businessName,
  _businessAddress,
  _businessType,
  _businessPermit,
  _owner,
  _contactNo,
  _address,
}) {

  const [businessName, setBusinessName] = useState(_businessName)
  const [businessAddress, setBusinessAddress] = useState(_businessAddress)
  const [businessType, setBusinessType] = useState(_businessType)
  const [businessPermit, setBusinessPermit] = useState(_businessPermit)
  const [owner, setOwner] = useState(_owner)
  const [contactNo, setContactNo] = useState(_contactNo)
  const [address, setAddress] = useState(_address)
  const id = _id

  function clearFields() {
    setBusinessName('')
    setBusinessAddress('')
    setBusinessType('')
    setBusinessPermit('')
    setCivilStatus('')
    setOwner('')
    setContactNo('')
    setAddress('')
  }

  async function updateProfile() {
    const profile = JSON.stringify({
      businessName,
      businessAddress,
      businessType,
      businessPermit,
      owner: {
        name,
        contactNo,
        address
      }
    })
    await fetch(`http://localhost:8080/business/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'applicaiton/json'
      },
      body: profile,
    })
  }

  return (
    <Box>
      <ModalBody>

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

        <FormControl mt={2} isRequired Flex='1'>
          <FormLabel>Owner</FormLabel>
          <Input placeholder="Owner" value={owner} onChange={(e) => setOwner(e.target.value)} />
        </FormControl>

      </ModalBody>
      <ModalFooter>
        <Button mx={2} colorScheme='blue' onClick={updateProfile}>Update Profile</Button> {/* when clicked, turn into save button */}
      </ModalFooter>

    </Box>
  )
}