import React from "react";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Checkbox,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";

const CookieConsentManager = () => {
  return (
    <Box id="cmplz-manage-consent-container">
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <HStack justifyContent="space-between">
                  <Text fontWeight="bold">Funcional</Text>
                  <HStack>
                    <Checkbox isChecked={true} isReadOnly>
                      <FormattedMessage id="cookieConsentManager.functional" />
                    </Checkbox>
                    <Text fontSize="sm">
                      <FormattedMessage id="cookieConsentManager.alwaysOn" />
                    </Text>
                  </HStack>
                </HStack>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>
              <FormattedMessage id="cookieConsentManager.functionalText" />
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <HStack justifyContent="space-between">
                  <Text fontWeight="bold">
                    <FormattedMessage id="cookieConsentManager.preferences" />
                  </Text>
                  <Checkbox>
                    <FormattedMessage id="cookieConsentManager.preferences" />
                  </Checkbox>
                </HStack>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>
              <FormattedMessage id="cookieConsentManager.preferencesText" />
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <HStack justifyContent="space-between">
                  <Text fontWeight="bold">
                    <FormattedMessage id="cookieConsentManager.statistics" />
                  </Text>
                  <Checkbox>
                    <FormattedMessage id="cookieConsentManager.statistics" />
                  </Checkbox>
                </HStack>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <VStack align="start" spacing={4}>
              <Text>
                <FormattedMessage id="cookieConsentManager.statisticsText1" />
              </Text>
              <Text>
                <FormattedMessage id="cookieConsentManager.statisticsText2" />
              </Text>
            </VStack>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <HStack justifyContent="space-between">
                  <Text fontWeight="bold">Marketing</Text>
                  <Checkbox>Marketing</Checkbox>
                </HStack>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>
              <FormattedMessage id="cookieConsentManager.marketingText" />
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default CookieConsentManager;
