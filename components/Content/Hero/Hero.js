import Logo from "../../Shared/Logo";
import Divider from "../../Shared/Divider/Divider";
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
          {/* Dream <Star>✦</Star> Build <Star>✦</Star> Inspire */}
        </SubTitle>
        <Date>December 23rd 2022 - January 7th 2023</Date>
        <ApplyBtn
          href=""
          rel="noopener"
          target="_blank"
        >
          Get Hacking!
        </ApplyBtn>
        <SponsorLink href="">
          {/* Join Now */}
        </SponsorLink>
      </Content>
      <Divider />
    </Wrapper>

    
  );
};
export default Hero;
