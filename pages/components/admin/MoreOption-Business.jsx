import { useState } from 'react'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  useDisclosure,
  Box,
  Button,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  HStack,
  Radio,
  Heading,
  Flex,
  Divider,
} from '@chakra-ui/react'

import { HiDotsHorizontal } from 'react-icons/hi'

/* import ViewBusiness from './ViewBusiness' */

export default function MoreOptionRes({
  url,
  _id,
  _businessName,
  _businessAddress,
  _businessType,
  _businessPermit,
  _owner,
  _contactNo,
  _address,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [businessName, setBusinessName] = useState(_businessName)
  const [businessAddress, setBusinessAddress] = useState(_businessAddress)
  const [businessType, setBusinessType] = useState(_businessType)
  const [businessPermit, setBusinessPermit] = useState(_businessPermit)
  const [owner, setOwner] = useState(_owner)
  const [contactNo, setContactNo] = useState(_contactNo)
  const [address, setAddress] = useState(_address)
  const id = _id

  function clearFields() {
    setBusinessName('')
    setBusinessAddress('')
    setBusinessType('')
    setBusinessPermit('')
    setCivilStatus('')
    setOwner('')
    setContactNo('')
    setAddress('')
  }

  async function deleteData(url, id) {
    await fetch(`http://40.74.72.57/api/${url}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
  }

  async function updateProfile() {
    const profile = JSON.stringify({
      businessName,
      businessAddress,
      businessType,
      businessPermit,
      owner: {
        name,
        contactNo,
        address
      }
    })
    await fetch(`http://40.74.72.57/api/business/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: profile,
    })

    onClose()

    alert('Updated Successfully!')

    window.location.reload(true)
  }

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<HiDotsHorizontal />}
        size='xs'
        variant='outline'
      />
      <MenuList>
        <MenuItem onClick={(onOpen)}>
          View/Edit {url}
        </MenuItem>
        <MenuItem onClick={() => deleteData(url, id)}>
          Delete {url}
        </MenuItem>
      </MenuList>

      <Modal isOpen={isOpen} onClose={onClose} size='4xl'>
        <ModalContent>
          <ModalHeader>View/Edit Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>

            <FormControl mt={2} isRequired Flex='1'>
              <FormLabel>Business Name</FormLabel>
              <Input placeholder="Business Name" value={businessName} onChange={(e) => setBusinessName(e.target.value)} />
            </FormControl>

            <FormControl mt={2} isRequired Flex='1'>
              <FormLabel>Business Address</FormLabel>
              <Input placeholder="Business Address" value={businessAddress} onChange={(e) => setBusinessAddress(e.target.value)} />
            </FormControl>

            <FormControl mt={2} isRequired Flex='1'>
              <FormLabel>Business Type</FormLabel>
              <Input placeholder="Business Type" value={businessType} onChange={(e) => setBusinessType(e.target.value)} />
            </FormControl>

            <FormControl mt={2} isRequired Flex='1'>
              <FormLabel>Business Permit</FormLabel>
              <Input placeholder="Business Permit" value={businessPermit} onChange={(e) => setBusinessPermit(e.target.value)} />
            </FormControl>

            <FormControl mt={2} isRequired Flex='1'>
              <FormLabel>Owner</FormLabel>
              <Input placeholder="Owner" value={owner} onChange={(e) => setOwner(e.target.value)} />
            </FormControl>

          </ModalBody>
          <ModalFooter>
            <Button mx={2} colorScheme='blue' onClick={updateProfile}>Update Profile</Button> {/* when clicked, turn into save button */}
          </ModalFooter>
          {/* <ViewBusiness
            _id={_id}
            _businessName={_businessName}
            _businessAddress={_businessAddress}
            _businessType={_businessType}
            _businessPermit={_businessPermit}
            _owner={_owner}
            _contactNo={_contactNo}
            _address={_address}
          /> */}
        </ModalContent>

      </Modal>
    </Menu>
  )
}