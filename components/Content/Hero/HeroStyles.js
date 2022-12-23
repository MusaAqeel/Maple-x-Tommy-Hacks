import styled from "styled-components";

export const Wrapper = styled.article`
  position: relative;
  flex: 1;
  padding-top: 11.76vh;
  min-height: 100vh;
  min-width: 100%;
  z-index: 4;
`;

export const Content = styled.section`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  -webkit-box-align: center;
  z-index: 4;
`;
export const LogoContainer = styled.div`
  max-width: 36.56rem;
  z-index: 4;
`;
export const Title = styled.h1`
  font-family: "Filson Pro";
  font-weight: normal !important;
  font-size: 3rem;
  color: #242424;
  margin: 0;
  z-index: 4;
  text-align: center;

`;
export const Star = styled.span`
  font-size: 1.5rem;
`;
export const SubTitle = styled.p`
  font-family: "Proxima Nova";
  font-weight: normal !important;
  color: #f573a0;
  font-size: 1.75rem;
  margin: 0;
  z-index: 4;
`;
export const Date = styled.p`
  font-family: "Proxima Nova";
  font-weight: normal !important;
  color: #242424;
  font-size: 1.225rem;
  margin: 5px 0;
  z-index: 4;
`;
export const ApplyBtn = styled.a`
  font-family: "Proxima Nova";
  font-weight: bold !important;
  background-color: #C5323B;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1.35rem;
  padding: 0.6rem 5.5rem;
  transition: all 0.2s;
  margin: 5px 0;
  z-index: 4;

  &:hover {
    transition: all 0.2s;
    cursor: pointer;
    background-color: #616060;
  }
`;
export const SponsorLink = styled.a`
  font-family: "Filson Pro";
  font-weight: normal !important;
  margin: 5px;
  font-size: 1.2rem;
  color: #242424;
  text-decoration: none;
  z-index: 4;
  transition: all 0.2s;
  &:hover {
    transition: all 0.2s;
    color: #2d65a0;
  }
`;

export const MentorLink = styled(SponsorLink)`
  font-family: "Proxima Nova";
  font-weight: bold !important;
  font-size: 0.8rem;
  color: #f573a0;
`;
