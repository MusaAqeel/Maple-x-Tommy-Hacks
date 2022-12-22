import { Wrapper, Title, Paragraph } from "./CardStyles";
import React from "react";

const Card = (props) => {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <Paragraph>{props.paragraph}</Paragraph>
    </Wrapper>
  );
};

export default Card;
