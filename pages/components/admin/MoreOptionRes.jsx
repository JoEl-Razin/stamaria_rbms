import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react'

import { HiDotsHorizontal } from 'react-icons/hi'

export default function MoreOptionRes( {text} ) {
  return(
    <Menu>
      <MenuButton 
        as={IconButton}
        aria-label='Options'
        icon={<HiDotsHorizontal/>}
        size='xs'
        variant='outline'
      />
      <MenuList>
        <MenuItem>
          View {text}
        </MenuItem>
        <MenuItem>
          Edit {text}
        </MenuItem>
        <MenuItem>
          Delete {text}
        </MenuItem>
      </MenuList>
    </Menu>
  )
}