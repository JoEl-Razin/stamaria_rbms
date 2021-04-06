import Head from 'next/head'
import * as React from 'react'

import { Center, Spinner } from '@chakra-ui/react'

export default function PageLoading({ colorString }) {

  return (
    <Center h='100vh' w='100vw' bgColor='gray.50' pos='absolute'>
      <Spinner color='green.500' size='md' thickness='4px'/>
    </Center>
  )
}