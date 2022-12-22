import React from "react";
import { Wrapper, Title, Paragraph } from "./SegmentStyles";

const Segment = (props) => {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <Paragraph>{props.paragraph}</Paragraph>
    </Wrapper>
  );
};
export default Segment;
