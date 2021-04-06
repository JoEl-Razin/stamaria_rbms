
import { Heading, Box, Divider, Flex } from '@chakra-ui/react'

import DashboadTotalCard from '../components/DashboadTotalCard'

export default function DashboardContent() {
  return(
    <Box>
      <Heading size='lg' mb={2}>Dashboard</Heading>
      <Divider my={3}/>
      <Heading size='md' >Total in the barangay</Heading>
      <Flex>
        <DashboadTotalCard heading='Residents' totalcontent='0000'/>
        <DashboadTotalCard heading='Household' totalcontent='0000'/>
        <DashboadTotalCard heading='Business Establishments' totalcontent='0000'/>
      </Flex>
    </Box>
  )
}