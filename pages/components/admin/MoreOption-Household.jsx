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

import ViewHousehold from './ViewHousehold'

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
          <ViewHousehold
            _id={_id}
            _householdNo={_householdNo}
            _streetName={_streetName}
            _householdType={_householdType}
            _householdHead={_householdHead}
            _householdMember={_householdMember}
          />
        </ModalContent>

      </Modal>
    </Menu>
  )
}