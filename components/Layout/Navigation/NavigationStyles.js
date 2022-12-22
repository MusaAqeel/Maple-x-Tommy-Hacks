import styled from "styled-components";

export const Container = styled.nav`
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  height: 60px;
  z-index: 99;
  justify-content: flex-start;
  align-items: left;
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
`;

export const NavLinks = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 5.5rem;
`;

export const LogoContainer = styled.div`
  width: 76px;
`;

export const NavItem = styled.button`
  display: block;
  font-family: "Proxima Nova";
  color: #4582c3;
  font-size: 1.2rem;
  border: none;
  outline: none;

  &:hover {
    transition: all 0.2s;
    cursor: pointer;
    color: #2d65a0;
    background-color: #eee;
  }
  @media only screen and (max-width: 860px) {
    display: none;
  }
`;
