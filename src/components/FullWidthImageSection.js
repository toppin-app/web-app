"use client";
import React from "react";
import { Box, Image, useBreakpointValue } from "@chakra-ui/react";

const FullWidthImageSection = ({ imageSrc }) => {
  const variant = useBreakpointValue(imageSrc, { ssr: false });
  return (
    <Box as="section" width="100%" overflow="hidden" bg={"#F8F6FB"}>
      <Image
        src={variant}
        alt="Imagen de ancho completo"
        width="100%"
        height="auto"
        objectFit="cover"
        loading="lazy"
        decoding="async"
      />
    </Box>
  );
};

export default FullWidthImageSection;
