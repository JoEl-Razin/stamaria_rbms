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
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  HStack,
  Radio,
} from '@chakra-ui/react'

import MoreOptionRes from '../../components/admin/MoreOption-Profile'
/* import AddProfile from '../../components/admin/AddProfile' */

import { AiOutlinePrinter, AiOutlineUserAdd } from 'react-icons/ai'

export default function DashboardContent() {
  const [firstName, setFirstName] = useState('')
  const [middleInitial, setMiddleInitial] = useState('')
  const [lastName, setLastName] = useState('')
  const [sex, setSex] = useState('')
  const [civilStatus, setCivilStatus] = useState('')
  const [religion, setReligion] = useState('')
  const [householdNo, setHouseholdNo] = useState('')
  const [streetName, setStreetName] = useState('')
  const [precintNumber, setPrecintNumber] = useState('')
  const [birthday, setBirthday] = useState('')
  const [nationality, setNationality] = useState('')
  const [profession, setProfession] = useState('')
  const [birthplace, setBirthplace] = useState('')
  const [residentType, setResidentType] = useState('Non-Voter')
  const [blacklisted, setBlacklisted] = useState('false')
  const [details, setDetails] = useState('')
  const [invalidMessage, setInvalidMessage] = useState('')

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  var [residents, setResidents] = useState([])

  function clearFields() {
    setFirstName('')
    setMiddleInitial('')
    setLastName('')
    setSex('')
    setCivilStatus('')
    setReligion('')
    setHouseholdNo('')
    setStreetName('')
    setPrecintNumber('')
    setBirthday('')
    setNationality('')
    setProfession('')
    setBirthplace('')
    setBlacklisted('false')
    setDetails('')
    setResidentType('Non-Voter')
  }

  async function addProfile() {

    const credentials = JSON.stringify({
      name: {
        firstName,
        middleInitial,
        lastName,
      },
      civilStatus,
      religion,
      sex,
      address: {
        householdNo,
        streetName,
      },
      precintNumber,
      birthday,
      civilStatus,
      nationality,
      profession,
      birthplace,
      residentType,
      blacklist: {
        blacklisted,
        details,
      }
    })

    await fetch('http://40.74.72.57/api/resident', {
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

  useEffect(() => {
    fetch('http://40.74.72.57/api/resident', {
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

  let type;
  if (residentType == 'Voter') {
    type = <FormControl m={2} isRequired>
      <FormLabel>Precint Number</FormLabel>
      <Input placeholder="Precint Number" value={precintNumber} onChange={(e) => setPrecintNumber(e.target.value)} />
    </FormControl>
  } else {
    type = <> </>
  }

  let blacklistForm;
  if (blacklisted == 'true') {
    blacklistForm = <FormControl mt={2} isRequired>
      <FormLabel>Details for blacklist</FormLabel>
      <Input placeholder="Details" value={details} onChange={(e) => setDetails(e.target.value)} />
    </FormControl>
  } else {
    blacklistForm = <> </>
  }

  return (
    <Box>
      <Flex>
        <Heading size='lg' mb={2}>Residents List</Heading>
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
          Add Resident
          </Button>
      </Flex>


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
            residents.map((row) => {
              return (
                <Tr key={row._id}>
                  <Td>{row.name.firstName + ' ' + row.name.lastName}</Td>
                  <Td>{row.address.householdNo + ' ' + row.address.streetName}</Td>
                  <Td>{row.profession}</Td>
                  <Td>{row.nationality}</Td>
                  <Td>
                    <MoreOptionRes
                      url='resident'
                      _id={row._id}
                      _firstName={row.name.firstName}
                      _middleInitial={row.name.middleInitial}
                      _lastName={row.name.lastName}
                      _sex={row.sex}
                      _civilStatus={row.civilStatus}
                      _religion={row.religion}
                      _householdNo={row.address.householdNo}
                      _streetName={row.address.streetName}
                      _precintNumber={row.precintNumber}
                      _birthday={row.birthday}
                      _birthplace={row.birthplace}
                      _profession={row.profession}
                      _nationality={row.nationality}
                      _residentType={row.residentType}
                      _blacklisted={row.blacklist.blacklisted}
                      _details={row.blacklist.details}
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
          <ModalBody>
            <Flex h='100%'>
              <Box flex='1' mr={10}>
                <Heading size='sm'>Name</Heading>

                <FormControl mt={2} isRequired Flex='1'>
                  <FormLabel>First name</FormLabel>
                  <Input placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </FormControl>

                <Flex>
                  <FormControl mt={2} mr={5} flex='1'>
                    <FormLabel>Middle Initial</FormLabel>
                    <Input placeholder="MI" value={middleInitial} onChange={(e) => setMiddleInitial(e.target.value)} />
                  </FormControl>

                  <FormControl mt={2} isRequired flex='2'>
                    <FormLabel>Last name</FormLabel>
                    <Input placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                  </FormControl>
                </Flex>

                <Box>
                  <Heading mt={5} size='sm'>Address</Heading>
                  <FormControl m={2} isRequired>
                    <FormLabel>House Number</FormLabel>
                    <Input placeholder="House Number" value={householdNo} onChange={(e) => setHouseholdNo(e.target.value)} />
                  </FormControl>

                  <FormControl m={2} isRequired>
                    <FormLabel>Street</FormLabel>
                    <Input placeholder="Street" value={streetName} onChange={(e) => setStreetName(e.target.value)} />
                  </FormControl>

                  <FormControl m={2} isRequired>
                    <FormLabel>Resident Type</FormLabel>
                    <RadioGroup value={residentType} onChange={setResidentType}>
                      <HStack spacing='24px'>
                        <Radio value='Voter'>Voter</Radio>
                        <Radio value='Non-Voter'>Non-Voter</Radio>
                      </HStack>
                    </RadioGroup>

                    {type}
                  </FormControl>
                </Box>
              </Box>

              <Divider orientation='vertical' />

              <Box flex='1'>
                <Heading size='sm'>Personal Information</Heading>
                <Flex>
                  <FormControl m={2} isRequired>
                    <FormLabel>Sex</FormLabel>
                    <RadioGroup value={sex} onChange={setSex}>
                      <HStack spacing='24px'>
                        <Radio value='Female'>Female</Radio>
                        <Radio value='Male'>Male</Radio>
                      </HStack>
                    </RadioGroup>
                  </FormControl>

                  <FormControl m={2} isRequired>
                    <FormLabel>Civil Status</FormLabel>
                    <Input placeholder="Civil Status" value={civilStatus} onChange={(e) => setCivilStatus(e.target.value)} />
                  </FormControl>
                </Flex>

                <Flex>
                  <FormControl mt={2} mr={5} isRequired>
                    <FormLabel>Religion</FormLabel>
                    <Input placeholder="Religion" value={religion} onChange={(e) => setReligion(e.target.value)} />
                  </FormControl>

                  <FormControl mt={2} isRequired>
                    <FormLabel>Nationality</FormLabel>
                    <Input placeholder="Nationality" value={nationality} onChange={(e) => setNationality(e.target.value)} />
                  </FormControl>
                </Flex>

                <FormControl m={2} isRequired>
                  <FormLabel>Birthday</FormLabel>
                  <Input type='date' value={birthday} onChange={(e) => setBirthday(e.target.value)} />
                </FormControl>

                <FormControl m={2} isRequired>
                  <FormLabel>Birth place</FormLabel>
                  <Input placeholder="Brith Place" value={birthplace} onChange={(e) => setBirthplace(e.target.value)} />
                </FormControl>

                <FormControl m={2} isRequired>
                  <FormLabel>Profession</FormLabel>
                  <Input placeholder="Profession" value={profession} onChange={(e) => setProfession(e.target.value)} />
                </FormControl>
              </Box>
            </Flex>

            <FormControl mr={10} m={2} isRequired>
              <FormLabel>Blacklist</FormLabel>
              <RadioGroup value={blacklisted} onChange={setBlacklisted}>
                <HStack spacing='24px'>
                  <Radio value='false'>Not Blacklisted</Radio>
                  <Radio value='true'>Blacklist</Radio>
                </HStack>
              </RadioGroup>
              {blacklistForm}
            </FormControl>

          </ModalBody>

          <ModalFooter>
            <Button mx={2} colorScheme='green' onClick={clearFields}>Clear Fields</Button>
            <Button mx={2} colorScheme='blue' onClick={addProfile}>Save</Button>
          </ModalFooter>


          {/* <AddProfile /> */}
        </ModalContent>
      </Modal>
    </Box>
  )
}