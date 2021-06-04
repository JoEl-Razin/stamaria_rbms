import { useEffect, useState } from 'react'

import { Heading, Box, Divider, Flex } from '@chakra-ui/react'

import DashboadTotalCard from '../../components/admin/DashboadTotalCard'

export default function DashboardContent() {

  const [residents, setResidents] = useState([])
  const [household, sethousehold] = useState([])
  const [business, setbusiness] = useState([])


  useEffect(() => {
    fetch('http://40.74.72.57/api/resident', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(
        (result) => {
          setResidents(result)
        })

    fetch('http://40.74.72.57/api/household', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(
        (result) => {
          sethousehold(result)
        })

    fetch('http://40.74.72.57/api/business', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(
        (result) => {
          setbusiness(result)
        })

  }, [])

  return (
    <Box>
      <Heading size='lg' mb={2}>Dashboard</Heading>
      <Divider my={3} />
      <Heading size='md' >Total in the barangay</Heading>
      <Flex>
        <DashboadTotalCard heading='Residents' totalcontent={residents.length} />
        <DashboadTotalCard heading='Household' totalcontent={household.length} />
        <DashboadTotalCard heading='Business Establishments' totalcontent={business.length} />
      </Flex>
    </Box>
  )
}