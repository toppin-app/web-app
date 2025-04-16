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
import Link from "next/link";
import listKeys from "@/app/(web)/politica-de-privacidad/listKeys";

const {
  recipientsListItems,
  dataTypesListItems,
  purposesListItems,
  legalBasisListItems,
} = listKeys;

const PrivacyPolicy = () => {
  return (
    <Box id="main-content" backgroundColor={"#F8F6FB"}>
      <Container maxW="container.xl" py={8}>
        <Box id="content-area">
          <Heading as="h1" size="3xl" mb={6} color={"#BE62C6"}>
            <FormattedMessage id="privacyPolicy.header" />
          </Heading>
          <Text mb={4}>
            <FormattedMessage id="privacyPolicy.intro" />
          </Text>

          <Heading as="h2" size="lg" mt={6} mb={4} color={"#BE62C6"}>
            <FormattedMessage id="privacyPolicy.contactTitle" />
          </Heading>
          <Text mb={4}>
            <FormattedMessage id="privacyPolicy.contactText" />
          </Text>
          <Text mb={4}>
            <FormattedMessage id="privacyPolicy.emailContact" />
          </Text>

          <Heading as="h2" size="lg" mt={6} mb={4} color={"#BE62C6"}>
            <FormattedMessage id="privacyPolicy.purposesTitle" />
          </Heading>
          <Text mb={4}>
            <FormattedMessage id="privacyPolicy.purposesText" />
          </Text>
          <UnorderedList mb={4} pl={4}>
            {purposesListItems.map((itemId) => (
              <ListItem key={itemId}>
                <FormattedMessage id={itemId} />
              </ListItem>
            ))}
          </UnorderedList>

          <Heading as="h2" size="lg" mt={6} mb={4} color={"#BE62C6"}>
            <FormattedMessage id="privacyPolicy.legalBasisTitle" />
          </Heading>
          <UnorderedList mb={4} pl={4}>
            {legalBasisListItems.map((itemId) => (
              <ListItem key={itemId}>
                <FormattedMessage id={itemId} />
              </ListItem>
            ))}
          </UnorderedList>

          <Heading as="h2" size="lg" mt={6} mb={4} color={"#BE62C6"}>
            <FormattedMessage id="privacyPolicy.retentionTitle" />
          </Heading>
          <Text mb={4}>
            <FormattedMessage id="privacyPolicy.retentionText" />
          </Text>
          <Text mb={4}>
            <FormattedMessage id="privacyPolicy.retentionText2" />
          </Text>

          <Heading as="h2" size="lg" mt={6} mb={4} color={"#BE62C6"}>
            <FormattedMessage id="privacyPolicy.automatedDecisionsTitle" />
          </Heading>
          <Text mb={4}>
            <FormattedMessage id="privacyPolicy.automatedDecisionsText" />
          </Text>

          <Heading as="h2" size="lg" mt={6} mb={4} color={"#BE62C6"}>
            <FormattedMessage id="privacyPolicy.recipientsTitle" />
          </Heading>
          <Text mb={4}>
            <FormattedMessage id="privacyPolicy.recipientsText1" />
          </Text>
          <UnorderedList mb={4} pl={4}>
            {recipientsListItems.map((itemId) => (
              <ListItem key={itemId}>
                <FormattedMessage id={itemId} />
              </ListItem>
            ))}
          </UnorderedList>
          <Text mb={4}>
            <FormattedMessage id="privacyPolicy.recipientsText2" />
          </Text>

          <Heading as="h2" size="lg" mt={6} mb={4} color={"#BE62C6"}>
            <FormattedMessage id="privacyPolicy.internationalTransfersTitle" />
          </Heading>
          <Text mb={4}>
            <FormattedMessage id="privacyPolicy.internationalTransfersText" />
          </Text>

          <Heading as="h2" size="lg" mt={6} mb={4} color={"#BE62C6"}>
            <FormattedMessage id="privacyPolicy.rightsTitle" />
          </Heading>
          <Text mb={4}>
            <FormattedMessage id="privacyPolicy.rightsText1" />
          </Text>
          <Text mb={4}>
            <FormattedMessage id="privacyPolicy.rightsText2" />
          </Text>
          <Text mb={4}>
            <FormattedMessage id="privacyPolicy.rightsText3" />{" "}
            <Link
              href="https://www.aepd.es/"
              target="_blank"
              style={{ color: "#BE62C6" }}
            >
              www.agpd.es.
            </Link>
          </Text>
          <Text mb={4}>
            <FormattedMessage id="privacyPolicy.rightsText4" />
          </Text>

          <Heading as="h2" size="lg" mt={6} mb={4} color={"#BE62C6"}>
            <FormattedMessage id="privacyPolicy.accuracyTitle" />
          </Heading>
          <Text mb={4}>
            <FormattedMessage id="privacyPolicy.accuracyText1" />
          </Text>
          <Text mb={4}>
            <FormattedMessage id="privacyPolicy.accuracyText2" />
          </Text>

          <Heading as="h2" size="lg" mt={6} mb={4} color={"#BE62C6"}>
            <FormattedMessage id="privacyPolicy.socialNetworksTitle" />
          </Heading>
          <Text mb={4}>
            <FormattedMessage id="privacyPolicy.socialNetworksText1" />
          </Text>
          <Text mb={4}>
            <FormattedMessage id="privacyPolicy.socialNetworksText2" />
          </Text>
          <Text mb={4}>
            <FormattedMessage id="privacyPolicy.socialNetworksText3" />
          </Text>
          <Text mb={4}>
            <FormattedMessage id="privacyPolicy.socialNetworksText4" />
          </Text>

          <Heading as="h2" size="lg" mt={6} mb={4} color={"#BE62C6"}>
            <FormattedMessage id="privacyPolicy.dataTypesTitle" />
          </Heading>
          <Text mb={4}>
            <FormattedMessage id="privacyPolicy.dataTypesText1" />
          </Text>
          <UnorderedList mb={4} pl={4}>
            {dataTypesListItems.map((itemId) => (
              <ListItem key={itemId}>
                <FormattedMessage id={itemId} />
              </ListItem>
            ))}
          </UnorderedList>
          <Text mb={4}>
            <FormattedMessage id="privacyPolicy.dataTypesText2" />
          </Text>

          <Heading as="h2" size="lg" mt={6} mb={4} color={"#BE62C6"}>
            <FormattedMessage id="privacyPolicy.profileVerificationTitle" />
          </Heading>
          <Text mb={4}>
            <FormattedMessage id="privacyPolicy.profileVerificationText" />
          </Text>

          <Heading as="h2" size="lg" mt={6} mb={4} color={"#BE62C6"}>
            <FormattedMessage id="privacyPolicy.privacitySettiongsTitle" />
          </Heading>
          <Text mb={4}>
            <FormattedMessage id="privacyPolicy.privacitySettiongsText" />
          </Text>

          <Heading as="h2" size="lg" mt={6} mb={4} color={"#BE62C6"}>
            <FormattedMessage id="privacyPolicy.updatesTitle" />
          </Heading>
          <Text mb={4}>
            <FormattedMessage id="privacyPolicy.updatesText1" />
          </Text>
          <Text mb={4}>
            <FormattedMessage id="privacyPolicy.updatesText2" />
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
