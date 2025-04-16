"use client";

import ContentPage from "@/components/ContentPage";
import { useIntl } from "react-intl";
import { data } from "@/app/(web)/toppitea-con-seguridad/data";

const SecurityContent = () => {
  const intl = useIntl();

  return (
    <ContentPage
      title={intl.formatMessage({ id: "securityContent.header" })}
      imageSrc="images/2022/11/dentro.jpg"
      description={intl.formatMessage({ id: "securityContent.description" })}
      data={data}
      prevLink={{
        href: "/consejos-para-tener-la-primera-cita-perfecta/",
        text: intl.formatMessage({ id: "securityContent.prevLinkText" }),
      }}
    />
  );
};

export default SecurityContent;
