"use client";
import React from "react";
import { Box } from "@chakra-ui/react";

import NavBar from "@/components/layout/NavBar";
import useMounted from "@/hooks/useMounted";
import FooterComponent from "@/components/layout/FooterComponent";
import useScroll from "@/hooks/useScroll";

const Layout = ({ children }) => {
  const { isMounted } = useMounted();
  const scrollPosition = useScroll();
  const scrollLimit = 80;
  const isSticky = scrollPosition?.y > scrollLimit;

  return (
    <Box className="wrapper" height="100vh">
      {isMounted && (
        <>
          <NavBar isSticky={isSticky} />
          {children}
          <FooterComponent />
        </>
      )}
    </Box>
  );
};

export default Layout;
