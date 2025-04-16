"use client";

import ContentPage from "@/components/ContentPage";
import { useIntl } from "react-intl";
import {
  description,
  data,
} from "@/app/(web)/como-terminar-una-relacion-de-match/data";

const HowToFinish = () => {
  const intl = useIntl();

  return (
    <ContentPage
      title={intl.formatMessage({ id: "howToFinish.header" })}
      imageSrc="images/2022/11/dentro-con.jpg"
      description={description}
      data={data}
      nextLink={{
        href: "/consejos-para-tener-la-primera-cita-perfecta/",
        text: intl.formatMessage({ id: "howToFinish.nextLinkText" }),
      }}
    />
  );
};

export default HowToFinish;
