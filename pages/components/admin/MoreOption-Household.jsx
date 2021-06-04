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

/* import ViewHousehold from './ViewHousehold' */

export default function MoreOptionRes({
  url,
  _id,
  _householdNo,
  _streetName,
  _householdType,
  _householdHead,
  _householdMember,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [householdNo, setHouseholdNo] = useState(_householdNo)
  const [streetName, setStreetName] = useState(_streetName)
  const [householdType, setHouseholdType] = useState(_householdType)
  const [householdHead, setHouseholdHead] = useState(_householdHead)
  const [householdMember, setHouseholdMember] = useState(_householdMember)
  const id = _id

  function clearFields() {
    setHouseholdNo('')
    setStreetname('')
    setHouseholdType('')
    setHouseholdHead('')
    setHouseholdMember('')
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
      householdNo,
      streetName,
      householdType,
      householdHead,
      householdMember,
    })
    await fetch(`http://40.74.72.57/api/household/${id}`, {
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

  let type;
  if (householdType == 'One-Person') {

  }
  else if (householdType == 'Couple') {
    type = <FormControl mt={2} isRequired Flex='1'>
      <FormLabel>Household Member</FormLabel>
      <Input placeholder="Household Member" value={householdMember} onChange={(e) => setHouseholdMembers(e.target.value)} />
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
            <Button mx={2} colorScheme='blue' onClick={updateProfile}>Update Profile</Button>
          </ModalFooter>
          {/* <ViewHousehold
            _id={_id}
            _householdNo={_householdNo}
            _streetName={_streetName}
            _householdType={_householdType}
            _householdHead={_householdHead}
            _householdMember={_householdMember}
          /> */}
        </ModalContent>

      </Modal>
    </Menu>
  )
}