"use client";
import React from "react";
import { Box } from "@chakra-ui/react";
import Image from 'next/image'
import NextLink from "next/link";

const NavBar = () => {
  return (
    <Box className="navigation" height="100px" zIndex="999" backgroundColor={"#F8F6FB"}>
      {/* Desktop y Mobile */}
      <Box
        position="relative"
        height="100px"
        top="10px"
        p='1em'
        align="center"
        width="100%"
      >
        <NextLink href="/">
          <Image
            src="/images/2021/10/Grupo-22871.png"
            alt="Toppin Logo"
            width={168}
            height={49}
          />
        </NextLink>
      </Box>
    </Box>
  );
};

export default NavBar;
