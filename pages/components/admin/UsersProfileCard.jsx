import {
  Box,
  Avatar,
  Spacer,
  Flex,
  Heading,
  Text,
  Badge,
  Stack,
  Button,
} from '@chakra-ui/react'

export default function UsersProfileCard({ user, pos, roles }) {
  function admin() {
    return <Badge variant='solid' colorScheme='green'>Admin</Badge>
  }
  function exec() {
    return <Badge variant='solid' colorScheme='blue'>Brgy Executive</Badge>
  }
  function emp() {
    return <Badge variant='solid' colorScheme='cyan'>Brgy Employee</Badge>
  } 

  const assignRoles = (sysRoles) => {  
    if (sysRoles[0] == 0) {
      console.log(sysRoles[0])
      admin()
    }
    console.log('2')
    if (sysRoles[1] == 1) {
      exec()
    }
    if (sysRoles[2] == 2) {
      emp()
    }

  }

  return (
    <Box bgColor='gray.200' borderRadius='md' p={5} w={300}>
      <Flex my={2}>
        <Box>
          <Heading size='sm'>{user}</Heading>
          <Text size='xs'>{pos}</Text>
        </Box>
        <Spacer />
        <Avatar name={user} src='' />
      </Flex>
      <Heading size='xs'>Roles</Heading>
      <Stack spacing={1} direction='row' my={2}>
        {
          assignRoles(roles)
        }
      </Stack>
      <Button colorScheme='blue' size='sm'>Edit User</Button>
    </Box>
  )
}