"use client";
import {
  Box,
  Heading,
  Text,
  Container,
  UnorderedList,
  ListItem,
  OrderedList,
} from "@chakra-ui/react";
import Link from "next/link";
import CompanyInfo from "@/components/CompanyInfo";
import CookieConsent from "@/components/CookieConsent";
import CookieConsentManager from "@/components/CookieConsentManager";
import { FormattedMessage } from "react-intl";
import listKeys from "@/app/(web)/politica-de-cookies-ue/listKeys";

const { listItems } = listKeys;

const CookiePolicy = () => (
  <Box id="main-content" backgroundColor={"#F8F6FB"}>
    <Container maxW="container.xl" py={8}>
      <Box as="article">
        <Heading as="h1" size="3xl" mb={6} color={"#BE62C6"}>
          <FormattedMessage id="cookiePolicy.header" />
        </Heading>
        <Text as="i">
          <FormattedMessage id="cookiePolicy.description" />
        </Text>
        <OrderedList fontWeight={"bold"} fontSize={"1.5rem"} mt={10}>
          <ListItem color={"#BE62C6"} mt={"2rem"}>
            <FormattedMessage id="cookiePolicy.item1.title" />
          </ListItem>
          <Text>
            <FormattedMessage id="cookiePolicy.item1.text1" />{" "}
            <Link href="/" target="_blank" style={{ color: "#2EA3F2" }}>
              https://toppin.es
            </Link>{" "}
            <FormattedMessage id="cookiePolicy.item1.text2" />
          </Text>
          <ListItem color={"#BE62C6"} mt={"2rem"}>
            <FormattedMessage id="cookiePolicy.item2.title" />
          </ListItem>
          <Text>
            <FormattedMessage id="cookiePolicy.item2.text" />
          </Text>
          <ListItem color={"#BE62C6"} mt={"2rem"}>
            <FormattedMessage id="cookiePolicy.item3.title" />
          </ListItem>
          <Text>
            <FormattedMessage id="cookiePolicy.item3.text" />
          </Text>
          <ListItem color={"#BE62C6"} mt={"2rem"}>
            <FormattedMessage id="cookiePolicy.item4.title" />
          </ListItem>
          <Text>
            <FormattedMessage id="cookiePolicy.item4.text" />
          </Text>
          <ListItem color={"#BE62C6"} mt={"2rem"}>
            <FormattedMessage id="cookiePolicy.item5.title" />
          </ListItem>
          <Text>
            <FormattedMessage id="cookiePolicy.item5.subtitle1" />
          </Text>
          <Text>
            <FormattedMessage id="cookiePolicy.item5.text1" />
          </Text>
          <Text>
            <FormattedMessage id="cookiePolicy.item5.subtitle2" />
          </Text>
          <Text>
            <FormattedMessage id="cookiePolicy.item5.text2" />
          </Text>
          <Text>
            <FormattedMessage id="cookiePolicy.item5.subtitle3" />
          </Text>
          <Text>
            <FormattedMessage id="cookiePolicy.item5.text3" />
          </Text>
          <ListItem color={"#BE62C6"} mt={"2rem"}>
            <FormattedMessage id="cookiePolicy.item6.title" />
          </ListItem>
          <CookieConsent />
          <ListItem color={"#BE62C6"} mt={"2rem"}>
            <FormattedMessage id="cookiePolicy.item7.title" />
          </ListItem>
          <Text>
            <FormattedMessage id="cookiePolicy.item7.text" />
          </Text>
          <Text mt={"2rem"}>
            <FormattedMessage id="cookiePolicy.item7.subtitle" />
          </Text>
          <CookieConsentManager />
          <ListItem color={"#BE62C6"} mt={"2rem"}>
            <FormattedMessage id="cookiePolicy.item8.title" />
          </ListItem>
          <Text>
            <FormattedMessage id="cookiePolicy.item8.text1" />
          </Text>
          <Text mt={"2rem"}>
            <FormattedMessage id="cookiePolicy.item8.text2" />
          </Text>
          <ListItem color={"#BE62C6"} mt={"2rem"}>
            <FormattedMessage id="cookiePolicy.item9.title" />
          </ListItem>
          <Text>
            <FormattedMessage id="cookiePolicy.item9.text1" />
          </Text>
          <UnorderedList fontSize={"1rem"} spacing={4} mt={"1rem"}>
            {listItems.map((itemId) => (
              <ListItem key={itemId}>
                <FormattedMessage id={itemId} />
              </ListItem>
            ))}
          </UnorderedList>
          <Text mt={"2rem"}>
            <FormattedMessage id="cookiePolicy.item9.text2" />
          </Text>
          <ListItem color={"#BE62C6"} mt={"2rem"}>
            <FormattedMessage id="cookiePolicy.item10.title" />
          </ListItem>
          <Text my={"1rem"}>
            <FormattedMessage id="cookiePolicy.item10.text1" />
          </Text>
          <CompanyInfo />
          <Text my={"1rem"}>
            <FormattedMessage id="cookiePolicy.item10.text2" />{" "}
            <Link
              href="https://cookiedatabase.org/"
              target="_blank"
              style={{ color: "#2EA3F2", textDecoration: "underline" }}
            >
              cookiedatabase.org
            </Link>{" "}
            <FormattedMessage id="cookiePolicy.item10.text3" />
          </Text>
        </OrderedList>
      </Box>
    </Container>
  </Box>
);

export default CookiePolicy;
