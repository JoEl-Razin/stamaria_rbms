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
} from '@chakra-ui/react'

import { HiDotsHorizontal } from 'react-icons/hi'

import ViewResident from './ViewResidents'

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

  async function deleteData(url, id) {
    await fetch(`http://localhost:8080/${url}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
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
          <ViewResident
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
          />
        </ModalContent>

      </Modal>
    </Menu>
  )
}