"use client";
import React from "react";
import {
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  OrderedList,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const FAQSection = ({ title, questions }) => (
  <Box mb={8}>
    <Heading as="h3" size="lg" mb={4} color={"#BE62C6"}>
      {title}
    </Heading>
    <Accordion bg={"white"} overflow={"hidden"} bgColor={"#F8F6FB"}>
      {questions?.map((q, index) => (
        <AccordionItem
          key={index}
          bg={"white"}
          mb={30}
          borderRadius={"20px"}
          borderColor={"#F8F6FB"}
          borderBottom={"1px"}
          borderBottomColor={"#BE62C6"}
          paddingY={3}
        >
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton
                  sx={{ _hover: { backgroundColor: "transparent" } }}
                >
                  <Box
                    flex="1"
                    textAlign="left"
                    color={isExpanded ? "#BE62C6" : "#666"}
                  >
                    {q.question}
                  </Box>
                  {!isExpanded && <AddIcon fontSize="12px" color={"#BE62C6"} />}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text fontSize={"1rem"}>{q.answer}</Text>
                {q?.lists?.map((l, i) => (
                  <Box key={i} mb={2}>
                    {l?.type === "ordered" && (
                      <>
                        <Text fontWeight="bold" my={"1rem"}>
                          {l?.title}
                        </Text>
                        <OrderedList columns={2} gap={4}>
                          {l?.items?.map((item, index) => (
                            <ListItem key={index} fontSize={"1rem"}>
                              {item}
                            </ListItem>
                          ))}
                        </OrderedList>
                      </>
                    )}
                    {l?.type === "unordered" && (
                      <>
                        <Text fontWeight="bold" my={"1rem"}>
                          {l?.title}
                        </Text>{" "}
                        <UnorderedList columns={2} gap={4}>
                          {l?.items?.map((item, index) => (
                            <ListItem key={index} fontSize={"1rem"}>
                              {item}
                            </ListItem>
                          ))}
                        </UnorderedList>
                      </>
                    )}
                  </Box>
                ))}
                {q?.note && (
                  <Text fontSize={"1rem"} mt={"2rem"}>
                    {q.note}
                  </Text>
                )}
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  </Box>
);

export default FAQSection;
