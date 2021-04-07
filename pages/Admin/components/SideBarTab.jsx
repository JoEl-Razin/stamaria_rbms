
import { Flex, Box, Heading, Tab } from '@chakra-ui/react'


export default function SideBarTab({ icon, name }) {
  return (
    <Tab
      color='gray.200'
      px={1}
      py={2}
      my={2}
      borderRadius='md'
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

  )
}

{/* <Tab
      color='gray.200'
      w='100%'
      px={1}
      py={2}
      my={2}
      borderRadius='md'
      _selected={{
        bgColor: 'gray.700',
      }}
      _hover={{
        bgColor: 'gray.900',
      }}
      _active={{
        bgColor: 'gray.700',
        transform: 'scale(0.98)',
      }}
    >

      <Box px={1.5}>
        {icon}
      </Box>
      <Heading size='xs'>
        {name}
      </Heading>

    </Tab> */}

{/* <Flex 
      as='button'
      color='gray.200'
      w='100%'
      px={1}
      py={2}
      my={2}
      borderRadius='md'
      alignItems='center'
      _hover={{
        bgColor: 'gray.700',
      }}
      _active={{
        bgColor: 'gray.700',
        transform: 'scale(0.98)',
      }}
    >
      <Box px={2}>
        {icon}
      </Box>
      <Heading size='xs'>
        {name}
      </Heading>
    </Flex> */}