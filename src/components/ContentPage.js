"use client";
import {
  Box,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  Container,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

const ContentPage = ({
  title,
  imageSrc,
  description,
  data,
  prevLink,
  nextLink,
}) => {
  let justifyContentValue = "space-between";
  if (prevLink && !nextLink) {
    justifyContentValue = "flex-start";
  } else if (!prevLink && nextLink) {
    justifyContentValue = "flex-end";
  }
  return (
    <Box id="main-content" backgroundColor={"#F8F6FB"}>
      <Container maxW="container.xl" py={8}>
        <Box padding="6" bg="#f8f8f8">
          <Box textAlign={"center"} mb={"2rem"}>
            <Heading as="h1" size="3xl" mb={1} color={"#BE62C6"}>
              {title}
            </Heading>
          </Box>
          <Box>
            <Image
              decoding="async"
              src={imageSrc}
              alt="image"
              width={900}
              height="auto"
              mx="auto"
            />
            <OrderedList mt="4" spacing="4" styleType="none">
              <Text mt="8">{description}</Text>
              {data.map((item, index) => (
                <ListItem key={index} display="flex" alignItems="baseline">
                  <Text as="span" color="#BE62C6" fontSize="xl" mr="8px">
                    {index + 1}.
                  </Text>
                  <Box>
                    <Heading
                      as="h2"
                      size="md"
                      color={"#BE62C6"}
                      mt="2rem"
                      mb="1rem"
                    >
                      {item.title}
                    </Heading>
                    <Text>{item.text}</Text>
                  </Box>
                </ListItem>
              ))}
            </OrderedList>
          </Box>
        </Box>
        <Box mt="8">
          <VStack alignItems="flex-start" mt="4">
            <Text>
              <FormattedMessage id="contentPage.backToText" />
            </Text>
            <Link
              href="/avisos-de-seguridad/"
              rel="category tag"
              style={{ color: "#BE62C6" }}
            >
              <FormattedMessage id="contentPage.linkText" />
            </Link>
          </VStack>
          <HStack justifyContent={justifyContentValue} mt="10">
            {prevLink && (
              <Link
                href={prevLink.href}
                rel="prev"
                style={{ color: "#BE62C6" }}
              >
                ← {prevLink.text}
              </Link>
            )}
            {nextLink && (
              <Link
                href={nextLink.href}
                rel="next"
                style={{ color: "#BE62C6" }}
              >
                {nextLink.text} →
              </Link>
            )}
          </HStack>
        </Box>
      </Container>
    </Box>
  );
};

export default ContentPage;
