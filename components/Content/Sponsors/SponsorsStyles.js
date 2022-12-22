import styled from "styled-components";

export const Wrapper = styled.article`
  min-height: 100vh;
  min-width: 100%;
  padding: 0;
  margin: 0;
  background-color: #f9f9f9;
`;

export const Header = styled.h2`
  padding-top: 60px;
  font-family: "Filson Pro";
  font-weight: normal;
  color: #242424;
  text-align: center;
  font-size: 3rem;
  margin-top: 2;
`;

export const SponsorGrid = styled.div`
  padding: 2rem;
`;

export const Tier = styled.div`
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  place-content: center;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 71.135rem;
  gap: 5rem;
  padding-bottom: 5rem;
`;

export const GoldSponsor = styled.a`
  position: relative;
  height: 200px;
  cursor: pointer;
  max-width: 30em;
  width: 100%;
  border-radius: 15px;
  transition: all 0.3s ease 0s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const SilverSponsor = styled(GoldSponsor)`
  height: 125px;
  max-width: 15rem;
`;

export const BronzeSponsor = styled(GoldSponsor)`
  height: 80px;
  max-width: 10rem;
`;
