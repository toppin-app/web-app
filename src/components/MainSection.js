"use client";
import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  VStack,
  Button,
  chakra,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";

const MotionBox = chakra(motion.div);

const MainSection = () => {
  const variant = useBreakpointValue(
    {
      base: "/images/2021/10/banner-mobile.png",
      lg: "/images/2022/10/banner.png",
    },
    { ssr: false }
  );

  const [hover, setHover] = useState(false);
  return (
    <Box minHeight="700px" backgroundColor={"#F8F6FB"} position="relative">
      <Box pt={{ md: 20 }} px={{ base: "2rem", xl: "10rem", "2xl": "20rem" }}>
        <Flex
          justify={{ base: "center", lg: "flex-start" }}
          align={{ base: "center", lg: "flex-start" }}
          direction={{ base: "column-reverse", lg: "row" }}
        >
          <VStack
            spacing={6}
            textAlign={{ base: "center", lg: "left" }}
            align={{ base: "center", lg: "flex-start" }}
            gap={{ base: 2, md: 10 }}
          >
            <MotionBox
              paddingBottom={"1rem"}
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 4 }}
            >
              <Heading as="h1" size={{ base: "xl", lg: "4xl" }} color="#BE62C6">
                <FormattedMessage id="main.header" />
              </Heading>
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 4 }}
            >
              <Flex
                maxW="30rem"
                direction="column"
                justify="flex-start"
                align="flex-start"
              >
                <Text fontSize="lg" color="#666" paddingBottom={"1rem"}>
                  <FormattedMessage id="main.slogan.paragraph1" />
                </Text>
                <Text fontSize="lg" color="#666">
                  <FormattedMessage id="main.slogan.paragraph2" />
                </Text>
              </Flex>
            </MotionBox>
            <MotionBox
              maxW="30rem"
              py={{ base: 4, md: 0 }}
              direction="column"
              justify="flex-end"
              align="flex-start"
              height={"5rem"}
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 4 }}
            >
              <Button
                as="a"
                size="lg"
                borderRadius={42}
                letterSpacing={0}
                href="#descarga"
                color={"#FFF"}
                bgGradient="linear(to-l, #9D72F8, #D072DE)"
                _hover={{ bg: "linear(to-l, #9D72F8, #D072DE)" }}
                textTransform="uppercase"
                fontSize={12}
                fontWeight="700"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <FormattedMessage id="main.buttonText" /> {hover && ">"}
              </Button>
            </MotionBox>
          </VStack>
          <Box flexShrink={0} mt={{ base: 10, md: 0 }} ml={{ md: 10 }}>
            <Image
              src={variant}
              alt="Banner Image"
              objectFit="contain"
              height={{ base: "auto", md: "auto" }}
              width={{ base: "100%", md: "100%" }}
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default MainSection;
