import {
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'

export default function AddProfile() {
  return (
    <FormControl id="first-name" isRequired>
      <FormLabel>First name</FormLabel>
      <Input placeholder="First name" />
      <FormLabel>Middle name</FormLabel>
      <Input placeholder="Middle name" />
      <FormLabel>Last name</FormLabel>
      <Input placeholder="Last name" />
      <FormLabel>Address</FormLabel>
      <Input placeholder="Address" />
    </FormControl>
  )
}
