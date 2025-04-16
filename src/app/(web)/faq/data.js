import { Text } from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";

export const data = [
  {
    title: <FormattedMessage id="faq.register.title" />,
    questions: [
      {
        question: <FormattedMessage id="faq.register.question1" />,
        answer: <FormattedMessage id="faq.register.answer1" />,
        lists: [
          {
            type: "ordered",
            title: "IOS",
            items: [
              <FormattedMessage
                key="register-1"
                id="faq.register.list1.item1"
              />,
              <FormattedMessage
                key="register-2"
                id="faq.register.list1.item2"
              />,
              <FormattedMessage
                key="register-3"
                id="faq.register.list1.item3"
              />,
              <FormattedMessage
                key="register-4"
                id="faq.register.list1.item4"
              />,
            ],
          },
          {
            type: "ordered",
            title: "ANDROID",
            items: [
              <FormattedMessage
                key="register-5"
                id="faq.register.list2.item1"
              />,
              <FormattedMessage
                key="register-6"
                id="faq.register.list2.item2"
              />,
              <FormattedMessage
                key="register-7"
                id="faq.register.list2.item3"
              />,
              <FormattedMessage
                key="register-8"
                id="faq.register.list2.item4"
              />,
            ],
          },
        ],
      },
      {
        question: <FormattedMessage id="faq.register.question2" />,
        answer: <FormattedMessage id="faq.register.answer2" />,
      },
      {
        question: <FormattedMessage id="faq.register.question3" />,
        answer: (
          <>
            <FormattedMessage id="faq.register.answer3.text1" />
            <br /> <br />
            <FormattedMessage id="faq.register.answer3.text2" />
          </>
        ),
      },
      {
        question: <FormattedMessage id="faq.register.question4" />,
        answer: (
          <>
            <FormattedMessage id="faq.register.answer4.text1" />
            <br /> <br />
            <FormattedMessage id="faq.register.answer4.text2" />
          </>
        ),
      },
      {
        question: <FormattedMessage id="faq.register.question5" />,
        answer: <FormattedMessage id="faq.register.answer5" />,
      },
    ],
  },
  {
    title: <FormattedMessage id="faq.filters.title" />,
    questions: [
      {
        question: <FormattedMessage id="faq.filters.question1" />,
        answer: <FormattedMessage id="faq.filters.answer1" />,
      },
      {
        question: <FormattedMessage id="faq.filters.question2" />,
        answer: (
          <>
            <FormattedMessage id="faq.filters.answer2.text1" />{" "}
            <Text as="b">
              <FormattedMessage id="faq.filters.answer2.text2" />
            </Text>{" "}
            <FormattedMessage id="faq.filters.answer2.text3" />
          </>
        ),
      },
      {
        question: <FormattedMessage id="faq.filters.question3" />,
        answer: <FormattedMessage id="faq.filters.answer3" />,
      },
      {
        question: <FormattedMessage id="faq.filters.question4" />,
        answer: (
          <>
            <FormattedMessage id="faq.filters.answer4.text1" /> <br /> <br />
            <FormattedMessage id="faq.filters.answer4.text2" />
          </>
        ),
      },
      {
        question: <FormattedMessage id="faq.filters.question5" />,
        answer: (
          <>
            <FormattedMessage id="faq.filters.answer5.text1" /> <br /> <br />
            <FormattedMessage id="faq.filters.answer5.text2" />{" "}
          </>
        ),
      },
    ],
  },
  {
    title: <FormattedMessage id="faq.match.title" />,
    questions: [
      {
        question: <FormattedMessage id="faq.match.question1" />,
        answer: <FormattedMessage id="faq.match.answer1" />,
      },
      {
        question: <FormattedMessage id="faq.match.question2" />, //,
        answer: (
          <>
            <FormattedMessage id="faq.match.answer2.text1" />
            <br />
            <br />
            <FormattedMessage id="faq.match.answer2.text2" />
          </>
        ),
      },
      {
        question: <FormattedMessage id="faq.match.question3" />,
        answer: <FormattedMessage id="faq.match.answer3" />,
      },
      {
        question: <FormattedMessage id="faq.match.question4" />,
        answer: <FormattedMessage id="faq.match.answer4" />,
      },
    ],
  },
  {
    title: <FormattedMessage id="faq.profile.title" />,
    questions: [
      {
        question: <FormattedMessage id="faq.profile.question1" />,
        answer: <FormattedMessage id="faq.profile.answer1" />,
      },
      {
        question: <FormattedMessage id="faq.profile.question2" />,
        answer: (
          <>
            <FormattedMessage id="faq.profile.answer2.text1" />
            <br />
            <br />
            <FormattedMessage id="faq.profile.answer2.text2" />
          </>
        ),
      },
      {
        question: <FormattedMessage id="faq.profile.question3" />,
        answer: <FormattedMessage id="faq.profile.answer3" />,
      },
      {
        question: <FormattedMessage id="faq.profile.question4" />,
        answer: <FormattedMessage id="faq.profile.answer4" />,
      },
    ],
  },
  {
    title: <FormattedMessage id="faq.interests.title" />,
    questions: [
      {
        question: <FormattedMessage id="faq.interests.question1" />,
        answer: (
          <>
            <FormattedMessage id="faq.interests.answer1.text1" />
            <br /> <br />
            <FormattedMessage id="faq.interests.answer1.text2" />
          </>
        ),
      },
      {
        question: <FormattedMessage id="faq.interests.question2" />,
        answer: <FormattedMessage id="faq.interests.answer2" />,
      },
      {
        question: <FormattedMessage id="faq.interests.question3" />,
        answer: (
          <>
            <FormattedMessage id="faq.interests.answer3.text1" />
            <br /> <br />
            <FormattedMessage id="faq.interests.answer3.text2" />
          </>
        ),
      },
      {
        question: <FormattedMessage id="faq.interests.question4" />,
        answer: (
          <>
            <FormattedMessage id="faq.interests.answer3.text1" />
            <br /> <br />
            <FormattedMessage id="faq.interests.answer3.text2" />
          </>
        ),
      },
      {
        question: <FormattedMessage id="faq.interests.question5" />,
        answer: <FormattedMessage id="faq.interests.answer5" />,
      },
      {
        question: <FormattedMessage id="faq.interests.question6" />,
        answer: <FormattedMessage id="faq.interests.answer6" />,
      },
      {
        question: <FormattedMessage id="faq.interests.question7" />,
        answer: (
          <>
            <FormattedMessage id="faq.interests.answer3.text1" />
            <br /> <br />
            <FormattedMessage id="faq.interests.answer3.text2" />
          </>
        ),
      },
    ],
  },
  {
    title: <FormattedMessage id="faq.subscriptions.title" />,
    questions: [
      {
        question: <FormattedMessage id="faq.subscriptions.question1" />,
        answer: (
          <>
            <FormattedMessage id="faq.subscriptions.answer1.text1" />
            <br /> <br />
            <FormattedMessage id="faq.subscriptions.answer1.text2" />
          </>
        ),
        lists: [
          {
            type: "unordered",
            title: "",
            items: [
              <FormattedMessage
                key="subscriptions-1"
                id="faq.subscriptions.list1.item1"
              />,
              <FormattedMessage
                key="subscriptions-2"
                id="faq.subscriptions.list1.item2"
              />,
              <FormattedMessage
                key="subscriptions-3"
                id="faq.subscriptions.list1.item3"
              />,
              <FormattedMessage
                key="subscriptions-4"
                id="faq.subscriptions.list1.item4"
              />,
              <FormattedMessage
                key="subscriptions-5"
                id="faq.subscriptions.list1.item5"
              />,
              <FormattedMessage
                key="subscriptions-6"
                id="faq.subscriptions.list1.item6"
              />,
              <FormattedMessage
                key="subscriptions-7"
                id="faq.subscriptions.list1.item7"
              />,
              <FormattedMessage
                key="subscriptions-8"
                id="faq.subscriptions.list1.item8"
              />,
              <FormattedMessage
                key="subscriptions-9"
                id="faq.subscriptions.list1.item9"
              />,
              <FormattedMessage
                key="subscriptions-10"
                id="faq.subscriptions.list1.item10"
              />,
            ],
          },
        ],
        note: <FormattedMessage id="faq.subscriptions.note" />,
      },
      {
        question: <FormattedMessage id="faq.subscriptions.question2" />,
        answer: <FormattedMessage id="faq.subscriptions.answer2" />,
        lists: [
          {
            type: "unordered",
            title: "",
            items: [
              <FormattedMessage
                key="subscriptions-11"
                id="faq.subscriptions.list2.item1"
              />,
              <FormattedMessage
                key="subscriptions-12"
                id="faq.subscriptions.list2.item2"
              />,
              <FormattedMessage
                key="subscriptions-13"
                id="faq.subscriptions.list2.item3"
              />,
              <FormattedMessage
                key="subscriptions-14"
                id="faq.subscriptions.list2.item4"
              />,
            ],
          },
        ],
        note: <FormattedMessage key="register-1" id="faq.subscriptions.note" />,
      },
    ],
  },
  { title: "", questions: [] },
  {
    title: <FormattedMessage id="faq.features.title" />,
    questions: [
      {
        question: <FormattedMessage id="faq.features.question1" />,
        answer: (
          <>
            <FormattedMessage id="faq.features.answer1.text1" />
            <br />
            <br />
            <FormattedMessage id="faq.features.answer1.text2" />
            <br />
            <br />
            <br />
            <FormattedMessage id="faq.features.answer1.text3" />
          </>
        ),
      },
      {
        question: <FormattedMessage id="faq.features.question2" />,
        answer: (
          <>
            <FormattedMessage id="faq.features.answer2.text1" />
            <br />
            <br />
            <FormattedMessage id="faq.features.answer2.text2" />
            <br />
            <br />
            <br />
            <FormattedMessage id="faq.features.answer2.text3" />
          </>
        ),
      },
      {
        question: <FormattedMessage id="faq.features.question3" />,
        answer: (
          <>
            <FormattedMessage id="faq.features.answer3.text1" />
            <br />
            <br />
            <FormattedMessage id="faq.features.answer3.text2" />
          </>
        ),
      },
      {
        question: <FormattedMessage id="faq.features.question4" />,
        answer: (
          <>
            <FormattedMessage id="faq.features.answer4.text1" />
            <br />
            <br />
            <FormattedMessage id="faq.features.answer4.text2" />
          </>
        ),
      },
      {
        question: <FormattedMessage id="faq.features.question5" />,
        answer: (
          <>
            <FormattedMessage id="faq.features.answer5.text1" />
            <br />
            <br />
            <FormattedMessage id="faq.features.answer5.text2" />
          </>
        ),
      },
      {
        question: <FormattedMessage id="faq.features.question6" />,
        answer: (
          <>
            <FormattedMessage id="faq.features.answer6.text1" />
            <br />
            <br />
            <FormattedMessage id="faq.features.answer6.text2" />
          </>
        ),
      },
    ],
  },
  {
    title: <FormattedMessage id="faq.billing.title" />,
    questions: [
      {
        question: <FormattedMessage id="faq.billing.question1" />,
        answer: <FormattedMessage id="faq.billing.answer1" />,
      },
      {
        question: <FormattedMessage id="faq.billing.question2" />,
        answer: <FormattedMessage id="faq.billing.answer2" />,
      },
      {
        question: <FormattedMessage id="faq.billing.question3" />,
        answer: <FormattedMessage id="faq.billing.answer3" />,
      },
      {
        question: <FormattedMessage id="faq.billing.question4" />,
        answer: <FormattedMessage id="faq.billing.answer4" />,
      },
    ],
  },
  {
    title: <FormattedMessage id="faq.problems.title" />,
    questions: [
      {
        question: <FormattedMessage id="faq.problems.question1" />,
        answer: <FormattedMessage id="faq.problems.answer1" />,

        lists: [
          {
            type: "unordered",
            title: "",
            items: [
              <FormattedMessage
                key="problems-1"
                id="faq.problems.list1.item1"
              />,
              <FormattedMessage
                key="problems-2"
                id="faq.problems.list1.item2"
              />,
            ],
          },
        ],
        note: <FormattedMessage id="faq.problems.note1" />,
      },
      {
        question: <FormattedMessage id="faq.problems.question2" />,
        answer: <FormattedMessage id="faq.problems.answer2" />,
      },
      {
        question: <FormattedMessage id="faq.problems.question3" />,

        answer: <FormattedMessage id="faq.problems.answer3" />,
        lists: [
          {
            type: "ordered",
            title: "",
            items: [
              <FormattedMessage
                key="problems3-1"
                id="faq.problems.list3.item1"
              />,
              <FormattedMessage
                key="problems3-2"
                id="faq.problems.list3.item2"
              />,
              <FormattedMessage
                key="problems3-1"
                id="faq.problems.list3.item1"
              />,
              <FormattedMessage
                key="problems3-2"
                id="faq.problems.list3.item2"
              />,
              <FormattedMessage
                key="problems3-1"
                id="faq.problems.list3.item1"
              />,
            ],
          },
        ],
      },
      {
        question: <FormattedMessage id="faq.problems.question4" />,
        answer: <FormattedMessage id="faq.problems.answer4" />,
        lists: [
          {
            type: "unordered",
            title: "",
            items: [
              <FormattedMessage
                key="problems4-1"
                id="faq.problems.list4.item1"
              />,
              <FormattedMessage
                key="problems4-2"
                id="faq.problems.list4.item2"
              />,
            ],
          },
        ],
        note: <FormattedMessage id="faq.problems.note4" />,
      },
      {
        question: <FormattedMessage id="faq.problems.question5" />,

        answer: <FormattedMessage id="faq.problems.answer5" />,
      },
      {
        question: <FormattedMessage id="faq.problems.question6" />,
        answer: "",
        lists: [
          {
            type: "ordered",
            title: "",
            items: [
              <FormattedMessage
                key="problems6-1"
                id="faq.problems.list6.item1"
              />,
              <FormattedMessage
                key="problems6-2"
                id="faq.problems.list6.item2"
              />,
              <FormattedMessage
                key="problems6-3"
                id="faq.problems.list6.item3"
              />,
              <FormattedMessage
                key="problems6-4"
                id="faq.problems.list6.item4"
              />,
            ],
          },
        ],
      },
      {
        question: <FormattedMessage id="faq.problems.question7" />,
        answer: "",
        lists: [
          {
            type: "ordered",
            title: <FormattedMessage id="faq.problems.list7_1.title" />,
            items: [
              <FormattedMessage
                key="problems7-1-1"
                id="faq.problems.list7_1.item1"
              />,
              <FormattedMessage
                key="problems7-1-2"
                id="faq.problems.list7_1.item2"
              />,
              <FormattedMessage
                key="problems7-1-3"
                id="faq.problems.list7_1.item3"
              />,
              <FormattedMessage
                key="problems7-1-4"
                id="faq.problems.list7_1.item4"
              />,
            ],
          },
          {
            type: "ordered",
            title: <FormattedMessage id="faq.problems.list7_2.title" />,
            items: [
              <FormattedMessage
                key="problems7-2-1"
                id="faq.problems.list7_2.item1"
              />,
              <FormattedMessage
                key="problems7-2-2"
                id="faq.problems.list7_2.item2"
              />,
              <FormattedMessage
                key="problems7-2-3"
                id="faq.problems.list7_2.item3"
              />,
              <FormattedMessage
                key="problems7-2-4"
                id="faq.problems.list7_2.item4"
              />,
            ],
          },
        ],
      },
      {
        question: <FormattedMessage id="faq.problems.question8" />,
        answer: (
          <>
            <FormattedMessage id="faq.problems.answer8.text1" />
            <br />
            <FormattedMessage id="faq.problems.answer8.text2" />
            <br />
            <FormattedMessage id="faq.problems.answer8.text3" />
          </>
        ),
      },
      {
        question: <FormattedMessage id="faq.problems.question9" />,
        answer: (
          <>
            <Text as="b">IOS</Text>
            <br />
            <br />
            <FormattedMessage id="faq.problems.answer9.text1" />
            <br />
            <br />
            <FormattedMessage id="faq.problems.answer9.text2" />
            <br />
            <br />
            <Text as="b">Android</Text>
            <br />
            <br />
            <FormattedMessage id="faq.problems.answer9.text3" /> <br />
            <FormattedMessage id="faq.problems.answer9.text4" />
            <br /> <br />
            <FormattedMessage id="faq.problems.answer9.text5" />
          </>
        ),
      },
    ],
  },
  {
    title: <FormattedMessage id="faq.payProblems.title" />,
    questions: [
      {
        question: <FormattedMessage id="faq.payProblems.question1" />,
        answer: (
          <>
            <FormattedMessage id="faq.payProblems.answer1.text1" />
            <br />
            <FormattedMessage id="faq.payProblems.answer1.text2" />
            <br />
            <FormattedMessage id="faq.payProblems.answer1.text3" />
          </>
        ),
        lists: [
          {
            type: "ordered",
            title: "",
            items: [
              <FormattedMessage
                key="payProblems1-1"
                id="faq.payProblems.list1.item1"
              />,
              <FormattedMessage
                key="payProblems1-2"
                id="faq.payProblems.list1.item2"
              />,
              <FormattedMessage
                key="payProblems1-3"
                id="faq.payProblems.list1.item3"
              />,
              <FormattedMessage
                key="payProblems1-4"
                id="faq.payProblems.list1.item4"
              />,
            ],
          },
        ],
        note: <FormattedMessage id="faq.payProblems.note1" />,
      },
      {
        question: <FormattedMessage id="faq.payProblems.question2" />,
        answer: <FormattedMessage id="faq.payProblems.answer2" />,
      },
      {
        question: <FormattedMessage id="faq.payProblems.question3" />,
        answer: <FormattedMessage id="faq.payProblems.answer3" />,
      },
      {
        question: <FormattedMessage id="faq.payProblems.question4" />,
        answer: (
          <>
            <FormattedMessage id="faq.payProblems.answer4.text1" />
            <br />
            <br />
            <FormattedMessage id="faq.payProblems.answer4.text2" />
            <br />
            <br />
            <FormattedMessage id="faq.payProblems.answer4.text3" />
            <br />
            <br />
            <FormattedMessage id="faq.payProblems.answer4.text4" />
          </>
        ),
      },
      {
        question: <FormattedMessage id="faq.payProblems.question5" />,
        answer: <FormattedMessage id="faq.payProblems.answer5" />,
      },
    ],
  },
  { title: "", questions: [] },
  {
    title: <FormattedMessage id="faq.platformBilling.title" />,
    questions: [
      {
        question: <FormattedMessage id="faq.platformBilling.question1" />,
        answer: <FormattedMessage id="faq.platformBilling.answer1" />,
        lists: [
          {
            type: "ordered",
            title: "IOS",
            items: [
              <FormattedMessage
                key="iosList-1"
                id="faq.platformBilling.iosList.item1"
              />,
              <FormattedMessage
                key="iosList-2"
                id="faq.platformBilling.iosList.item2"
              />,
              <FormattedMessage
                key="iosList-3"
                id="faq.platformBilling.iosList.item3"
              />,
              <FormattedMessage
                key="iosList-4"
                id="faq.platformBilling.iosList.item4"
              />,
              <FormattedMessage
                key="iosList-5"
                id="faq.platformBilling.iosList.item5"
              />,
            ],
          },
          {
            type: "unordered",
            title: "Android",
            items: [
              <FormattedMessage
                key="androidList-1"
                id="faq.platformBilling.androidList.item1"
              />,
              <FormattedMessage
                key="androidList-2"
                id="faq.platformBilling.androidList.item2"
              />,
              <FormattedMessage
                key="androidList-3"
                id="faq.platformBilling.androidList.item3"
              />,
              <FormattedMessage
                key="androidList-4"
                id="faq.platformBilling.androidList.item4"
              />,
              <FormattedMessage
                key="androidList-5"
                id="faq.platformBilling.androidList.item5"
              />,
              <FormattedMessage
                key="androidList-6"
                id="faq.platformBilling.androidList.item6"
              />,
              <FormattedMessage
                key="androidList-7"
                id="faq.platformBilling.androidList.item7"
              />,
              <FormattedMessage
                key="androidList-8"
                id="faq.platformBilling.androidList.item8"
              />,
              <FormattedMessage
                key="androidList-9"
                id="faq.platformBilling.androidList.item9"
              />,
              <FormattedMessage
                key="androidList-10"
                id="faq.platformBilling.androidList.item10"
              />,
              <FormattedMessage
                key="androidList-11"
                id="faq.platformBilling.androidList.item11"
              />,
            ],
          },
        ],
      },
      {
        question: <FormattedMessage id="faq.platformBilling.question2" />,
        answer: <FormattedMessage id="faq.platformBilling.answer2" />,
        lists: [
          {
            type: "unordered",
            title: "IOS",
            items: [
              <FormattedMessage
                key="iosList2-1"
                id="faq.platformBilling.iosList2.item1"
              />,
            ],
          },
          {
            type: "unordered",
            title: "Android",
            items: [
              <FormattedMessage
                key="androidList2-1"
                id="faq.platformBilling.androidList2.item1"
              />,
              <FormattedMessage
                key="androidList2-2"
                id="faq.platformBilling.androidList2.item2"
              />,
            ],
          },
        ],
      },
    ],
  },
  {
    title: <FormattedMessage id="faq.payMethod.title" />,
    questions: [
      {
        question: <FormattedMessage id="faq.payMethod.question1" />,
        answer: "",
        lists: [
          {
            type: "unordered",
            items: [
              <FormattedMessage
                key="androidList2-1"
                id="faq.payMethod.list1.item1"
              />,
              <FormattedMessage key="list1-2" id="faq.payMethod.list1.item2" />,
              <FormattedMessage key="list1-3" id="faq.payMethod.list1.item3" />,
            ],
          },
        ],
      },
      {
        question: <FormattedMessage id="faq.payMethod.question2" />,
      },
      {
        question: <FormattedMessage id="faq.payMethod.question3" />,
        answer: <FormattedMessage id="faq.payMethod.answer3" />,
      },
      {
        question: <FormattedMessage id="faq.payMethod.question4" />,
        answer: "",
        lists: [
          {
            type: "ordered",
            items: [
              <FormattedMessage key="list4-1" id="faq.payMethod.list4.item1" />,
              <FormattedMessage key="list4-2" id="faq.payMethod.list4.item2" />,
              <FormattedMessage key="list4-3" id="faq.payMethod.list4.item3" />,
              <FormattedMessage key="list4-4" id="faq.payMethod.list4.item4" />,
              <FormattedMessage key="list4-5" id="faq.payMethod.list4.item5" />,
            ],
          },
        ],
      },
      {
        question: <FormattedMessage id="faq.payMethod.question5" />,
        answer: "",
        lists: [
          {
            type: "ordered",
            items: [
              <FormattedMessage key="list5-1" id="faq.payMethod.list5.item1" />,
              <FormattedMessage key="list5-2" id="faq.payMethod.list5.item2" />,
              <FormattedMessage key="list5-3" id="faq.payMethod.list5.item3" />,
              <FormattedMessage key="list5-4" id="faq.payMethod.list5.item4" />,
            ],
          },
        ],
      },
      {
        question: <FormattedMessage id="faq.payMethod.question6" />,
        answer: (
          <>
            <FormattedMessage id="faq.payMethod.answer6.text1" />
            <br />
            <FormattedMessage id="faq.payMethod.answer6.text2" />
          </>
        ),
      },
      {
        question: <FormattedMessage id="faq.payMethod.question7" />,
        answer: (
          <>
            <FormattedMessage id="faq.payMethod.answer7.text1" />
            <br />
            <FormattedMessage id="faq.payMethod.answer7.text2" />
            <br />
            <FormattedMessage id="faq.payMethod.answer7.text3" />
          </>
        ),
      },
      {
        question: <FormattedMessage id="faq.payMethod.question8" />,
        answer: <FormattedMessage id="faq.payMethod.answer8" />,
      },
      {
        question: <FormattedMessage id="faq.payMethod.question9" />,
        answer: (
          <>
            <FormattedMessage id="faq.payMethod.answer9.text1" />
            <br />
            <FormattedMessage id="faq.payMethod.answer9.text2" />
            <br />
            <FormattedMessage id="faq.payMethod.answer9.text3" />
          </>
        ),
      },
      {
        question: <FormattedMessage id="faq.payMethod.question10" />,
        answer: <FormattedMessage id="faq.payMethod.answer10" />,
      },
      {
        question: <FormattedMessage id="faq.payMethod.question11" />,
        answer: (
          <>
            <FormattedMessage id="faq.payMethod.answer11.text1" />
            <br />
            <FormattedMessage id="faq.payMethod.answer11.text2" />
            <br />
            <FormattedMessage id="faq.payMethod.answer11.text3" />
          </>
        ),
      },
      {
        question: <FormattedMessage id="faq.payMethod.question12" />,
        answer: (
          <>
            <FormattedMessage id="faq.payMethod.answer12.text1" />
            <br />
            <FormattedMessage id="faq.payMethod.answer12.text2" />
          </>
        ),
      },
      {
        question: <FormattedMessage id="faq.payMethod.question13" />,
        answer: (
          <>
            <FormattedMessage id="faq.payMethod.answer13.text1" />
            <br />
            <FormattedMessage id="faq.payMethod.answer13.text2" />
          </>
        ),
      },
      {
        question: <FormattedMessage id="faq.payMethod.question14" />,
        answer: <FormattedMessage id="faq.payMethod.answer14" />,
        lists: [
          {
            type: "ordered",
            items: [
              <FormattedMessage
                key="list14-1"
                id="faq.payMethod.list14.item1"
              />,
              <FormattedMessage
                key="list14-2"
                id="faq.payMethod.list14.item2"
              />,
              <FormattedMessage
                key="list14-3"
                id="faq.payMethod.list14.item3"
              />,
            ],
          },
        ],
      },
      {
        question: <FormattedMessage id="faq.payMethod.question15" />,
        answer: (
          <>
            <FormattedMessage id="faq.payMethod.answer15.text1" />
            <br />
            <FormattedMessage id="faq.payMethod.answer15.text2" />
          </>
        ),
      },
      {
        question: <FormattedMessage id="faq.payMethod.question16" />,
        answer: (
          <>
            <FormattedMessage id="faq.payMethod.answer16.text1" />
            <br />
            <FormattedMessage id="faq.payMethod.answer16.text2" />
          </>
        ),
      },
      {
        question: <FormattedMessage id="faq.payMethod.question17" />,
        answer: "",
        lists: [
          {
            type: "ordered",
            items: [
              <FormattedMessage
                key="list17-1"
                id="faq.payMethod.list17.item1"
              />,
              <FormattedMessage
                key="list17-2"
                id="faq.payMethod.list17.item2"
              />,
              <FormattedMessage
                key="list17-3"
                id="faq.payMethod.list17.item3"
              />,
              <FormattedMessage
                key="list17-4"
                id="faq.payMethod.list17.item4"
              />,
            ],
          },
        ],
      },
      {
        question: <FormattedMessage id="faq.payMethod.question18" />,
        answer: <FormattedMessage id="faq.payMethod.answer18" />,
        lists: [
          {
            type: "unordered",
            items: [
              <FormattedMessage
                key="list18-1"
                id="faq.payMethod.list18.item1"
              />,
              <FormattedMessage
                key="list18-2"
                id="faq.payMethod.list18.item2"
              />,
              <FormattedMessage
                key="list18-3"
                id="faq.payMethod.list18.item3"
              />,
              <FormattedMessage
                key="list18-4"
                id="faq.payMethod.list18.item4"
              />,
            ],
          },
        ],
      },
      {
        question: <FormattedMessage id="faq.payMethod.question19" />,
        answer: <FormattedMessage id="faq.payMethod.answer19" />,
        lists: [
          {
            type: "ordered",
            items: [
              <FormattedMessage
                key="list19-1"
                id="faq.payMethod.list19.item1"
              />,
              <FormattedMessage
                key="list19-2"
                id="faq.payMethod.list19.item2"
              />,
              <FormattedMessage
                key="list19-3"
                id="faq.payMethod.list19.item3"
              />,
              <FormattedMessage
                key="list19-4"
                id="faq.payMethod.list19.item4"
              />,
            ],
          },
        ],
      },
      {
        question: <FormattedMessage id="faq.payMethod.question20" />,
        answer: (
          <>
            <FormattedMessage id="faq.payMethod.answer20.text1" />
            <br />
            <FormattedMessage id="faq.payMethod.answer20.text2" />
          </>
        ),
      },
      {
        question: <FormattedMessage id="faq.payMethod.question21" />,
        answer: <FormattedMessage id="faq.payMethod.answer21" />,
      },
      {
        question: <FormattedMessage id="faq.payMethod.question22" />,
        answer: "",
        lists: [
          {
            type: "unordered",
            items: [
              <FormattedMessage
                key="list22-1"
                id="faq.payMethod.list22.item1"
              />,
            ],
          },
        ],
      },
      {
        question: <FormattedMessage id="faq.payMethod.question23" />,
        answer: "",
        lists: [
          {
            type: "unordered",
            items: [
              <FormattedMessage
                key="list23-1"
                id="faq.payMethod.list23.item1"
              />,
            ],
          },
        ],
      },
      {
        question: <FormattedMessage id="faq.payMethod.question24" />,
        answer: <FormattedMessage id="faq.payMethod.answer24" />,
        lists: [
          {
            type: "unordered",
            items: [
              <FormattedMessage
                key="list24-1"
                id="faq.payMethod.list24.item1"
              />,
              <FormattedMessage
                key="list24-2"
                id="faq.payMethod.list24.item2"
              />,
            ],
          },
        ],
      },
      {
        question: <FormattedMessage id="faq.payMethod.question25" />,
        answer: <FormattedMessage id="faq.payMethod.answer25" />,
        lists: [
          {
            type: "unordered",
            items: [
              <FormattedMessage
                key="list25-1"
                id="faq.payMethod.list25.item1"
              />,
              <FormattedMessage
                key="list25-2"
                id="faq.payMethod.list25.item2"
              />,
              <FormattedMessage
                key="list25-3"
                id="faq.payMethod.list25.item3"
              />,
            ],
          },
        ],
        note: (
          <>
            <FormattedMessage id="faq.payMethod.note25.text1" />
            <br />
            <br />
            <FormattedMessage id="faq.payMethod.note25.text2" />
            <br /> <br /> <br />
            <FormattedMessage id="faq.payMethod.note25.text3" />
          </>
        ),
      },
      {
        question: <FormattedMessage id="faq.payMethod.question26" />,
        answer: <FormattedMessage id="faq.payMethod.answer26" />,
      },
      {
        question: <FormattedMessage id="faq.payMethod.question27" />,
        answer: (
          <>
            <FormattedMessage id="faq.payMethod.answer27.text1" />
            <br />
            <FormattedMessage id="faq.payMethod.answer27.text2" />
            <br />
            <FormattedMessage id="faq.payMethod.answer27.text3" />
          </>
        ),
      },
    ],
  },
  {
    title: <FormattedMessage id="faq.payFunctions.title" />,
    questions: [
      {
        question: <FormattedMessage id="faq.payFunctions.question1" />,
        answer: (
          <>
            <FormattedMessage id="faq.payFunctions.answer1.text1" />
            <br />
            <FormattedMessage id="faq.payFunctions.answer1.text2" />
            <br />
            <FormattedMessage id="faq.payFunctions.answer1.text3" />
          </>
        ),
      },
      {
        question: <FormattedMessage id="faq.payFunctions.question2" />,
        answer: "",
        lists: [
          {
            type: "ordered",
            items: [
              <FormattedMessage
                key="list2-1"
                id="faq.payFunctions.list2.item1"
              />,
              <FormattedMessage
                key="list2-2"
                id="faq.payFunctions.list2.item2"
              />,
              <FormattedMessage
                key="list2-3"
                id="faq.payFunctions.list2.item3"
              />,
              <FormattedMessage
                key="list2-3"
                id="faq.payFunctions.list2.item4"
              />,
            ],
          },
        ],
        note: <FormattedMessage id="faq.payFunctions.note2" />,
      },
      {
        question: <FormattedMessage id="faq.payFunctions.question3" />,
        answer: (
          <>
            <Text as="b">PowerSweet</Text>
            <br />
            <br />
            <FormattedMessage id="faq.payFunctions.answer3.text1" />
            <br />
            <FormattedMessage id="faq.payFunctions.answer3.text2" />
          </>
        ),
      },
      {
        question: <FormattedMessage id="faq.payFunctions.question4" />,
        answer: <FormattedMessage id="faq.payFunctions.answer4" />,
      },
    ],
  },
  { title: "", questions: [] },
  {
    title: <FormattedMessage id="faq.profileProblems.title" />,
    questions: [
      {
        question: <FormattedMessage id="faq.profileProblems.question1" />,
        answer: <FormattedMessage id="faq.profileProblems.answer1" />,
        lists: [
          {
            type: "ordered",
            items: [
              <FormattedMessage
                key="list1-1"
                id="faq.profileProblems.list1.item1"
              />,
              <FormattedMessage
                key="list1-2"
                id="faq.profileProblems.list1.item2"
              />,
              <FormattedMessage
                key="list1-3"
                id="faq.profileProblems.list1.item3"
              />,
              <FormattedMessage
                key="list1-3"
                id="faq.profileProblems.list1.item4"
              />,
            ],
          },
        ],
      },
      {
        question: <FormattedMessage id="faq.profileProblems.question2" />,
        answer: <FormattedMessage id="faq.profileProblems.answer2" />,
      },
      {
        question: <FormattedMessage id="faq.profileProblems.question3" />,
        answer: (
          <>
            <FormattedMessage id="faq.profileProblems.answer3.text1" /> <br />
            <FormattedMessage id="faq.profileProblems.answer3.text2" />
            <br />
            <FormattedMessage id="faq.profileProblems.answer3.text3" />
          </>
        ),
      },
      {
        question: <FormattedMessage id="faq.profileProblems.question4" />,
        answer: (
          <>
            <FormattedMessage id="faq.profileProblems.answer4.text1" /> <br />
            <FormattedMessage id="faq.profileProblems.answer4.text2" />
          </>
        ),
      },
      {
        question: <FormattedMessage id="faq.profileProblems.question5" />,
        answer: (
          <>
            <FormattedMessage id="faq.profileProblems.answer5.text1" /> <br />
            <FormattedMessage id="faq.profileProblems.answer5.text2" />
          </>
        ),
      },
      {
        question: <FormattedMessage id="faq.profileProblems.question6" />,
        answer: "",
        lists: [
          {
            type: "ordered",
            items: [
              <FormattedMessage
                key="list6-1"
                id="faq.profileProblems.list6.item1"
              />,
              <FormattedMessage
                key="list6-2"
                id="faq.profileProblems.list6.item2"
              />,
              <FormattedMessage
                key="list6-3"
                id="faq.profileProblems.list6.item3"
              />,
              <FormattedMessage
                key="list6-3"
                id="faq.profileProblems.list6.item4"
              />,
            ],
          },
        ],
        note: <FormattedMessage id="faq.profileProblems.note6" />,
      },
    ],
  },
  { title: "", questions: [] },
  {
    title: <FormattedMessage id="faq.editionProblems.title" />,
    questions: [
      {
        question: <FormattedMessage id="faq.editionProblems.question1" />,
        answer: <FormattedMessage id="faq.editionProblems.answer1" />,
        lists: [
          {
            type: "ordered",
            items: [
              <FormattedMessage
                key="list1-1"
                id="faq.editionProblems.list1.item1"
              />,
              <FormattedMessage
                key="list1-2"
                id="faq.editionProblems.list1.item2"
              />,
              <FormattedMessage
                key="list1-3"
                id="faq.editionProblems.list1.item3"
              />,
              <FormattedMessage
                key="list1-3"
                id="faq.editionProblems.list1.item4"
              />,
            ],
          },
        ],
      },
      {
        question: <FormattedMessage id="faq.editionProblems.question2" />,
        answer: <FormattedMessage id="faq.editionProblems.answer2" />,
      },
      {
        question: <FormattedMessage id="faq.editionProblems.question3" />,
        answer: <FormattedMessage id="faq.editionProblems.answer3" />,
      },
    ],
  },
  { title: "", questions: [] },
  {
    title: <FormattedMessage id="faq.matches.title" />,
    questions: [
      {
        question: <FormattedMessage id="faq.matches.question1" />,
        answer: <FormattedMessage id="faq.matches.answer1" />,
      },
      {
        question: <FormattedMessage id="faq.matches.question2" />,
        answer: <FormattedMessage id="faq.matches.answer2" />,
        lists: [
          {
            type: "ordered",
            items: [
              <FormattedMessage key="list2-1" id="faq.matches.list2.item1" />,
              <FormattedMessage key="list2-2" id="faq.matches.list2.item2" />,
              <FormattedMessage key="list2-3" id="faq.matches.list2.item3" />,
              <FormattedMessage key="list2-3" id="faq.matches.list2.item4" />,
            ],
          },
        ],
        note: <FormattedMessage id="faq.matches.note2" />,
      },
      {
        question: <FormattedMessage id="faq.matches.question3" />,
        answer: <FormattedMessage id="faq.matches.answer3" />,
        lists: [
          {
            type: "ordered",
            items: [
              <FormattedMessage key="list3-1" id="faq.matches.list3.item1" />,
              <FormattedMessage key="list3-2" id="faq.matches.list3.item2" />,
              <FormattedMessage key="list3-3" id="faq.matches.list3.item3" />,
            ],
          },
        ],
        note: <FormattedMessage id="faq.matches.note3" />,
      },
    ],
  },
  { title: "", questions: [] },
];
