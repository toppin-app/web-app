"use client";
import React from "react";
import dynamic from "next/dynamic";
import {
  Box,
  Flex,
  Image,
  VStack,
  HStack,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

const LanguageSelector = dynamic(
  () => import("@/components/LanguajeSelector"),
  {
    ssr: false,
  }
);

const FooterComponent = () => {
  return (
    <Box as="footer" bg="#F8F6FB" color="#666">
      <Box maxWidth="1280px" margin="auto" padding="40px 0">
        <Grid
          templateColumns={["1fr", "1fr", "1fr 1fr 4fr"]}
          templateRows={["auto", "auto", "1fr"]}
          gap={6}
        >
          <GridItem colSpan={[1, 1, 2]}>
            <Flex
              justifyContent={["center", "center", "flex-start"]}
              alignItems={["center", "center", "flex-start"]}
              flexDirection={["column", "column", "row"]}
              flexWrap="wrap"
            >
              <Box mt={[4, 4, 8]}>
                <Flex flexDirection="column" alignItems="center">
                  <Link href="/">
                    <Image
                      src="/images/2021/10/Grupo-22870@2x.png"
                      alt="Toppin logo"
                      width="168px"
                      mb={4}
                    />
                  </Link>
                  <Image
                    src="/images/2021/10/download-on-the-app-store-apple-2@2x.png"
                    alt="App Store"
                    width="147px"
                  />
                </Flex>
              </Box>

              <Box
                mt={[4, 4, 10]}
                alignSelf={["center", "center", "flex-start"]}
              >
                <VStack align="center" spacing={4} gap={8}>
                  <HStack spacing={4}>
                    <Link
                      href="https://www.instagram.com/topcitas"
                      target="_blank"
                    >
                      <FaInstagram size={24} color="#EA2C59" />
                    </Link>
                    <Link
                      href="https://www.facebook.com/toppincitas"
                      target="_blank"
                    >
                      <FaFacebookF size={24} color="#0C71C3" />
                    </Link>
                    <Link
                      href="https://www.tiktok.com/@toppincitas"
                      target="_blank"
                    >
                      <FaTiktok size={24} color="#000000" />
                    </Link>
                  </HStack>
                  <Image
                    src="/images/2021/10/google-play-badge@2x.png"
                    alt="Google Play"
                    width="148px"
                  />
                </VStack>
              </Box>
            </Flex>
          </GridItem>

          <GridItem>
            <Flex
              justifyContent={["center", "center", "space-evenly"]}
              flexDirection={["column", "column", "row"]}
              alignItems={["center", "center", "flex-start"]}
            >
              <VStack
                align={["center", "center", "flex-start"]}
                spacing={2}
                textAlign={["center", "center", "left"]}
              >
                <Text fontWeight="bold" color="#E2188D">
                  <FormattedMessage id="footer.downloads" />
                </Text>
                <Link href="#">iOS</Link>
                <Link href="#">Android</Link>
                <Text fontWeight="bold" color="#E2188D" mt={4}>
                  <FormattedMessage id="footer.help" />
                </Text>
                <Link href="/faq/" style={{ color: "#BE62C6" }}>
                  FAQ
                </Link>
              </VStack>

              <VStack
                align={["center", "center", "flex-start"]}
                spacing={2}
                mt={[4, 4, 0]}
                textAlign={["center", "center", "left"]}
              >
                <Text fontWeight="bold" color="#E2188D">
                  <FormattedMessage id="footer.community" />
                </Text>
                <Link
                  href="/normas-de-la-comunidad/"
                  style={{ color: "#BE62C6" }}
                >
                  <FormattedMessage id="footer.communityStandards" />
                </Link>
                <Link href="/avisos-de-seguridad/" style={{ color: "#BE62C6" }}>
                  <FormattedMessage id="footer.safetyNotices" />
                </Link>
                <Text fontWeight="bold" color="#E2188D" mt={4}>
                  <FormattedMessage id="footer.legalTexts" />
                </Text>
                <Link
                  href="/politica-de-privacidad/"
                  style={{ color: "#BE62C6" }}
                >
                  <FormattedMessage id="footer.privacyPolicy" />
                </Link>
                <Link
                  href="/condiciones-de-contratacion-y-aviso-legal/"
                  style={{ color: "#BE62C6" }}
                >
                  <FormattedMessage id="footer.serviceConditions" />
                </Link>
                <Link
                  href="/politica-de-cookies-ue/"
                  style={{ color: "#BE62C6" }}
                >
                  <FormattedMessage id="footer.cookiesPolicy" />
                </Link>
              </VStack>
            </Flex>
          </GridItem>
        </Grid>
        <Box mt={8}>
          <LanguageSelector />
        </Box>
      </Box>
    </Box>
  );
};

export default FooterComponent;
