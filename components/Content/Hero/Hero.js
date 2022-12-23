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
} from "./HeroStyles";

const Hero = () => {
  return (
    <Wrapper>
      <Content>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        {/* <Title>Maple X Tommy Hacks</Title> */}
        <SubTitle>
          {/*  */}
        </SubTitle>
        <Date>December 23rd 2022 - January 7th 2023</Date>
        <ApplyBtn
          href="#about"
          rel=""
          target=""
        >
          Get Hacking!
        </ApplyBtn>
        <SponsorLink href="">
          {/* Join Now */}
        </SponsorLink>
      </Content>
    </Wrapper>

    
  );
};
export default Hero;
