
import { Flex, Box, Heading, Tab } from '@chakra-ui/react'

export default function Sidebar({ icon, name }) {
  return (
    <Flex w='100%' alignItems='center'>
      <Box px={2}>
        {icon}
      </Box>
      <Heading size='xs'>
        {name}
      </Heading>
    </Flex>
  )
}


/*
<Tab color='gray.200' px={1} py={2} my={2} borderRadius='md'
      _hover={{
        bgColor: 'gray.700',
      }}
      _active={{
        bgColor: 'gray.700',
        transform: 'scale(0.98)',
      }}
      _selected={{
        bgColor: 'gray.700'
      }}
    >
      <Flex w='100%' alignItems='center'>
        <Box px={2}>
          {icon}
        </Box>
        <Heading size='xs'>
          {name}
        </Heading>
      </Flex>
    </Tab>
*/