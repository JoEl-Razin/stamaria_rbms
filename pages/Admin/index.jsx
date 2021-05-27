import { Heading, Center, Flex, Input, InputGroup, InputRightElement, Button, Box, Text } from '@chakra-ui/react'

import Head from 'next/head'
import * as React from 'react'
import Image from 'next/image'
import { Router, useRouter } from 'next/router'

import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { FiLogIn } from 'react-icons/fi'

export default function AdminLogin() {

  const router = useRouter()

  const [show, setShow] = React.useState(false)
  const [progress, setProgress] = React.useState(false)
  const passwordShow = () => setShow(!show)

  const [password, setPassword] = React.useState("")
  const [username, setUsername] = React.useState("")
  const [invalidMessage, setInvalidMessage] = React.useState("")

  async function loginReq() {
    setProgress(!progress)

    const credentials = JSON.stringify({ username, password })

    const response = await fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: credentials,
    }).then((res) => res.json());

    localStorage.setItem('token', response.token)
    localStorage.setItem('username', username)

    if(response.token){
      router.push('/Admin/Dashboard')
    }
    else {
      setUsername('')
      setPassword('')
      setInvalidMessage("Invalid Credentials")
      setProgress(false)
    }
  }

  return (
    <div>
      <Head>
        <title>Admin Login</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Flex bg='gray.900' w='100vw' h='100vh' align='center' justify='center'> {/* Background */}
        <Flex bg='gray.50' w='900px' h='550px' borderRadius='md'> {/* Login Form Container*/}
          <Center bg='gray.300' w='300px' borderRadius='md'> {/* Login Form */}
            <Box>
              <Center m='24px'>
                <Heading>Login</Heading>
              </Center>
              
              <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type='email'
                placeholder='Username'
                mb='10px'
                bg='gray.50'
              />

              {/* Password */}
              <InputGroup size="md">
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  pr="2.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Password"
                  mb='10px'
                  bg='gray.50'
                />
                <InputRightElement>
                  <Box
                    as="button"
                    h="24px"
                    w='24px'
                    transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                    onClick={passwordShow}
                  >
                    {show ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                  </Box>
                </InputRightElement>
              </InputGroup>
              <Text color='red' size='md'>{invalidMessage}</Text>
              <Center>
                <Button
                  onClick={loginReq}
                  isLoading={progress}
                  colorScheme='green'
                  leftIcon={<FiLogIn />}
                >
                  Login
                   </Button>
              </Center>


            </Box>
          </Center>
          <Box w='600px' h='100%'>
            <Center w='100%' h='100%'>
              <Box>
                <Center>
                  <Image src='/image/stamaria_logo.png' alt='Sta. Maria Logo' width={250} height={250} />
                </Center>
                <Center>
                  <Heading>Barangay Sta. Maria</Heading>
                </Center>
                <Center>
                  <Text>Residents and Business Establishments Management System</Text>
                </Center>
              </Box>
            </Center>
          </Box>
        </Flex>
      </Flex>
    </div>

  )
}