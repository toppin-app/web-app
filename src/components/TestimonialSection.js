import React from "react";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";

const TestimonialSection = () => {
  return (
    <Box py={16} bg={"#F8F6FB"}>
      <Container maxW="1080px">
        <Grid
          templateColumns={{
            base: "1fr",

            md: "repeat(4, 1fr)",
          }}
          gap={6}
        >
          <GridItem
            display={{ base: "flex", md: "block" }}
            justifyContent={{ base: "center", md: "initial" }}
            alignItems={{ base: "center", md: "initial" }}
          >
            <Box position={{ "2xl": "absolute" }} left="25%" zIndex={1}>
              <Image
                src="/images/2021/11/joaquin-opi.png"
                alt="Joaquín"
                maxW={324}
              />
            </Box>
          </GridItem>
          <GridItem />
          <GridItem
            display={{ base: "flex", md: "block" }}
            justifyContent={{ base: "center", md: "initial" }}
            alignItems={{ base: "center", md: "initial" }}
          >
            <Image
              src="/images/2021/11/opi-miguel.png"
              alt="Miguel"
              maxW={324}
            />
          </GridItem>
          <GridItem />
        </Grid>
        <Grid
          templateColumns={{
            base: "1fr",

            md: "1fr 2fr 1fr",
          }}
          gap={6}
          my={8}
          alignItems="center"
        >
          <GridItem />
          <GridItem textAlign="center">
            <Heading as="h3" size="2xl">
              <Text as="span" color="black">
                <FormattedMessage id="testimonialSection.header1" />{" "}
              </Text>
              <Text as="span" color="#829DD9">
                <FormattedMessage id="testimonialSection.header2" />
              </Text>
            </Heading>
            <Heading as="h3" size="2xl">
              <Text as="span" color="black">
                <FormattedMessage id="testimonialSection.header3" />{" "}
              </Text>
              <Text as="span" color="#BE62C6">
                <FormattedMessage id="testimonialSection.header4" />
              </Text>
            </Heading>
          </GridItem>
          <GridItem
            display={{ base: "flex", md: "block" }}
            justifyContent={{ base: "center", md: "initial" }}
            alignItems={{ base: "center", md: "initial" }}
          >
            <Image src="/images/2021/11/lorena.png" alt="Lorena" maxW={324} />
          </GridItem>
        </Grid>

        <Grid
          templateColumns={{
            base: "1fr",

            md: "repeat(4, 1fr)",
          }}
          gap={6}
        >
          <GridItem
            display={{ base: "flex", md: "block" }}
            justifyContent={{ base: "center", md: "initial" }}
            alignItems={{ base: "center", md: "initial" }}
          >
            <Image
              src="/images/2021/11/patricia2.png"
              alt="Patricia"
              maxW={324}
            />
          </GridItem>
          <GridItem />
          <GridItem
            display={{ base: "flex", md: "block" }}
            justifyContent={{ base: "center", md: "initial" }}
            alignItems={{ base: "center", md: "initial" }}
          >
            <Image src="/images/2021/11/elena.png" alt="Elena" maxW={324} />
          </GridItem>
          <GridItem />
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialSection;
