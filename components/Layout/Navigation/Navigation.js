import React, {useState, useEffect, useCallback} from "react";
import {
  Container,
  NavLinks,
  NavItem,
  LogoContainer
} from "./NavigationStyles";
import Logo from "../../Shared/Logo";


const Navigation = (props) => {

  return (
    <Container>
      <NavLinks>
        <li>
          <NavItem href="/">
            <LogoContainer>
              <Logo />
            </LogoContainer>
          </NavItem>
        </li>
        <li>
          <NavItem href="#about">About</NavItem>
        </li>
        <li>
          <NavItem href="#sponsors">Sponsors</NavItem>
        </li>
        <li>
          <NavItem href="#faq">FAQ</NavItem>
        </li>
        <li>
          <NavItem href="mailto:contact@uofthacks.com">Contact</NavItem>
        </li>
      </NavLinks>

    </Container>
  );
};
export default Navigation;
