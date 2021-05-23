import {
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  HStack,
  Radio
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


      <FormLabel>Civil Status</FormLabel>
      <Input placeholder="Civil Status" />
      
      <FormLabel>Sex</FormLabel>
      <RadioGroup>
        <HStack spacing='24px'>
          <Radio value='female'>Female</Radio>
          <Radio value='male'>Male</Radio>
        </HStack>
      </RadioGroup>

      <FormLabel>House Number</FormLabel>
      <Input placeholder="House Number" />

      <FormLabel>Street</FormLabel>
      <Input placeholder="Street" />

      <FormLabel>Precint Number</FormLabel>
      <Input placeholder="Precint Number" />

      <FormLabel>Civil Status</FormLabel>
      <Input placeholder="Civil Status" />

      <FormLabel>Nationality</FormLabel>
      <Input placeholder="Nationality" />

      <FormLabel>Profession</FormLabel>
      <Input placeholder="Profession" />

      <FormLabel>Birth place</FormLabel>
      <Input placeholder="Brith Place" />

      <FormLabel>Resident Type</FormLabel>
      <RadioGroup>
        <HStack spacing='24px'>
          <Radio value='voter'>Voter</Radio>
          <Radio value='non-voter'>Non-Voter</Radio>
        </HStack>
      </RadioGroup>


    </FormControl>
  )
}