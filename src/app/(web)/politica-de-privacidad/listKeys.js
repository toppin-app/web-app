import generateListKeys from "@/utils/generateListKeys";

const listKeys = {
  purposesListItems: generateListKeys("privacyPolicy.purposesList", 11),
  legalBasisListItems: generateListKeys("privacyPolicy.legalBasisList", 3),
  recipientsListItems: generateListKeys("privacyPolicy.recipientsList", 5),
  dataTypesListItems: generateListKeys("privacyPolicy.dataTypesList", 10),
};

export default listKeys;
