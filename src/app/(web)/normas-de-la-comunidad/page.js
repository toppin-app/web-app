"use client";
import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";
import { listItems } from "@/app/(web)/normas-de-la-comunidad/listItems";

const CommunityGuidelines = () => {
  return (
    <Box id="main-content" backgroundColor={"#F8F6FB"}>
      <Container maxW="container.xl" py={8}>
        <Box id="content-area">
          <Heading as="h1" size="xl" mb={6} color={"#BE62C6"}>
            <FormattedMessage id="communityStandards.header" />
          </Heading>
          <Box>
            <Text mb={4}>
              <FormattedMessage id="communityStandards.paragraph1" />
            </Text>

            <Text mb={4}>
              <FormattedMessage id="communityStandards.paragraph2" />
            </Text>

            <Text mb={4}>
              <FormattedMessage id="communityStandards.paragraph3" />
            </Text>

            <UnorderedList mb={4} pl={4} spacing={2}>
              {listItems.map((itemId) => (
                <ListItem key={itemId}>
                  <FormattedMessage id={itemId} />
                </ListItem>
              ))}
            </UnorderedList>

            <Text mb={4}>
              <FormattedMessage id="communityStandards.conclusion" />
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CommunityGuidelines;
