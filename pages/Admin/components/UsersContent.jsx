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
  HStack,
  CheckboxGroup,
  Checkbox,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'

/* import UsersProfileCard from '../../components/admin/UsersProfileCard' */

import { AiOutlineUserAdd } from 'react-icons/ai'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

export default function CertificateContent() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [middleInitial, setMiddleInitial] = useState('')
  const [roles, setRoles] = useState([])

  const passwordShow = () => setShow(!show)
  const [show, setShow] = useState(false)
  const [users, setUsers] = useState([])
  const btnRef = React.useRef()
  const { isOpen, onOpen, onClose } = useDisclosure()

  function clearFields() {
    setUsername('')
    setPassword('')
    setFirstName('')
    setLastName('')
    setMiddleInitial('')
    setRoles([])
  }

  async function removeUser(id) {
    await fetch(`http://40.74.72.57/api/user/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })

    alert('Removed Successfully')

    window.location.reload(true)
  }

  async function addUser() {
    const credentials = JSON.stringify({
      username,
      password,
      name: {
        firstName,
        lastName,
        middleInitial,
      },
      roles
    })

    await fetch('http://40.74.72.57/api/user', {
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
    fetch('http://40.74.72.57/api/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(res => res.json())
      .then(
        (result) => {
          setUsers(result)
        }
      )
  }, [])

  return (
    <Box>
      <Flex>
        <Heading size='lg' mb={2}>System Users</Heading>
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
          Add User
          </Button>
      </Flex>

      <Divider my={3} />
      <Table variant='striped' colorScheme='gray' size='sm'>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Username</Th>
            <Th>Role</Th>
            <Th></Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            users.map((row) => {
              return (
                <Tr key={row._id}>
                  <Td>{row.name.firstName + ' ' + row.name.lastName}</Td>
                  <Td>{row.username}</Td>
                  <Td>{row.roles}</Td>
                  <Td><Button colorScheme='red' size='sm' onClick={() => removeUser(row._id)} size='sm'>Delete</Button></Td>
                </Tr>
              )
            })
          }
        </Tbody>
      </Table>

      <Modal isOpen={isOpen} onClose={onClose} size='4xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add User</ModalHeader>
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

              </Box>

              <Box flex='1'>
                <Heading size='sm'>User Credentials</Heading>
                <FormControl mt={2} isRequired Flex='1'>
                  <FormLabel>Username</FormLabel>
                  <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </FormControl>

                <FormControl mt={2} isRequired Flex='1'>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={show ? 'text' : 'password'}
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement>
                      <Box
                        as="button"
                        h="24px"
                        w='24px'
                        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                        onClick={passwordShow}>
                        {show ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                      </Box>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>

                <FormControl mt={2} isRequired Flex='1'>
                  <FormLabel>Roles</FormLabel>
                  <CheckboxGroup>
                    <HStack>
                      <Checkbox onChange={(e) => setRoles('Admin')} pr={5}>Admin</Checkbox>
                      <Checkbox onChange={(e) => setRoles('Barangay Official')} pr={5}>Barangay Official</Checkbox>
                      <Checkbox onChange={(e) => setRoles('Clerk')} pr={5}>Clerk</Checkbox>
                    </HStack>
                  </CheckboxGroup>
                </FormControl>

              </Box>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button mx={2} colorScheme='green' onClick={clearFields}>Clear Fields</Button>
            <Button mx={2} colorScheme='blue' onClick={addUser}>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

{/* <Flex>
  <UsersProfileCard user='Los Eli Angeles' pos='Brgy. Chairman' roles={[0, 1]} />
</Flex> */}