"use client";
import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  OrderedList,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import Link from "next/link";
import { FormattedMessage } from "react-intl";
import listKeys from "@/app/(web)/condiciones-de-contratacion-y-aviso-legal/listKeys";

const {
  item3List,
  item7List,
  item9List1,
  item9List2,
  item9List3,
  item9List4,
  item11List,
} = listKeys;

const LegalConditions = () => {
  return (
    <Box id="main-content" backgroundColor={"#F8F6FB"}>
      <Container maxW="container.xl" py={8}>
        <Box id="content-area">
          <Heading as="h1" size="2xl" mb={6} color={"#BE62C6"}>
            <FormattedMessage id="legalConditions.header" />
          </Heading>
          <OrderedList fontWeight={"bold"} fontSize={"1.5rem"} mt={10}>
            <ListItem color={"#000"} my={4}>
              <FormattedMessage id="legalConditions.item1.title" />
            </ListItem>
            <Text>
              <FormattedMessage id="legalConditions.item1.text1" />{" "}
              <Link href="/" target="_blank" style={{ color: "#2EA3F2" }}>
                TOPPIN
              </Link>{" "}
              <FormattedMessage id="legalConditions.item1.text2" />
            </Text>
            <Text>
              <FormattedMessage id="legalConditions.item1.text3" />{" "}
              <Link
                href="mailto:support@toppin.es"
                style={{ color: "#2EA3F2" }}
              >
                support@toppin.es
              </Link>
            </Text>
            <ListItem color={"#000"} my={4}>
              <FormattedMessage id="legalConditions.item2.title" />
            </ListItem>
            <Text>
              <FormattedMessage id="legalConditions.item2.text1" />
            </Text>
            <Text>
              <FormattedMessage id="legalConditions.item2.text2" />
            </Text>
            <Text>
              <FormattedMessage id="legalConditions.item2.text3" />
            </Text>
            <ListItem color={"#000"} my={4}>
              <FormattedMessage id="legalConditions.item3.title" />
            </ListItem>
            <Text>
              <FormattedMessage id="legalConditions.item3.text1" />{" "}
            </Text>
            <UnorderedList mb={4} pl={4} spacing={2} fontSize={"1.1rem"}>
              {item3List.map((itemId) => (
                <ListItem key={itemId}>
                  <FormattedMessage id={itemId} />
                </ListItem>
              ))}
            </UnorderedList>
            <Text>
              <FormattedMessage id="legalConditions.item3.text2" />
            </Text>
            <ListItem color={"#000"} my={4}>
              <FormattedMessage id="legalConditions.item4.title" />
            </ListItem>
            <Text>
              <FormattedMessage id="legalConditions.item4.text1" />
            </Text>
            <Text>
              <FormattedMessage id="legalConditions.item4.text2" />
            </Text>
            <ListItem color={"#000"} my={4}>
              <FormattedMessage id="legalConditions.item5.title" />
            </ListItem>
            <Text>
              <FormattedMessage id="legalConditions.item5.text1" />
            </Text>
            <ListItem color={"#000"} my={4}>
              <FormattedMessage id="legalConditions.item6.title" />
            </ListItem>
            <Text>
              <FormattedMessage id="legalConditions.item6.text1" />
            </Text>
            <Text>
              <FormattedMessage id="legalConditions.item6.text2" />
            </Text>
            <ListItem color={"#000"} my={4}>
              <FormattedMessage id="legalConditions.item7.title" />
            </ListItem>
            <Text>
              <FormattedMessage id="legalConditions.item7.text1" />
            </Text>
            <Text>
              <FormattedMessage id="legalConditions.item7.text2" />
            </Text>
            <Text>
              <FormattedMessage id="legalConditions.item7.text3" />
            </Text>
            <UnorderedList mb={4} pl={4} spacing={2} fontSize={"1.1rem"}>
              {item7List.map((itemId) => (
                <ListItem key={itemId}>
                  <FormattedMessage id={itemId} />
                </ListItem>
              ))}
            </UnorderedList>
            <Text>
              <FormattedMessage id="legalConditions.item7.text4" />
            </Text>
            <ListItem color={"#000"} my={4}>
              <FormattedMessage id="legalConditions.item8.title" />
            </ListItem>
            <Text>
              <FormattedMessage id="legalConditions.item8.text1" />
            </Text>
            <ListItem color={"#000"} my={4}>
              <FormattedMessage id="legalConditions.item9.title" />
            </ListItem>
            <Text as="b" mb={4} fontSize={"1.1rem"}>
              <FormattedMessage id="legalConditions.item9.text1" />
            </Text>
            <Text>
              <FormattedMessage id="legalConditions.item9.text2" />
            </Text>
            <Text as="b" mb={4} fontSize={"1.1rem"}>
              <FormattedMessage id="legalConditions.item9.text3" />
            </Text>
            <Text>
              <FormattedMessage id="legalConditions.item9.text4" />
            </Text>
            <Text>
              <FormattedMessage id="legalConditions.item9.text5" />
            </Text>
            <Text>
              <FormattedMessage id="legalConditions.item9.text6" />
            </Text>
            <Text>
              <FormattedMessage id="legalConditions.item9.text7" />
            </Text>
            <Text as="b" mb={4} fontSize={"1.1rem"}>
              <FormattedMessage id="legalConditions.item9.text8" />
            </Text>
            <Text>
              <FormattedMessage id="legalConditions.item9.text9" />
            </Text>
            <UnorderedList mb={4} pl={4} spacing={2} fontSize={"1.1rem"}>
              {item9List1.map((itemId) => (
                <ListItem key={itemId}>
                  <FormattedMessage id={itemId} />
                </ListItem>
              ))}
            </UnorderedList>
            <Text as="b" mb={4} fontSize={"1.1rem"}>
              <FormattedMessage id="legalConditions.item9.text10" />
            </Text>
            <Text>
              <FormattedMessage id="legalConditions.item9.text11" />
            </Text>
            <Text as="b" mb={4} fontSize={"1.1rem"}>
              <FormattedMessage id="legalConditions.item9.text12" />
            </Text>
            <UnorderedList mb={4} pl={4} spacing={2} fontSize={"1.1rem"}>
              {item9List2.map((itemId) => (
                <ListItem key={itemId}>
                  <FormattedMessage id={itemId} />
                </ListItem>
              ))}
            </UnorderedList>
            <Text as="b" mb={4} fontSize={"1.1rem"}>
              <FormattedMessage id="legalConditions.item9.text13" />
            </Text>
            <UnorderedList mb={4} pl={4} spacing={2} fontSize={"1.1rem"}>
              {item9List3.map((itemId) => (
                <ListItem key={itemId}>
                  <FormattedMessage id={itemId} />
                </ListItem>
              ))}
            </UnorderedList>
            <Text as="b" mb={4} fontSize={"1.1rem"}>
              <FormattedMessage id="legalConditions.item9.text14" />
            </Text>
            <Text>
              <FormattedMessage id="legalConditions.item9.text15" />
            </Text>
            <Text>
              <FormattedMessage id="legalConditions.item9.text16" />
            </Text>
            <Text>
              <FormattedMessage id="legalConditions.item9.text17" />
            </Text>
            <Text as="b" mb={4} fontSize={"1.1rem"}>
              <FormattedMessage id="legalConditions.item9.text18" />
            </Text>
            <Text>
              <FormattedMessage id="legalConditions.item9.text19" />
            </Text>
            <Text as="b" mb={4} fontSize={"1.1rem"}>
              <FormattedMessage id="legalConditions.item9.text20" />
            </Text>
            <Text>
              <FormattedMessage id="legalConditions.item9.text21" />
            </Text>
            <UnorderedList mb={4} pl={4} spacing={2} fontSize={"1.1rem"}>
              {item9List4.map((itemId) => (
                <ListItem key={itemId}>
                  <FormattedMessage id={itemId} />
                </ListItem>
              ))}
            </UnorderedList>
            <Text>
              <FormattedMessage id="legalConditions.item9.text22" />
            </Text>
            <Text>
              <FormattedMessage id="legalConditions.item9.text23" />
            </Text>
            <Text>
              <FormattedMessage id="legalConditions.item9.text24" />
            </Text>
            <Text>
              <FormattedMessage id="legalConditions.item9.text25" />
            </Text>
            <Text as="b" mb={4} fontSize={"1.1rem"}>
              <FormattedMessage id="legalConditions.item9.text26" />
            </Text>
            <Text as="i" mb={4} display={"block"}>
              <FormattedMessage id="legalConditions.item9.text27" />
            </Text>
            <Text as="i" mb={4} display={"block"}>
              <FormattedMessage id="legalConditions.item9.text28" />
            </Text>
            <Text as="i" mb={4} display={"block"}>
              <FormattedMessage id="legalConditions.item9.text29" />
            </Text>
            <Text as="i" mb={4} display={"block"}>
              <FormattedMessage id="legalConditions.item9.text30" />
            </Text>{" "}
            <Text as="i" mb={4} display={"block"}>
              <FormattedMessage id="legalConditions.item9.text31" />
            </Text>{" "}
            <Text as="i" mb={4} display={"block"}>
              <FormattedMessage id="legalConditions.item9.text32" />
            </Text>
            <ListItem color={"#000"} my={4}>
              <FormattedMessage id="legalConditions.item10.title" />
            </ListItem>
            <Text>
              <FormattedMessage id="legalConditions.item10.text1" />
            </Text>
            <Text>
              <FormattedMessage id="legalConditions.item10.text2" />
            </Text>
            <Text>
              <FormattedMessage id="legalConditions.item10.text3" />
            </Text>
            <ListItem color={"#000"} my={4}>
              <FormattedMessage id="legalConditions.item11.title" />
            </ListItem>
            <Text>
              <FormattedMessage id="legalConditions.item11.text1" />
            </Text>
            <UnorderedList mb={4} pl={4} spacing={2} fontSize={"1.1rem"}>
              {item11List.map((itemId) => (
                <ListItem key={itemId}>
                  <FormattedMessage id={itemId} />
                </ListItem>
              ))}
            </UnorderedList>
            <Text>
              <FormattedMessage id="legalConditions.item11.text2" />
            </Text>
            <Text>
              <FormattedMessage id="legalConditions.item11.text3" />
            </Text>
            <ListItem color={"#000"} my={4}>
              <FormattedMessage id="legalConditions.item12.title" />
            </ListItem>
            <Text>
              <FormattedMessage id="legalConditions.item12.text1" />
            </Text>
            <Text>
              <FormattedMessage id="legalConditions.item12.text2" />
            </Text>
            <ListItem color={"#000"} my={4}>
              <FormattedMessage id="legalConditions.item13.title" />
            </ListItem>
            <Text>
              <FormattedMessage id="legalConditions.item13.text1" />
            </Text>
            <Text>
              <FormattedMessage id="legalConditions.item13.text2" />{" "}
              <Link
                href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=ES"
                target="_blank"
                style={{ color: "#2EA3F2" }}
              >
                <FormattedMessage id="legalConditions.item13.linkText" />
              </Link>
            </Text>
            <ListItem color={"#000"} my={4}>
              <FormattedMessage id="legalConditions.item14.title" />
            </ListItem>
            <Text>
              <FormattedMessage id="legalConditions.item14.text1" />
            </Text>
            <Text>
              <FormattedMessage id="legalConditions.item14.text2" />
            </Text>
            <ListItem color={"#000"} my={4}>
              <FormattedMessage id="legalConditions.item15.title" />
            </ListItem>
            <Text>
              <FormattedMessage id="legalConditions.item15.text" />
            </Text>
          </OrderedList>
        </Box>
      </Container>
    </Box>
  );
};

export default LegalConditions;
