"use client";
import React from "react";
import { Box, Container, Heading } from "@chakra-ui/react";
import Masonry from "react-masonry-css";
import FAQSection from "@/components/FAQSection";
import { data } from "@/app/(web)/faq/data";
import "@/app/(web)/faq/styles.css";
import { FormattedMessage } from "react-intl";

const FAQ = () => {
  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 2,
    500: 1,
  };
  return (
    <Box p={8} backgroundColor={"#F8F6FB"}>
      <Container maxW="container.xl" py={8}>
        <Heading as="h2" size="lg" mb={6} color={"#BE62C6"}>
          <FormattedMessage id="faq.header" />
        </Heading>
        <Heading
          as="h1"
          size="2xl"
          mb={8}
          color={"#BE62C6"}
          marginBottom="4rem"
        >
          FAQ
        </Heading>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {data.map((section, index) => (
            <Box key={index} mb={10}>
              <FAQSection title={section.title} questions={section.questions} />
            </Box>
          ))}
        </Masonry>
      </Container>
    </Box>
  );
};

export default FAQ;
