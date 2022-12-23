import styled from "styled-components";

export const Wrapper = styled.footer`
  font-family: "Proxima Nova";
  background-color: #f9f9f9;
  font-weight: normal !important;
  margin: 0;
  height: auto;
  padding: 0;
  padding-top: 2rem;
  overflow: hidden;
`;

export const DividerWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
`;

export const Shape = styled.svg`
  position: relative;
  display: block;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const Cover = styled.div`
  margin-top: -0.6%;
  margin-bottom: 0;
  padding: 2.5rem 2rem;
  background-color: #20388B;
  font-size: 1.2rem;
  color: #ffffff;
`;

export const First_Container = styled.div`
  /* flex: 44.7%; */
  flex: 1;
  & ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 1rem 1.5rem;
    list-style: none;
    padding: 0;
    max-width: 40rem;
  }
  & a {
    font-family: "Filson Pro";
    color: #B83236;
    text-decoration: none;
    font-size: 1rem;
  }
  & a:hover {
    color: #A3A1A2;
  }
  @media only screen and (max-width: 960px) {
    margin: auto;
    & ul {
      display: block;
    }
    & li {
      padding-top: 1rem;
      text-align: center;
    }
  }
`;
export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  @media only screen and (max-width: 960px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Second_Container = styled.div`
  flex: 1;
  display: flex;
  @media only screen and (max-width: 960px) {
    flex-direction: column;
  }
`;
export const Third_Container = styled.div`
  flex: 1;
  display: flex;
  gap: 2rem;
  @media only screen and (max-width: 1240px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

export const Socials = styled.div`
  flex: 1;
  & ul {
    display: flex;
    gap: 1rem;
    flex-direction: row;
    list-style: none;
    padding: 0;
    justify-content: center;
    margin-top: 0;
    align-items: top;
  }
  & ul li a {
    height: 2.5rem;
    width: 2.5rem;
  }
`;
export const IconContainer = styled.div`
  height: 2.5rem;
  width: 2.5rem;
`;

export const MailingContainer = styled.div`
  flex: 1.5;
  height: 100%;
  display: flex;
  justify-content: center;
  & form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  & form div {
    display: flex;
    flex-direction: row;
  }

  & form input[type="submit"] {
    background-color: #4582c3;
    color: white;
    border: none;
    border-radius: 0;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    -webkit-border-top-right-radius: 5px;
    -webkit-border-bottom-right-radius: 5px;
    -webkit-border-top-left-radius: 0px;
    -webkit-border-bottom-left-radius: 0px;
    -moz-border-top-right-radius: 5px;
    -moz-border-bottom-right-radius: 5px;
    -moz-border-top-left-radius: 0px;
    -moz-border-bottom-left-radius: 0px;
    padding: 8px 14px;
    font-family: "Proxima Nova";
    transition: all 0.2s;
  }

  & form input[type="submit"]:hover {
    background-color: #346497;
    cursor: pointer;
    transition: all 0.2s;
  }

  & form div input[type="email"] {
    margin: 0px;
    padding: 8px 14px;
    width: 90%;
    outline: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    -webkit-border-top-left-radius: 5px;
    -webkit-border-bottom-left-radius: 5px;
    -webkit-border-top-right-radius: 0px;
    -webkit-border-bottom-right-radius: 0px;
    -moz-border-top-left-radius: 5px;
    -moz-border-bottom-left-radius: 5px;
    -moz-border-top-right-radius: 0px;
    -moz-border-bottom-right-radius: 0px;
    border: #4582c3 0.4px solid;
    font-family: "Proxima Nova";
    color: #242424;
  }

  @media only screen and (max-width: 960px) {
    & form input[type="submit"],
    & form div input[type="email"] {
      border-radius: 0;
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
      -webkit-border-top-right-radius: 0px;
      -webkit-border-bottom-right-radius: 0px;
      -webkit-border-top-left-radius: 0px;
      -webkit-border-bottom-left-radius: 0px;
      -moz-border-top-right-radius: 0px;
      -moz-border-bottom-right-radius: 0px;
      -moz-border-top-left-radius: 0px;
      -moz-border-bottom-left-radius: 0px;
    }
  }

  @media only screen and (max-width: 1240px) {
    text-align: center;
  }
`;
export const CompanyContainer = styled.div`
  font-family: "Filson Pro";
  font-weight: normal;
  flex: 0.5;
  display: flex;
  justify-content: right;
  @media only screen and (max-width: 1240px) {
    justify-content: center;
  }
`;
