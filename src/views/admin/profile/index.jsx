/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import React from "react";

import tableDataComplexPrediction from "views/admin/default/variables/tableDataComplex.json";

import ComplexTable from "views/admin/default/components/ComplexTable";

// Chakra imports
import {
  NumberInput,
  NumberInputField,
  Box,
  FormControl,
  FormLabel,
  Button,
  Checkbox,
  CheckboxGroup,
  Stack,
  Select,
  Container
} from "@chakra-ui/react";
import { columnsDataComplexPrediction } from "views/admin/default/variables/columnsData";

// Custom components

export default function Overview() {
  const format = (val) => `$` + val;

  const parse = (val) => val.replace(/^\$/, "");

  const [value, setValue] = React.useState("1.53");

  return (
    <Box>
    <Container  >
      <Box height={100} />
      <FormControl id="email">
        <FormLabel>Investment Amount</FormLabel>
        <NumberInput
          onChange={(valueString) => setValue(parse(valueString))}
          value={value < 0 ? format(0) : format(value)}
        >
          <NumberInputField />
        </NumberInput>
        <Box mt={50}>
          <FormLabel>Genres</FormLabel>
          <CheckboxGroup
            colorScheme="blue"
            defaultValue={[
              "Puzzle",
              "Sports",
              "Strategy",
              "Action",
              "RPG",
              "Sandbox",
            ]}
          >
            <Stack spacing={[1, 10]} direction={["column", "row"]}>
              <Checkbox value="Puzzle">
                Puzzle
              </Checkbox>
              <Checkbox ml={20} value="Sports">
                Sports
              </Checkbox>
              <Checkbox ml={20} value="Strategy">
                Strategy
              </Checkbox>
              <Checkbox ml={20} value="Action">
                Action
              </Checkbox>
              <Checkbox ml={20} value="RPG">
                RPG
              </Checkbox>
              <Checkbox ml={20} value="Sandbox">
                Sandbox
              </Checkbox>
            </Stack>
          </CheckboxGroup>
        </Box>
        <Box mt={50}>
          <FormLabel>Sub Genres</FormLabel>
          <CheckboxGroup colorScheme="blue" defaultValue={[]}>
            <Stack spacing={[1, 10]} direction={["column", "row"]}>
              <Checkbox  value="Puzzle">
                Puzzle
              </Checkbox>
              <Checkbox ml={20} value="Sports">
                Sports
              </Checkbox>
              <Checkbox ml={20} value="Strategy">
                Strategy
              </Checkbox>
              <Checkbox ml={20} value="Action">
                Action
              </Checkbox>
              <Checkbox ml={20} value="RPG">
                RPG
              </Checkbox>
              <Checkbox ml={20} value="Sandbox">
                Sandbox
              </Checkbox>
            </Stack>
          </CheckboxGroup>
          <Box mt={50}>
            <FormLabel>Invesment Term Long</FormLabel>
            <Select placeholder="Select option">
              <option value="option1">Short</option>
              <option value="option2">Long</option>
              <option value="option3">So Long</option>
            </Select>
          </Box>
        </Box>
        <Button mb={5} mt={5} colorScheme="blue" variant="solid">
            Make Prediction
        </Button>
      </FormControl>
      
    </Container>
    <ComplexTable
    mt={50}
    columnsData={columnsDataComplexPrediction}
    tableData={tableDataComplexPrediction}
  />
    </Box>
  );
}
