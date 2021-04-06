import {
  Heading,
  Text,
  Badge,
  Box,
  Flex
} from '@chakra-ui/react'

export default function AnnouncementCard() {
  return (
    <Box bgColor='gray.200' p={3} m={2} mt={5} borderRadius='md' w='50%'>
      <Heading size='md' pb={2}>Sta. Maria Fiesta</Heading>
      <Flex>
        <Badge colorScheme='blackAlpha'>March 12, 2021</Badge>
        <Badge colorScheme='blue'>Event</Badge>
      </Flex>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, architecto!</Text>
    </Box>
  )
}