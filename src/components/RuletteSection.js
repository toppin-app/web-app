"use client";
import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  Image,
  chakra,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";

const MotionBox = chakra(motion.div);

const RuletteSection = () => {
  return (
    <Box bg="#F8F6FB" py={20} px={10}>
      <Flex
        mx="auto"
        flexDir={{ base: "column", md: "row" }}
        justifyContent="space-between"
        align="center"
        maxW="1200px"
      >
        <Box
          w={{ base: "100%", md: "45%" }}
          textAlign={{ base: "center", md: "left" }}
          mb={{ base: "4", md: "0" }}
        >
          <MotionBox
            initial={{ scale: 0.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 4, ease: "easeOut" }}
          >
            <Heading as="h3" color={"#BE62C6"} marginBottom="3rem">
              <FormattedMessage id="ruletteSection.header" />
            </Heading>
            <Text fontSize="lg" textAlign="left" paddingBottom={"2rem"}>
              <FormattedMessage id="ruletteSection.paragraph1" />
            </Text>
            <Text fontSize="lg" textAlign="left" paddingBottom={"2rem"}>
              <FormattedMessage id="ruletteSection.paragraph2" />
            </Text>
            <Text fontSize="lg" textAlign="left" paddingBottom={"2rem"}>
              <FormattedMessage id="ruletteSection.paragraph3" />
            </Text>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 4 }}
          >
            <Button
              as="a"
              href="#descarga"
              size="lg"
              borderRadius={42}
              letterSpacing={0}
              color="white"
              bgGradient="linear(to-l, #9D72F8, #D072DE)"
              _hover={{ bg: "linear(to-l, #9D72F8, #D072DE)" }}
              textTransform="uppercase"
              fontSize={12}
              fontWeight="700"
              mt={4}
            >
              <FormattedMessage id="ruletteSection.buttonText" />
            </Button>
          </MotionBox>
        </Box>
        <MotionBox
          w={{ base: "100%", md: "45%" }}
          textAlign="center"
          initial={{ scale: 0.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 4, ease: "easeOut" }}
        >
          <Image
            loading="lazy"
            decoding="async"
            width="100%"
            height="auto"
            maxW="100%"
            src="/images/2022/10/RULETA-3.png"
            alt="app de citas"
            title="RULETA"
          />
        </MotionBox>
      </Flex>
    </Box>
  );
};

export default RuletteSection;
