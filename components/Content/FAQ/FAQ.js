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
        title="Where do I sign up and submit my project?"
        paragraph={
          <span>
            You will be submitting your project on 
            <Link href="https://maplehs-hacks2023.devpost.com/?ref_content=default&ref_feature=challenge&ref_medium=portfolio">
              {" "}
              devpost!
            </Link>{" "}
          
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
