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
} from '@chakra-ui/react'

import { HiSearch } from 'react-icons/hi'
import { MdAdd } from 'react-icons/md'

export default function RequestCertificatePage() {
  return (
    <Center p={10} bg='gray.50' h='100vh'>
      <Box>
        <Center p={5}>
          <Heading>Request for certificate</Heading>
        </Center>
        <Box>
          <Center>
            <Stack spacing={2} w='30vw'>
              <FormLabel>Control No.</FormLabel>
              <Input type='number' isDisabled placeholder='0001' />

              <FormLabel>Type of Certificate</FormLabel>
              <Select placeholder='Select type'>
                <option>Barangay Clearance</option>
                <option>Business Clearance</option>
                <option>Certificate of Good Moral</option>
                <option>Certificate of Indigency</option>
              </Select>

              <FormLabel>Name</FormLabel>
              <Input type='text' />

              <FormLabel>Address</FormLabel>
              <Input type='text' />

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
    </Center>
  )
}

{/* <Box>
  <Heading size='lg' mb={2}>Request for Certificate</Heading>
  <Divider my={3} />
  <Flex>
    <Center>
      <Stack spacing={2} w='30vw'>
        <FormControl>
          <FormLabel>Control No.</FormLabel>
          <Input type='number' isDisabled placeholder='0001' />
        </FormControl>
        <FormControl>
          <FormLabel>Type of Certificate</FormLabel>
          <Select placeholder='Select type'>
            <option>Barangay Clearance</option>
            <option>Business Clearance</option>
            <option>Certificate of Good Moral</option>
            <option>Certificate of Indigency</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <InputGroup>
            <Input type='text' />
            <InputRightElement>
              <IconButton icon={<HiSearch />}></IconButton>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel>Address</FormLabel>
          <Input type='text' />
        </FormControl>
        <FormControl>
          <FormLabel>Purpose</FormLabel>
          <Select placeholder='Select purpose'>
            <option>Police CLearance</option>
            <option>NBI Clearance</option>
            <option>BIR(TIN)</option>
            <option>Employment</option>
            <option>School Requirement</option>
            <option>Other</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <Select placeholder='Select gender'>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </Select>
        </FormControl>
      </Stack>
    </Center>

    <Divider orientation='vertical' m={2} h='50vh' />
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
  </Flex>
</Box> */}