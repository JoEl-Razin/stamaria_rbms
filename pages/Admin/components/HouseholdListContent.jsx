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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'

import MoreOptionsList from '../../components/admin/MoreOptionsList'
import AddHousehold from '../../components/admin/AddHousehold'

import { AiOutlinePrinter, AiOutlineUserAdd } from 'react-icons/ai'


export default function HouseholdListContent() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <Box>
      <Heading size='lg' mb={2}>Household List</Heading>
      <Spacer />

      <Divider my={3} />

      <Table variant='striped' colorScheme='gray' size='sm'>
        <Thead>
          <Tr>
            <Th>Household No.</Th>
            <Th>Address</Th>
            <Th>Family Head</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>000</Td>
            <Td>Saavedra St.</Td>
            <Td>Al Pedro Jon Kanalang</Td>
            <Td>
              <MoreOptionsList text='Household' />
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
          scrollBehavior='inside'
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Profile</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <AddHousehold />
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