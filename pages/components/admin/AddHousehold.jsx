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
} from '@chakra-ui/react'


export default function AddHousehold() {
  const [householdNo, setHouseholdNo] = useState()
  const [streetName, setStreetName] = useState()
  const [householdType, setHouseholdType] = useState()
  const [householdHead, setHouseholdHead] = useState()
  const [householdMembers, setHouseholdMembers] = useState([])


  function clearFields() {
    setHouseholdNo()
    setStreetName()
    setHouseholdType()
    setHouseholdHead()
    setHouseholdMembers()
  }

  async function addProfile() {

    const credentials = JSON.stringify({
      householdNo,
      streetName,
      householdType,
      householdHead,
      householdMembers,
    })

    const response = await fetch('http://localhost:8080/household', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: credentials,
    }).then((res) => res.json())
  }

  let type;
  if (householdType == 'One-Person') {

  }
  else if (householdType == 'Couple') {
    type = <FormControl mt={2} isRequired Flex='1'>
      <FormLabel>Household Member</FormLabel>
      <Input placeholder="Household Member" value={householdMembers} onChange={(e) => setHouseholdMembers(e.target.value)} />
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
        <Button mx={2} colorScheme='green' onClick={clearFields}>Clear Fields</Button>
        <Button mx={2} colorScheme='blue' onClick={addProfile}>Save</Button>
      </ModalFooter>

    </Box>

  )
}