import Head from 'next/head'
import Link from 'next/link'
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
  Center,
  Spacer,
  Radio,
  RadioGroup,
  BoxShadow,
} from '@chakra-ui/react'

import { useState } from 'react'

import { HiSearch } from 'react-icons/hi'
import { MdAdd } from 'react-icons/md'

export default function RequestCertificatePage() {
  const [name, setName] = useState('')
  const [certType, setCertType] = useState('')
  const [address, setAddress] = useState('')
  const [purpose, setPurpose] = useState('')
  const [gender, setGender] = useState('')
  const [bName, setBName] = useState('')
  const [bAddress, setBAddress] = useState('')
  const [bType, setBType] = useState('')


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
    <Box w='100vw' h='100vh' bgColor='gray.100'>
      <Head>
        <title>Sta. Maria | Request for Certificate</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <Flex alignItems='center' w='100vw' bgColor='green.800' px={20} py={3}>
        <Heading color='white' size='lg' >Request for Certificate</Heading>
        <Spacer />
        <Link href='/'>
          <Button variant='outline' colorScheme='whiteAlpha' color='white'>Home</Button>
        </Link>

      </Flex>

      <Center mt={10} >
        <Flex bgColor='gray.50' p={25} borderRadius={10} boxShadow='md' w='75vw'>
          <Box flex='1' mr={10}>
            <Heading size='xs' mb={5}>Personal Information</Heading>
            <FormControl mb={5}>
              <FormLabel>Name</FormLabel>
              <Input type='text' placeholder='Name' value={name} onChange={(e) => setFirstName(e.target.value)} />
            </FormControl>

            <FormControl mb={5}>
              <FormLabel>Address</FormLabel>
              <Input type='text' placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} />
            </FormControl>

            <FormControl mb={5}>
              <FormLabel>Select Gender</FormLabel>
              <RadioGroup value={gender} onChange={setGender}>
                <Stack direction='row'>
                  <Radio value='Male'>Male</Radio>
                  <Radio value='Female'>Female</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
            <Button colorScheme='green'>Submit</Button>
          </Box>

          <Box>
            <Heading size='xs' mb={5}>Certificate Type</Heading>
            <FormControl mb={5}>
              <FormLabel>Select Clearance Type</FormLabel>
              <RadioGroup value={certType} onChange={setCertType}>
                <Stack direction='row'>
                  <Radio value='Barangay Clearance'>Barangay Clearance</Radio>
                  <Radio value='Business Clearance'>Business Clearance</Radio>
                </Stack>
                <Stack direction='row'>
                  <Radio value='Certificate of Good Moral'>Certificate of Good Moral</Radio>
                  <Radio value='Certificate of Indigency'>Certificate of Indigency</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
            {type}
          </Box>
        </Flex>

      </Center>
    </Box>
  )
}

{/* <Center p={10} bg='gray.50' h='100vh'>
      
      <Box>
        <Center p={5}>
          <Heading>Request for certificate</Heading>
        </Center>
        <Box>
          <Center>
            <Stack spacing={2} w='30vw'>

              <FormLabel>Name</FormLabel>
              <Input type='text' />

              <FormLabel>Address</FormLabel>
              <Input type='text' />

              <FormLabel>Type of Certificate</FormLabel>
              <Select placeholder='Select type'>
                <option>Barangay Clearance</option>
                <option>Business Clearance</option>
                <option>Certificate of Good Moral</option>
                <option>Certificate of Indigency</option>
              </Select>

              <FormLabel>Purpose</FormLabel>
              <Select placeholder='Select purpose'>
                <option>Police CLearance</option>
                <option>NBI Clearance</option>
                <option>BIR(TIN)</option>
                <option>Employment</option>
                <option>School Requirement</option>
                <option>Other</option>
              </Select>

              <FormLabel>Gender</FormLabel>
              <Select placeholder='Select gender'>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Select>

            </Stack>
          </Center>
        </Box>
      </Box>
    </Center> */}