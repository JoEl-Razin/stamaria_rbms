import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp


// Modules Installed:
// Chakra-UI, Emotion, framer-motion
// React-Icons - https://react-icons.github.io/react-icons
//