import Logo from "../../Shared/Logo";

import {
  Wrapper,
  Content,
  LogoContainer,
  Title,
  SubTitle,
  Date,
  ApplyBtn,
  SponsorLink,
  Star,
  MentorLink,
} from "./HeroStyles";

const Hero = () => {
  return (
    <Wrapper>
      <Content>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <Title>UofTHacks IX</Title>
        <SubTitle>
          Dream <Star>✦</Star> Build <Star>✦</Star> Inspire
        </SubTitle>
        <Date>February 4th-6th, 2022</Date>
        <ApplyBtn
          href=""
          rel="noopener"
          target="_blank"
        >
          Applications are now closed
        </ApplyBtn>
        <SponsorLink href="">
          See you next year!
        </SponsorLink>
      </Content>
    </Wrapper>
  );
};
export default Hero;
