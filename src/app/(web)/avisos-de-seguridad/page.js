"use client";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  VStack,
  Center,
  Container,
} from "@chakra-ui/react";
import Link from "next/link";
import { data } from "@/app/(web)/avisos-de-seguridad/data";
import { FormattedMessage } from "react-intl";

const SecurityNotice = () => {
  return (
    <Box id="main-content" backgroundColor={"#F8F6FB"}>
      <Container maxW="container.xl" py={8}>
        <Box bg="#ffffff">
          <Flex flexDirection="column" alignItems="center">
            <Box bg="#f8f8f8" py={10} w="100%">
              <Flex justifyContent="center">
                <Box textAlign="center" w="100%">
                  <Heading as="h1" size="3xl" mb={1} color={"#BE62C6"}>
                    <FormattedMessage id="safetyNotices.header" />
                  </Heading>
                </Box>
              </Flex>
            </Box>

            <Box bg="#F8F6FB" py={10} w="100%">
              <Flex justifyContent="center">
                <VStack spacing={6} w="100%" alignItems="center">
                  {data.map((item) => (
                    <Box
                      key={item.key}
                      bg="white"
                      p={3}
                      borderWidth="1px"
                      borderRadius={25}
                      borderColor={"#be62c6"}
                      overflow="hidden"
                    >
                      <Link href={item.link}>
                        <Center>
                          <Image
                            borderRadius={5}
                            src={item.img}
                            alt={item.key}
                            width={400}
                            height={250}
                          />
                        </Center>
                      </Link>
                      <Box p={6} mt={10} textAlign="center">
                        <Link href={item.link}>
                          <Heading as="h2" size="md" mb={4} color={"#BE62C6"}>
                            <FormattedMessage
                              id={`safetyNotices.${item.key}.title`}
                            />
                          </Heading>
                        </Link>
                        <Text>
                          <FormattedMessage
                            id={`safetyNotices.${item.key}.text`}
                          />
                        </Text>
                      </Box>
                    </Box>
                  ))}
                </VStack>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default SecurityNotice;
