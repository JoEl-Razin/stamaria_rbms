import { useState, useEffect } from 'react'
import {
  Heading,
  Box,
  Flex,
  Spacer,
  Divider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
} from '@chakra-ui/react'

export default function RequestedCertificate() {

  const [certificate, setCertificate] = useState([])

  /* useEffect(() => {
    fetch('http://40.74.72.57/api/req-cert', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(res => res.json())
    .then((result) => {
      setCertificate(result)
    })
  }, []) */

  return (
    <Box>
      <Flex>
        <Heading size='lg' md={2}>Requested Certificates</Heading>
        <Spacer />
      </Flex>

      <Divider my={3} />

      <Table variant='striped' colorScheme='gray' size='sm'>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Address</Th>
            <Th>Gender</Th>
            <Th>Certificate Type</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            /* certificate.map((row) => {
              return (
                <Tr key={row._id}>
                  <Td>{row.name}</Td>
                  <Td>{row.address}</Td>
                  <Td>{row.sex}</Td>
                  <Td>{row.type}</Td>
                  <Td><Button>Confirm</Button></Td>
                </Tr>
              )
            }) */
          }
        </Tbody>
      </Table>

    </Box>

  )
}