
import { Box, Heading } from '@chakra-ui/react'

export default function DashboardTotalCard( {heading, totalcontent} ) {
  return (
    <Box bgColor='gray.200' borderRadius='md' p={3} m={2} w='100%'>
      <Heading size='sm' mb='2'>
        {heading}
      </Heading>
      <Heading size='xl'>
        {totalcontent}
      </Heading>
    </Box>
  )
}