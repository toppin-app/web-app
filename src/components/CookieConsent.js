import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Text,
  Checkbox,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { FormattedMessage, useIntl } from "react-intl";

const CookieConsent = () => {
  const intl = useIntl();

  return (
    <Box id="cmplz-cookies-overview">
      <Accordion allowToggle>
        <AccordionItem>
          <h3>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Checkbox isChecked={true} readOnly>
                  <Heading as="h3" size="md">
                    Complianz
                  </Heading>
                </Checkbox>
                <Text>
                  <FormattedMessage id="cookieConsent.functional" />
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h3>
          <AccordionPanel pb={4}>
            <VStack align="start" spacing={4}>
              <Box>
                <Heading as="h4" size="sm">
                  <FormattedMessage id="cookieConsent.use" />
                </Heading>
                <Text>
                  <FormattedMessage id="cookieConsent.explain" />{" "}
                  <Link
                    href="https://cookiedatabase.org/service/complianz/"
                    target="_blank"
                    style={{ color: "#2EA3F2" }}
                  >
                    <FormattedMessage id="cookieConsent.readMore" />
                  </Link>
                </Text>
              </Box>
              <Box>
                <Heading as="h4" size="sm">
                  <FormattedMessage id="cookieConsent.share" />
                </Heading>
                <Text>
                  <FormattedMessage id="cookieConsent.dataExplain" />{" "}
                  <Link
                    href="https://complianz.io/legal/privacy-statement/"
                    target="_blank"
                    style={{ color: "#2EA3F2" }}
                  >
                    <FormattedMessage id="cookieConsent.policy" />
                  </Link>
                  .
                </Text>
              </Box>
              <Box>
                <Heading as="h4" size="sm">
                  Cookies
                </Heading>
                <VStack align="start" spacing={2}>
                  {[
                    {
                      name: "cmplz_cookie_data",
                      expiry: `365 ${intl.formatMessage({
                        id: "cookieConsent.days",
                      })}`,
                      function: intl.formatMessage({
                        id: "cookieConsent.cookies.store",
                      }),
                      url: "https://cookiedatabase.org/cookie/complianz/cmplz_cookie_data/",
                    },
                    {
                      name: "cmplz_consented_services",
                      expiry: `365 ${intl.formatMessage({
                        id: "cookieConsent.days",
                      })}`,
                      function: intl.formatMessage({
                        id: "cookieConsent.cookies.save",
                      }),
                      url: "https://cookiedatabase.org/cookie/complianz/cmplz_consented_services/",
                    },
                    {
                      name: "cmplz_policy_id",
                      expiry: `365 ${intl.formatMessage({
                        id: "cookieConsent.days",
                      })}`,
                      function: intl.formatMessage({
                        id: "cookieConsent.cookies.idStore",
                      }),
                      url: "https://cookiedatabase.org/cookie/complianz/cmplz_policy_id/",
                    },
                    {
                      name: "cmplz_marketing",
                      expiry: `365 ${intl.formatMessage({
                        id: "cookieConsent.days",
                      })}`,
                      function: intl.formatMessage({
                        id: "cookieConsent.cookies.save",
                      }),
                      url: "https://cookiedatabase.org/cookie/complianz/cmplz_marketing/",
                    },
                    {
                      name: "cmplz_statistics",
                      expiry: `365 ${intl.formatMessage({
                        id: "cookieConsent.days",
                      })}`,
                      function: intl.formatMessage({
                        id: "cookieConsent.cookies.save",
                      }),
                      url: "https://cookiedatabase.org/cookie/complianz/cmplz_statistics/",
                    },
                    {
                      name: "cmplz_preferences",
                      expiry: `365 ${intl.formatMessage({
                        id: "cookieConsent.days",
                      })}`,
                      function: intl.formatMessage({
                        id: "cookieConsent.cookies.save",
                      }),
                      url: "https://cookiedatabase.org/cookie/complianz/cmplz_preferences/",
                    },
                    {
                      name: "cmplz_functional",
                      expiry: `365 ${intl.formatMessage({
                        id: "cookieConsent.days",
                      })}`,
                      function: intl.formatMessage({
                        id: "cookieConsent.cookies.save",
                      }),
                      url: "https://cookiedatabase.org/cookie/complianz/cmplz_functional/",
                    },
                    {
                      name: "cmplz_banner-status",
                      expiry: `365 ${intl.formatMessage({
                        id: "cookieConsent.days",
                      })}`,
                      function: intl.formatMessage({
                        id: "cookieConsent.cookies.bannerStore",
                      }),
                      url: "https://cookiedatabase.org/cookie/complianz/cmplz_banner-status/",
                    },
                  ].map((cookie, index) => (
                    <Box key={index}>
                      <Link
                        href={cookie.url}
                        target="_blank"
                        style={{ color: "#2EA3F2" }}
                      >
                        {cookie.name}
                      </Link>
                      <Text>
                        <FormattedMessage id="cookieConsent.expiry" />:{" "}
                        {cookie.expiry}
                      </Text>
                      <Text>
                        <FormattedMessage id="cookieConsent.function" />:{" "}
                        {cookie.function}
                      </Text>
                    </Box>
                  ))}
                </VStack>
              </Box>
            </VStack>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h3>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Checkbox>
                  <Heading as="h3" size="md">
                    Google Analytics
                  </Heading>
                </Checkbox>
                <Text>
                  <FormattedMessage id="cookieConsent.statistics" />
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h3>
          <AccordionPanel pb={4}>
            <VStack align="start" spacing={4}>
              <Box>
                <Heading as="h4" size="sm">
                  <FormattedMessage id="cookieConsent.use" />
                </Heading>
                <Text>
                  <FormattedMessage id="cookieConsent.useStatistics" />{" "}
                  <Link
                    href="https://cookiedatabase.org/service/google-analytics/"
                    target="_blank"
                    style={{ color: "#2EA3F2" }}
                  >
                    <FormattedMessage id="cookieConsent.readMore" />
                  </Link>
                </Text>
              </Box>
              <Box>
                <Heading as="h4" size="sm">
                  <FormattedMessage id="cookieConsent.share" />
                </Heading>
                <Text>
                  <FormattedMessage id="cookieConsent.moreInfo" />{" "}
                  <Link
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    style={{ color: "#2EA3F2" }}
                  >
                    <FormattedMessage id="cookieConsent.privacy" />
                  </Link>
                  .
                </Text>
              </Box>
              <Box>
                <Heading as="h4" size="sm">
                  Cookies
                </Heading>
                <VStack align="start" spacing={2}>
                  {[
                    {
                      name: "_gid",
                      expiry: `1 ${intl.formatMessage({
                        id: "cookieConsent.day",
                      })}`,
                      function: intl.formatMessage({
                        id: "cookieConsent.cookies.count",
                      }),
                      url: "https://cookiedatabase.org/cookie/google-analytics/_gid/",
                    },
                    {
                      name: "_ga",
                      expiry: `2 ${intl.formatMessage({
                        id: "cookieConsent.years",
                      })}`,
                      function: intl.formatMessage({
                        id: "cookieConsent.cookies.count",
                      }),
                      url: "https://cookiedatabase.org/cookie/google-analytics/_ga/",
                    },
                    {
                      name: "_ga_*",
                      expiry: `1 ${intl.formatMessage({
                        id: "cookieConsent.year",
                      })}`,
                      function: intl.formatMessage({
                        id: "cookieConsent.cookies.count",
                      }),
                      url: "https://cookiedatabase.org/cookie/google-analytics/_ga_/",
                    },
                    {
                      name: "_gat_gtag_UA_*",
                      expiry: `1 ${intl.formatMessage({
                        id: "cookieConsent.minute",
                      })}`,
                      function: intl.formatMessage({
                        id: "cookieConsent.cookies.uniqueStore",
                      }),
                      url: "https://cookiedatabase.org/cookie/google-analytics/_gat_gtag_ua_-2/",
                    },
                  ].map((cookie, index) => (
                    <Box key={index}>
                      <Link
                        href={cookie.url}
                        target="_blank"
                        style={{ color: "#2EA3F2" }}
                      >
                        {cookie.name}
                      </Link>
                      <Text>
                        <FormattedMessage id="cookieConsent.expiry" />:{" "}
                        {cookie.expiry}
                      </Text>
                      <Text>
                        <FormattedMessage id="cookieConsent.function" />:{" "}
                        {cookie.function}
                      </Text>
                    </Box>
                  ))}
                </VStack>
              </Box>
            </VStack>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h3>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Checkbox>
                  <Heading as="h3" size="md">
                    Divi (Elegant Themes)
                  </Heading>
                </Checkbox>
                <Text>
                  <FormattedMessage id="cookieConsent.functional" />
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h3>
          <AccordionPanel pb={4}>
            <VStack align="start" spacing={4}>
              <Box>
                <Heading as="h4" size="sm">
                  <FormattedMessage id="cookieConsent.use" />
                </Heading>
                <Text>
                  <FormattedMessage id="cookieConsent.divi" />{" "}
                  <Link
                    href="https://cookiedatabase.org/service/divi-elegant-themes/"
                    target="_blank"
                    style={{ color: "#2EA3F2" }}
                  >
                    <FormattedMessage id="cookieConsent.readMore" />
                  </Link>
                </Text>
              </Box>
              <Box>
                <Heading as="h4" size="sm">
                  <FormattedMessage id="cookieConsent.share" />
                </Heading>
                <Text>
                  <FormattedMessage id="cookieConsent.noShare" />
                </Text>
              </Box>
              <Box>
                <Heading as="h4" size="sm">
                  Cookies
                </Heading>
                <VStack align="start" spacing={2}>
                  <Box>
                    <Link
                      href="https://cookiedatabase.org/cookie/divi-elegant-themes/et-editor-available-post/"
                      target="_blank"
                      style={{ color: "#2EA3F2" }}
                    >
                      et-editor-available-post-*
                    </Link>
                    <Text>
                      <FormattedMessage id="cookieConsent.expirySession" />
                    </Text>
                    <Text>
                      <FormattedMessage id="cookieConsent.functionNotAvailable" />
                    </Text>
                  </Box>
                </VStack>
              </Box>
            </VStack>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h3>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Checkbox>
                  <Heading as="h3" size="md">
                    WPML
                  </Heading>
                </Checkbox>
                <Text>
                  <FormattedMessage id="cookieConsent.functional" />
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h3>
          <AccordionPanel pb={4}>
            <VStack align="start" spacing={4}>
              <Box>
                <Heading as="h4" size="sm">
                  <FormattedMessage id="cookieConsent.use" />
                </Heading>
                <Text>
                  <FormattedMessage id="cookieConsent.wpmlUse" />{" "}
                  <Link
                    href="https://cookiedatabase.org/service/wpml/"
                    target="_blank"
                    style={{ color: "#2EA3F2" }}
                  >
                    <FormattedMessage id="cookieConsent.readMore" />
                  </Link>
                </Text>
              </Box>
              <Box>
                <Heading as="h4" size="sm">
                  <FormattedMessage id="cookieConsent.share" />
                </Heading>
                <Text>
                  <FormattedMessage id="cookieConsent.noShare" />
                </Text>
              </Box>
              <Box>
                <Heading as="h4" size="sm">
                  Cookies
                </Heading>
                <VStack align="start" spacing={2}>
                  <Box>
                    <Link
                      href="https://cookiedatabase.org/cookie/wpml/wp-wpml_current_language/"
                      target="_blank"
                      style={{ color: "#2EA3F2" }}
                    >
                      wp-wpml_current_language
                    </Link>
                    <Text>
                      <FormattedMessage id="cookieConsent.expireDay" />
                    </Text>
                    <Text>
                      <FormattedMessage id="cookieConsent.saveConfig" />
                    </Text>
                  </Box>
                </VStack>
              </Box>
            </VStack>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h3>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Checkbox>
                  <Heading as="h3" size="md">
                    <FormattedMessage id="cookieConsent.varius" />
                  </Heading>
                </Checkbox>
                <Text>
                  <FormattedMessage id="cookieConsent.investigation" />
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h3>
          <AccordionPanel pb={4}>
            <VStack align="start" spacing={4}>
              <Box>
                <Heading as="h4" size="sm">
                  <FormattedMessage id="cookieConsent.use" />
                </Heading>
                <Text>
                  <FormattedMessage id="cookieConsent.notAvailable" />
                </Text>
              </Box>
              <Box>
                <Heading as="h4" size="sm">
                  <FormattedMessage id="cookieConsent.share" />
                </Heading>
                <Text>
                  <FormattedMessage id="cookieConsent.pending" />
                </Text>
              </Box>
              <Box>
                <Heading as="h4" size="sm">
                  Cookies
                </Heading>
                <VStack align="start" spacing={2}>
                  {[
                    "continueReview",
                    "wp-settings-time-1",
                    "et-saved-post-723-bb",
                    "et_builder_product_version",
                    "et_fb_clipboard_styles_style",
                    "wistia-video-progress-oegnwrdag1",
                    "lastClipboardTimestamp",
                    "rank-math-option-titles-index",
                    "rank-math-option-sitemap-index",
                    "et_fb_clipboard_module_section",
                    "undefined",
                    "et_fb_module_data",
                    "et-cloud.viewMode",
                    "wistia",
                    "WP_DATA_USER_1",
                    "rank-math-option-search-index",
                    "loglevel",
                    "rank-math-option-general-index",
                    "et-pb-recent-items-colors",
                    "et-saved-post-1490-bb",
                    "wp-autosave-1",
                    "et-editing-post-1232-fb",
                    "et-saved-post-1232-fb",
                    "et-saved-post-1493-bb",
                    "et-saved-post-1342-bb",
                    "et-editing-post-1378-fb",
                    "et-saved-post-1378-fb",
                    "et-saved-post-1502-bb",
                    "et-saved-post-1215-bb",
                    "et-saved-post-1503-bb",
                  ].map((cookieName, index) => (
                    <Box key={index}>
                      <Text fontWeight="bold">{cookieName}</Text>
                      <Text>
                        <FormattedMessage id="cookieConsent.expireNotAvailable" />
                      </Text>
                      <Text>
                        <FormattedMessage id="cookieConsent.functionNotAvailable" />
                      </Text>
                    </Box>
                  ))}
                </VStack>
              </Box>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default CookieConsent;
