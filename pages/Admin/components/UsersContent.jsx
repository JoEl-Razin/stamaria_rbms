
import { Heading, Box, Divider, Flex } from '@chakra-ui/react'

import UsersProfileCard from '../../components/admin/UsersProfileCard'

export default function CertificateContent() {
  return(
    <Box>
      <Heading size='lg' mb={2}>System Users</Heading>
      <Divider my={3}/>
      <Flex>
        <UsersProfileCard user='Los Eli Angeles' pos='Brgy. Chairman' roles={[0,1]}/>
      </Flex>
    </Box>
  )
}