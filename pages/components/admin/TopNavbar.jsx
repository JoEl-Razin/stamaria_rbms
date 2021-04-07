import { Heading, Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem, Button, Avatar, Divider } from '@chakra-ui/react'

export default function TopNavbar() {
  return (
    <Flex>
      <Box d='flex' alignItems='center'>
        <Heading size='md'>
          Residence and Business Management System
      </Heading>
      </Box>
      <Spacer />

      <Box>
        <Menu>
          <MenuButton as={Button} alignItems='center'>
            <Avatar size='xs' name='User name' src='brokenlink' mr={1} />
            Username
          </MenuButton>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  )
}