// app/providers.tsx
"use client";

import { ChakraProvider } from "@chakra-ui/react";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { IntlProvider } from "react-intl";
import { useState } from "react";
import messages from "@/i18n";
import { LocaleProvider } from "@/context/LocaleContext";

export function Providers({ children }) {
  const [locale, setLocale] = useState("es");

  return (
    <LocaleProvider value={{ locale, setLocale }}>
      <ChakraProvider>
        <IntlProvider
          messages={messages[locale]}
          locale={locale}
          defaultLocale="es"
        >
          <div id="top" />
          {children}
          <ScrollToTopButton />
        </IntlProvider>
      </ChakraProvider>
    </LocaleProvider>
  );
}
