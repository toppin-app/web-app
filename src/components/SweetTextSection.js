"use client";
import React from "react";
import { Box, Heading, Text, chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";

const MotionBox = chakra(motion.div);

const SweetTextSection = () => {
  return (
    <Box id="mas" background="#F8F6FB" p={10}>
      <Box maxW="1200px" mx="auto">
        <MotionBox
          textAlign="left"
          mb={6}
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 4 }}
        >
          <Heading as="h3" color="#000000">
            <FormattedMessage id="sweetSection.header1" />
          </Heading>
          <Heading
            as="h3"
            color="#be62c6"
            fontSize={{ base: "34px", md: "45px", lg: "60px" }}
            fontWeight="600"
          >
            <FormattedMessage id="sweetSection.header2" />
          </Heading>
        </MotionBox>
        <MotionBox
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 4 }}
        >
          <Text textAlign="left" mb={4} paddingBottom={"1rem"}>
            <FormattedMessage id="sweetSection.paragraph1" />
          </Text>
          <Text textAlign="left" mb={4} paddingBottom={"1rem"}>
            <FormattedMessage id="sweetSection.paragraph2" />
          </Text>
          <Text textAlign="left" paddingBottom={"1rem"}>
            <FormattedMessage id="sweetSection.paragraph3" />
          </Text>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default SweetTextSection;
