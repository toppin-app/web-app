"use client";

import { useContext } from "react";
import { List, ListItem, Link, Image, Text } from "@chakra-ui/react";
import { FormattedMessage, useIntl } from "react-intl";
import messages from "@/i18n";
import LocaleContext from "@/context/LocaleContext";

const LanguageSelector = () => {
  const { setLocale } = useContext(LocaleContext);
  const intl = useIntl();

  return (
    <List display="flex" justifyContent="center">
      {Object.keys(messages).map((locale) => (
        <ListItem mr={4} key={locale}>
          <Link
            display="flex"
            alignItems="center"
            onClick={() => setLocale(locale)}
          >
            <Image
              src={intl.formatMessage({ id: `lang.${locale}.image` })}
              alt={locale}
              width="18px"
              height="auto"
              mr={2}
            />
            <Text>
              <FormattedMessage id={`lang.${locale}.label`} />
            </Text>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default LanguageSelector;
