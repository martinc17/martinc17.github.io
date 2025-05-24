import {
  Box,
  Heading,
  HStack,
  Icon,
  VStack,
} from "@chakra-ui/react";
import {
  DiMsqlServer,
  DiPython,
  DiReact
} from "react-icons/di";
import { Tooltip } from "./ui/tooltip";

export function TopSection() {

  return (
    <Box px={6} py={3}>
      <HStack justifyContent={"space-between"} width={"100%"}>
        <VStack>
          <Heading fontWeight={"normal"} size={'xl'}>
            Martin Clarke
          </Heading>
          <Heading fontWeight={"medium"} size={'lg'}>
            Lead Data Analyst
          </Heading>
        </VStack>
        <VStack>
          <Heading>Technologies</Heading>
          <HStack>
            <Tooltip content="Python">
              <Icon size={'xl'}><DiPython /></Icon>
            </Tooltip>
            <Tooltip content="SQL Server">
              <Icon size={'xl'}><DiMsqlServer /></Icon>
            </Tooltip>
            <Tooltip content="React">
              <Icon size={'xl'}><DiReact /></Icon>
            </Tooltip>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  )
}