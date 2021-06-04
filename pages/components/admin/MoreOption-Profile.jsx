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

/* import ViewResident from './ViewResidents' */

export default function MoreOptionRes({
  url,
  _id,
  _firstName,
  _middleInitial,
  _lastName,
  _sex,
  _civilStatus,
  _religion,
  _householdNo,
  _streetName,
  _precintNumber,
  _birthday,
  _birthplace,
  _profession,
  _nationality,
  _residentType,
  _blacklisted,
  _details
}) {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const [firstName, setFirstName] = useState(_firstName)
  const [middleInitial, setMiddleInitial] = useState(_middleInitial)
  const [lastName, setLastName] = useState(_lastName)
  const [sex, setSex] = useState(_sex)
  const [civilStatus, setCivilStatus] = useState(_civilStatus)
  const [religion, setReligion] = useState(_religion)
  const [householdNo, setHouseholdNo] = useState(_householdNo)
  const [streetName, setStreetName] = useState(_streetName)
  const [precintNumber, setPrecintNumber] = useState(_precintNumber)
  const [birthday, setBirthday] = useState(_birthday)
  const [nationality, setNationality] = useState(_nationality)
  const [profession, setProfession] = useState(_profession)
  const [birthPlace, setBirthPlace] = useState(_birthplace)
  const [residentType, setResidentType] = useState(_residentType)
  const [blacklisted, setBlacklisted] = useState(_blacklisted)
  const [details, setDetails] = useState(_details)
  const id = _id

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
    setBirthPlace('')
    setBlacklisted(false)
    setDetails('')
    setResidentType('Non-Voter')
  }

  async function updateProfile() {
    const profile = JSON.stringify({
      name: {
        firstName,
        middleInitial,
        lastName,
      },
      sex,
      civilStatus,
      religion,
      address: {
        householdNo,
        streetName,
      },
      precintNumber,
      birthday,
      nationality,
      profession,
      birthPlace,
      blacklist: {
        blacklisted,
        details,
      },
    })
    await fetch(`http://localhost:8080/resident/${id}`, {
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



  async function deleteData(url, id) {
    await fetch(`http://localhost:8080/${url}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
  }

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
                  <Heading pt={2} size='sm'>Address</Heading>
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
                <Heading size='sm'>Personal Informations</Heading>
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
                  <Input placeholder="Brith Place" value={birthPlace} onChange={(e) => setBirthPlace(e.target.value)} />
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
            <Button mx={2} colorScheme='blue' onClick={updateProfile}>Update Profile</Button> {/* when clicked, turn into save button */}
          </ModalFooter>
          {/* <ViewResident
            _id={_id}
            _firstName={_firstName}
            _middleInitial={_middleInitial}
            _lastName={_lastName}
            _sex={_sex}
            _civilStatus={_civilStatus}
            _religion={_religion}
            _householdNo={_householdNo}
            _streetName={_streetName}
            _precintNumber={_precintNumber}
            _birthday={_birthday}
            _birthplace={_birthplace}
            _profession={_profession}
            _nationality={_nationality}
            _residentType={_residentType}
            _blacklisted={_blacklisted}
            _details={_details}
          /> */}
        </ModalContent>

      </Modal>
    </Menu>
  )
}