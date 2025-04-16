"use client";
import React from "react";
import TestimonialSection from "@/components/TestimonialSection";
import FullWidthImageSection from "@/components/FullWidthImageSection";
import MainSection from "@/components/MainSection";
import StoresDownloadSection from "@/components/StoresDownloadSection";
import KnowMoreSection from "@/components/KnowMoreSection";
import SweetTextSection from "@/components/SweetTextSection";
import RuletteSection from "@/components/RuletteSection";
import { FormattedMessage } from "react-intl";

const IndexPage = () => {
  return (
    <>
      <MainSection />
      <KnowMoreSection />
      <FullWidthImageSection
        imageSrc={{
          base: "/images/2022/10/Porta1-1.png",
          md: "/images/2022/10/Porta1-1.png",
        }}
      />
      <SweetTextSection />
      <FullWidthImageSection
        imageSrc={{
          base: "/images/2022/10/Porta-6.png",
          md: "/images/2022/10/Porta-6.png",
        }}
      />
      <RuletteSection />
      <StoresDownloadSection
        title={<FormattedMessage id="storesSection.title1" />}
      />
      <FullWidthImageSection
        imageSrc={{
          base: "/images/2022/10/Porta2-3.png",
          md: "/images/2022/10/Porta4-6.png",
        }}
      />
      <TestimonialSection />
      <StoresDownloadSection
        title={<FormattedMessage id="storesSection.title2" />}
      />
      <FullWidthImageSection
        imageSrc={{
          base: "/images/2022/10/Porta_-2.jpg",
          md: "/images/2022/10/Porta_-2.jpg",
        }}
      />
    </>
  );
};

export default IndexPage;
