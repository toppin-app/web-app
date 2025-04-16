"use client";
import React from "react";
import { Box, Heading, Flex, Button, Icon, Container } from "@chakra-ui/react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { FormattedMessage } from "react-intl";

const StoresDownloadSection = ({ title }) => {
  return (
    <Box id="descarga" bg="#F8F6FB" py={16}>
      <Container maxW="container.xl">
        <Flex direction="column" alignItems="center" textAlign="center">
          <Heading
            as="h2"
            size={{ base: "2xl", md: "3xl" }}
            color="#BE62C6"
            mb={"4rem"}
          >
            {title}
          </Heading>

          <Flex
            direction={{ base: "column", md: "row" }}
            justifyContent="space-around"
            alignItems="center"
            w="full"
          >
            <Button
              leftIcon={<Icon as={FaApple} boxSize={12} />}
              bg="linear-gradient(to right, #A855F7, #D946EF)"
              color="white"
              size="lg"
              px={8}
              py={6}
              borderRadius="full"
              mb={{ base: 4, md: 0 }}
              mr={{ base: 0, md: 4 }}
              _hover={{ opacity: 0.8 }}
              padding="8"
            >
              <FormattedMessage id="storesSection.buttonText" /> App Store
            </Button>

            <Button
              leftIcon={<Icon as={FaGooglePlay} boxSize={9} />}
              bg="linear-gradient(to right, #A855F7, #D946EF)"
              color="white"
              size="lg"
              px={8}
              py={6}
              borderRadius="full"
              _hover={{ opacity: 0.8 }}
              padding="8"
            >
              <FormattedMessage id="storesSection.buttonText" /> Play Store
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default StoresDownloadSection;
