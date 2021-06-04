import { useState, useEffect } from 'react'
import {
  Heading,
  Box,
  Divider,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  IconButton,
  Stack,
  FormControl,
  FormLabel,
  Select,
  Radio,
  RadioGroup,
  BoxShadow,
  Center,
  InputElementRight,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react'

import { HiSearch } from 'react-icons/hi'
import { MdAdd } from 'react-icons/md'

export default function DashboardContent() {
  const [name, setName] = useState('')
  const [certType, setCertType] = useState('')
  const [address, setAddress] = useState('')
  const [purpose, setPurpose] = useState('')
  const [gender, setGender] = useState('')
  const [bName, setBName] = useState('')
  const [bAddress, setBAddress] = useState('')
  const [bType, setBType] = useState('')

  const [residents, setResidents] = useState([])

  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    fetch('http://localhost:8080/resident', {
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

  var type

  switch (certType) {
    case 'Barangay Clearance':
      type = <FormControl mb={2}>
        <FormLabel>Purpose</FormLabel>
        <Select placeholder='Select purpose' value={purpose} onChance={setPurpose}>
          <option value='Police Clearance'>Police Clearance</option>
          <option value='NBI Clearance'>NBI Clearance</option>
          <option value='BIR(TIN)'>BIR(TIN)</option>
          <option value='Employment'>Employment</option>
          <option value='School Requirement'>School Requirement</option>
          <option value='Other'>Other</option>
        </Select>
      </FormControl>
      break;
    case 'Business Clearance':
      type = <Box>
        <FormControl mb={2}>
          <FormLabel>Business Name</FormLabel>
          <Input type='text' placeholder='Business Name' value={bName} onChange={(e) => setBName(e.target.value)} />
        </FormControl>
        <FormControl mb={2}>
          <FormLabel>Business Address</FormLabel>
          <Input type='text' placeholder='Business Address' value={bAddress} onChange={(e) => setBAddress(e.target.value)} />
        </FormControl>
        <FormControl mb={2}>
          <FormLabel>Business Line</FormLabel>
          <Input type='text' placeholder='Business Type' value={bType} onChange={(e) => setBType(e.target.value)} />
        </FormControl>
      </Box>
      break;
    case 'Certificate of Good Moral':
      break;
    case 'Certificate of Indigency':
      break;
  }

  return (
    <Box>
      <Heading size='lg' mb={2}>Certificate</Heading>
      <Divider my={3} />
      <Flex>


        <Box flex='1' mr={10} w='30vw'>
          <Heading size='xs' mb={5}>Personal Information</Heading>
          <FormControl mb={5}>
            <FormLabel>Name</FormLabel>
            <InputGroup>
              <Input type='text' placeholder='Name' value={name} onChange={(e) => setFirstName(e.target.value)} />
              <InputRightElement>
                <Box
                  as='button'
                  _hover={{ bgColor: 'gray.200', }}
                  transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                  h='24px'
                  w='24px'
                  onClick={onOpen}
                  pl='3px'
                  borderRadius='5px'
                >
                  <HiSearch />
                </Box>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <FormControl mb={5}>
            <FormLabel>Address</FormLabel>
            <Input type='text' placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} />
          </FormControl>

          <FormControl mb={5}>
            <FormLabel>Select Gender</FormLabel>
            <RadioGroup value={gender} onChange={setGender}>
              <Radio value='Male'>Male</Radio>
              <Radio ml={5} value='Female'>Female</Radio>
            </RadioGroup>
          </FormControl>

          <Button mt={10} colorScheme='green'>Print Certificate</Button>
        </Box>

        <Box flex='1'>
          <Heading size='xs' mb={5}>Certificate Type</Heading>
          <FormControl mb={5}>
            <FormLabel>Select Clearance Type</FormLabel>
            <RadioGroup value={certType} onChange={setCertType}>
              <Flex>
                <Stack>
                  <Radio value='Barangay Clearance'>Barangay Clearance</Radio>
                  <Radio value='Business Clearance'>Business Clearance</Radio>
                </Stack>
                <Stack ml={5}>
                  <Radio value='Certificate of Good Moral'>Certificate of Good Moral</Radio>
                  <Radio value='Certificate of Indigency'>Certificate of Indigency</Radio>
                </Stack>
              </Flex>
            </RadioGroup>
          </FormControl>
          {type}
        </Box>

        <Divider orientation='vertical' m={2} h='50vh' />

      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Table variant='simple' size='sm'>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Address</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {
                  residents.map((row) => {
                    return (
                      <Tr key={row._id}>
                        <Td>{row.name.firstName + ' ' + row.name.lastName}</Td>
                        <Td>{row.address.householdNo + ' ' + row.address.streetName}</Td>
                        <Td><Button size='sm' onClick={
                          () => { 
                            setName(row.name.firstName + ' ' + row.name.lastName)
                            setAddress(row.address.householdNo + ' ' + row.address.streetName)
                            setGender(row.sex)
                            onClose()
                          }
                        }>Select</Button></Td>
                      </Tr>
                    )
                  })
                }
              </Tbody>
            </Table>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>

      </Modal>
    </Box>
  )
}

/*
<Center>
  <Stack spacing={3} w='30vw'>
    <FormControl>
      <FormLabel>Amount to Pay</FormLabel>
      <Input type='number' isDisabled placeholder='50php' />
    </FormControl>
    <FormControl>
      <FormLabel>Amount Tendered</FormLabel>
      <Input type='number' placeholder='50php' />
    </FormControl>
    <Box>
      <Button mx={2} colorScheme='orange'>Clear</Button>
      <Button colorScheme='green'>Proceed</Button>
    </Box>
  </Stack>
</Center>
*/