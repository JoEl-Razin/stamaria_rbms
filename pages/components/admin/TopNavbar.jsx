import { Heading, Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem, Button, Avatar, Divider } from '@chakra-ui/react'

export default function TopNavbar({username}) {
  return (
    <Flex pos='sticky' top='0px' zIndex='1'>
      <Box d='flex' alignItems='center'>
        <Heading size='md'>
          Residence and Business Management System
      </Heading>
      </Box>
      <Spacer />

      <Box>
        <Menu>
          <MenuButton as={Button} alignItems='center'>
            <Avatar size='xs' name={username} src='brokenlink' mr={1} />
            {username}
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  )
}