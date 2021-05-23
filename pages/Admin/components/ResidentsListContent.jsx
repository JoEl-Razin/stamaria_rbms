import * as React from 'react'
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
} from '@chakra-ui/react'

import MoreOptionsList from '../../components/admin/MoreOptionsList'
import AddProfile from '../../components/admin/AddProfile'

import { AiOutlinePrinter, AiOutlineUserAdd } from 'react-icons/ai'


export default function DashboardContent() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <Box>
      <Heading size='lg' mb={2}>Residents List</Heading>
      <Spacer />

      <Divider my={3} />

      <Table variant='striped' colorScheme='gray' size='sm'>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Address</Th>
            <Th>Resident Type</Th>
            <Th>Nationality</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Al Pedro Jon Kanalang</Td>
            <Td>Saavedra St.</Td>
            <Td>Permanent</Td>
            <Td>Filipino</Td>
            <Td>
              <MoreOptionsList text='Residents' />
            </Td>
          </Tr>
        </Tbody>
      </Table>
      <Flex>
        <Button
          colorScheme='green'
          size='sm'
          my={2}
          mx={1}
          leftIcon={<AiOutlineUserAdd />}
          ref={btnRef}
          onClick={onOpen}
        >
          Add
          </Button>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          scrollBehavior = 'inside'
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Profile</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <AddProfile/>
            </ModalBody>
            <ModalFooter>
              <Button variant='outline' onClick={onClose}>Discard</Button>
              <Button colorScheme='blue'>Save</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Button colorScheme='teal' size='sm' my={2} mx={1} leftIcon={<AiOutlinePrinter />}>Print List</Button>
      </Flex>
    </Box>
  )
}