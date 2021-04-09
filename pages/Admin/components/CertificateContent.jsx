
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
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Center,
} from '@chakra-ui/react'

import { HiSearch } from 'react-icons/hi'
import { MdAdd } from 'react-icons/md'

export default function DashboardContent() {
  return (
    <Box>
      <Heading size='lg' mb={2}>Certificate</Heading>
      <Divider my={3} />
      <Flex>
        <Box w='30vw'>
          <Table variant='striped' size='sm'>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Date</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Darry Francisco</Td>
                <Td>01/02/2021</Td>
                <Td><IconButton icon={<MdAdd />} size='xs' colorScheme='blackAlpha' /></Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>

        <Divider orientation='vertical' m={2} h='50vh' />

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
    </Box>
  )
}