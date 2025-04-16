"use client";

import ContentPage from "@/components/ContentPage";
import { useIntl } from "react-intl";
import { data } from "@/app/(web)/consejos-para-tener-la-primera-cita-perfecta/data";

const FirstDateTips = () => {
  const intl = useIntl();

  return (
    <ContentPage
      title={intl.formatMessage({ id: "firstDateTips.header" })}
      imageSrc="images/2022/11/dentro-c.jpg"
      description={intl.formatMessage({ id: "firstDateTips.description" })}
      data={data}
      prevLink={{
        href: "/como-terminar-una-relacion-de-match/",
        text: intl.formatMessage({ id: "firstDateTips.prevLinkText" }),
      }}
      nextLink={{
        href: "/toppitea-con-seguridad/",
        text: intl.formatMessage({ id: "firstDateTips.nextLinkText" }),
      }}
    />
  );
};

export default FirstDateTips;
