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

import ViewBusiness from './ViewBusiness'

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
          <ViewBusiness
            _id={_id}
            _businessName={_businessName}
            _businessAddress={_businessAddress}
            _businessType={_businessType}
            _businessPermit={_businessPermit}
            _owner={_owner}
            _contactNo={_contactNo}
            _address={_address}
          />
        </ModalContent>

      </Modal>
    </Menu>
  )
}