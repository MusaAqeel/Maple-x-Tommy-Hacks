import styled from "styled-components";

export const Wrapper = styled.article`
  display: block;
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: #000000;
  text-decoration: none;
  border: 2px solid #eaeaea;
  border-radius: 10px;
  height: 250px;
  width: 25rem;

  @media (max-width: 600px) {
    padding: 1rem;
    width: 80%;
  }
`;

export const Title = styled.h3`
  font-family: "Proxima Nova";
  font-weight: bold;
  color: #B83236;
  margin: 0 0 1rem 0;
  font-size: 1.3rem;
  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

export const Paragraph = styled.p`
  font-family: "Proxima Nova";
  font-weight: normal;
  color: #242424;
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.5;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;
