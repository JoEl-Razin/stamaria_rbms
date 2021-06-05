import { useState, useEffect } from 'react'
import {
  Heading,
  Box,
  Center,
  Flex,
  Divider,
  Spacer,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react'

export default function PageEdit() {
  const [about, setAbout] = useState('')

  async function updateAbout(id) {
    const about = JSON.stringify({
      about,
    })
    await fetch(`http://40.74.72.57/api/home-about`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: about,
    })

    alert('Updated Successfully!')
  }

  useEffect(() => {
    fetch('http://40.74.72.57/api/home-about', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(res => res.json())
    .then((result) => {
      setAbout(result)
    })
  }, [])

  return (
    <Box>
      <Flex>
        <Heading size='lg' md={2}>Edit Page</Heading>
        <Spacer />
      </Flex>

      <Divider my={3} />

      {/* <Box>
        <Heading size='sm'>About Page</Heading>

        <FormControl mt={2} mr={5} flex='1'>
          <Textarea value={about.about} onChange={(e) => setAbout(e.target.value)} />
        </FormControl>
        <Button colorScheme='green' size='sm' my={5} onClick={() => updateAbout(about._id)}>Update About</Button>
      </Box>
 */}
      <Divider my={3} />

      <Box>
        <Heading size='sm'>Announcements</Heading>
        <Table variant='striped' colorScheme='gray' size='sm'>
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Date</Th>
              <Th>Details</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>

          </Tbody>
        </Table>

      </Box>
    </Box>
  )
}

/* Barangay Santa Maria is one of the busies barangay within the city. The barangay has different kinds of businesses, offices and religious places, and the barangay can be located within the center of urban area of the Zamboanga City */