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
        <Badge variant='solid' colorScheme='green'>Admin</Badge>
        <Badge variant='solid' colorScheme='blue'>Brgy Executive</Badge>
      </Stack>
      <Button colorScheme='blue' size='sm'>Edit User</Button>
    </Box>
  )
}