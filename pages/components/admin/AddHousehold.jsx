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

      <FormLabel>Household Number</FormLabel>
      <Input placeholder="Household Number" />

      <FormLabel>Street Name</FormLabel>
      <Input placeholder="Street Name" />

      <FormLabel>Household Type</FormLabel>
      <RadioGroup>
        <HStack spacing='24px'>
          <Radio value='voter'>Private</Radio>
          <Radio value='non-voter'>Rental</Radio>
        </HStack>
      </RadioGroup>


      <FormLabel>Household Head</FormLabel>
      <Input placeholder="Civil Status" />

    </FormControl>
  )
}