import React from "react";
import { Wrapper, Header, Link, FAQList } from "./FAQStyles";
import Card from "./Card/Card";

const FAQ = (props) => {
  const faqs = require("./faqs.json");

  const faqList = faqs.map((faq, i) => (
    <Card key={i} title={faq.question} paragraph={faq.answer} />
  ));

  // If you want to add a hyperlink, you need to manually add a card component below.
  const manualCards = (
    <>
      <Card
        title="I still have a question..."
        paragraph={
          <span>
            We’d be happy to help! Send the inquiry over to
            <Link href="mailto:mxthacks@gmail.com">
              {" "}
              mxthacks@gmail.com
            </Link>{" "}
            and we’ll get back to you as soon as possible.
          </span>
        }
      />
    </>
  );

  return (
    <Wrapper>
      <div id="faq">
        <Header>Frequently Asked Questions</Header>
        <FAQList>
          {faqList}
          {manualCards}
        </FAQList>
      </div>
    </Wrapper>
  );
};

export default FAQ;
