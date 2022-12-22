import styled from "styled-components";

export const Wrapper = styled.section`
  display: block;
  min-height: 100%;
  min-width: 100%;
  padding: 0;
  padding-top: 2rem;
  margin: 0;
  background-color: #f9f9f9;
`;

export const FAQList = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
  margin: auto;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Header = styled.h2`
  padding-top: 60px;
  font-family: "Filson Pro";
  font-weight: normal;
  color: #242424;
  text-align: center;
  font-size: 3rem;
  margin-top: 0;
`;

export const Link = styled.a`
  font-family: "Proxima Nova";
  font-weight: bold !important;
  color: #3973b1;
  -webkit-text-decoration: none;
  text-decoration: none;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;

  &:hover {
    color: #2d65a0;
  }
`;
