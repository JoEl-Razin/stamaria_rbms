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
  RadioGroup,
  HStack,
  Radio,
} from '@chakra-ui/react'

import MoreOptionRes from '../../components/admin/MoreOption-Household'
/* import AddHousehold from '../../components/admin/AddHousehold' */

import { AiOutlinePrinter, AiOutlineUserAdd } from 'react-icons/ai'

export default function HouseholdListContent() {
  const [householdNo, setHouseholdNo] = useState()
  const [streetName, setStreetName] = useState()
  const [householdType, setHouseholdType] = useState()
  const [householdHead, setHouseholdHead] = useState()
  const [householdMembers, setHouseholdMembers] = useState([])

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

    onClose()

    alert('Added Successfully!')

    window.location.reload(true)
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

          {/* <AddHousehold /> */}
        </ModalContent>
      </Modal>
    </Box>
  )
}