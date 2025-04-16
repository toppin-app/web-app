"use client";
import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

const CompanyInfo = () => {
  const email = "privacy@toppin.es";
  return (
    <Box>
      <Text>
        Toppin Global Company, S.L.
        <br />
        C/ Algepeser, 64 -Nave 1 .46980 .Paterna (Valencia)
        <br />
        España
        <br />
        Web:{" "}
        <Link href="/" target="_blank" style={{ color: "#2EA3F2" }}>
          http://toppin.es
        </Link>
        <br />
        Correo electrónico:{" "}
        <Link
          href={`mailto:${email}`}
          style={{ color: "#2EA3F2", textDecoration: "underline" }}
        >
          {email}
        </Link>
      </Text>
    </Box>
  );
};

export default CompanyInfo;
