import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

export const Wrapper = styled.article`
  display: flex;
  justify-content: center;

  position: relative;
  display: block;
  flex: 1;
  flex-direction: column;
  text-align: center;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 475px;
  padding-top: 11.76vh;
  z-index: 4;
  color: #FFFFFF;

  &::after {
    display: flex;
    justify-content: center;
    text-align: center;
    content-align: center;
    content: "⬇";
    display: flex;
    font-size: 2rem;
    animation: ${bounce} 1s ease-in-out infinite;
  }
`;

export const Content = styled.section`
  /* styles for Content component go here */
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  -webkit-box-align: center;
  z-index: 4;
  
`;

export const LogoContainer = styled.div`
  /* styles for LogoContainer component go here */
  max-width: 36.56rem;
  z-index: 4;
  
`;

export const Title = styled.h1`
  /* styles for Title component go here */
  font-family: "Filson Pro";
  font-weight: normal !important;
  font-size: 3rem;
  color: #B83236;
  margin: 0;
  z-index: 4;
  text-align: center;

  
`;

export const Star = styled.span`
  /* styles for Star component go here */
  font-size: 1.5rem;
  
`;

export const SubTitle = styled.p`
  /* styles for SubTitle component go here */
  font-family: "Proxima Nova";
  font-weight: normal !important;
  color: #f573a0;
  font-size: 1.75rem;
  margin: 0;
  z-index: 4;
  
`;

export const Date = styled.p`
  /* styles for Date component go here */
  font-family: "Proxima Nova";
  font-weight: normal !important;
  color: #616060;
  font-size: 1.225rem;
  margin: 5px 0;
  z-index: 4;
  
`;

export const ApplyBtn = styled.a`
  /* styles for ApplyBtn component go here */
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
  /* styles for SponsorLink component go here */
  font-family: "Filson Pro";
  font-weight: normal !important;
  margin: 5px;
  font-size: 1.2rem;
  color: #B83236;
  text-decoration: none;
  z-index: 4;
  transition: all 0.2s;
  &:hover {
    transition: all 0.2s;
    color: #616060;
  
`;

export const MentorLink = styled(SponsorLink)`
  /* styles for MentorLink component go here */
  font-family: "Proxima Nova";
  font-weight: bold !important;
  font-size: 0.8rem;
  color: #f573a0;
`;
