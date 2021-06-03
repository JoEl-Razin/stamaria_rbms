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
  _householdNo,
  _streetName,
  _householdType,
  _householdHead,
  _householdMember,
}) {

  const [householdNo, setHouseholdNo] = useState(_householdNo)
  const [streetName, setStreetName] = useState(_streetName)
  const [householdType, setHouseholdType] = useState(_householdType)
  const [householdHead, setHouseholdHead] = useState(_householdHead)
  const [householdMember, setHouseholdMember] = useState(_householdMember)
  const id = _id

  function clearFields() {
    setHouseholdNo('')
    setStreetname('')
    setHouseholdType('')
    setHouseholdHead('')
    setHouseholdMember('')
  }

  async function updateProfile(){
    const profile = JSON.stringify({
      householdNo,
      streetName,
      householdType,
      householdHead,
      householdMember,
    })
    await fetch(`http://localhost:8080/household/${id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'applicaiton/json'
      },
      body: profile,
    })
  }

  let type;
  if (householdType == 'One-Person') {

  }
  else if (householdType == 'Couple') {
    type = <FormControl mt={2} isRequired Flex='1'>
      <FormLabel>Household Member</FormLabel>
      <Input placeholder="Household Member" value={householdMember} onChange={(e) => setHouseholdMembers(e.target.value)} />
    </FormControl>
  }
  else if (householdType == 'Couple w/ childrens') {

  }
  else if (householdType == 'Big Family') {

  }
  else if (householdType == 'Rental') {

  }
  else {

  }


  return (
    <Box>
      <ModalBody>

        <FormControl mt={2} isRequired Flex='1'>
          <FormLabel>Household Number</FormLabel>
          <Input placeholder="Household Number" value={householdNo} onChange={(e) => setHouseholdNo(e.target.value)} />
        </FormControl>

        <FormControl mt={2} isRequired Flex='1'>
          <FormLabel>Street Name</FormLabel>
          <Input placeholder="Street Namer" value={streetName} onChange={(e) => setStreetName(e.target.value)} />
        </FormControl>

        <FormControl m={2} isRequired>
          <FormLabel>Household Type</FormLabel>
          <RadioGroup value={householdType} onChange={setHouseholdType}>
            <HStack spacing='24px'>
              <Radio value='One-Person'>One-Person</Radio>
              <Radio value='Couple'>Couple</Radio>
              <Radio value='Couple w/ childrens'>Couple w/Childrens</Radio>
              <Radio value='Big Family'>Big Family</Radio>
              <Radio value='Rental'>Rental</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>

        <FormControl mt={2} isRequired Flex='1'>
          <FormLabel>Household Head</FormLabel>
          <Input placeholder="Household Head" value={householdHead} onChange={(e) => setHouseholdHead(e.target.value)} />
        </FormControl>

        {type}

      </ModalBody>
      <ModalFooter>
      <Button mx={2} colorScheme='blue' onClick={updateProfile}>Update Profile</Button>
      </ModalFooter>

    </Box>
  )
}