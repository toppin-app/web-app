"use client";
import React, { useState } from "react";
import { Box, Heading, Text, VStack, Button, chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";

const MotionBox = chakra(motion.div);

const KnowMoreSection = () => {
  const [hover, setHover] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    const element = document.getElementById("descarga");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Box
      w="100%"
      p={4}
      backgroundSize="cover"
      backgroundPosition="center"
      paddingTop={"4rem"}
      backgroundColor={"#F8F6FB"}
    >
      <VStack spacing={6} align="center">
        <Box>
          <Heading
            as="h2"
            size="xl"
            color="#000000"
            textAlign="center"
            paddingBottom={"1rem"}
          >
            <span>
              <FormattedMessage id="knowMoreSection.header1" />
            </span>{" "}
            <strong style={{ color: "#be62c6" }}>
              <FormattedMessage id="knowMoreSection.header2" />
            </strong>
          </Heading>
        </Box>
        <Box>
          <Text fontSize="lg" textAlign="center" paddingBottom={"1rem"}>
            <FormattedMessage id="knowMoreSection.paragraph1" />
          </Text>
          <Text fontSize="lg" textAlign="center" paddingBottom={"1rem"}>
            <FormattedMessage id="knowMoreSection.paragraph2" />
          </Text>
        </Box>
        <MotionBox
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 4 }}
        >
          <Button
            onClick={handleClick}
            size="lg"
            borderRadius={42}
            letterSpacing={0}
            color="white"
            bgGradient="linear(to-l, #9D72F8, #D072DE)"
            _hover={{ bg: "linear(to-l, #9D72F8, #D072DE)" }}
            textTransform="uppercase"
            fontSize={12}
            fontWeight="700"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <FormattedMessage id="knowMoreSection.buttonText" /> {hover && ">"}
          </Button>
        </MotionBox>
      </VStack>
    </Box>
  );
};

export default KnowMoreSection;
