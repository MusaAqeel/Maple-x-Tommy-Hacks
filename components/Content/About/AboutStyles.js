import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  min-height: 100vh;
  min-width: 100%;
  flex: 1;
  color: white;
`;
// skyline color
export const Cover = styled.article`
  padding-top: 60px;
  background: #171c28;
  display: block;
  position: relative;
  top: 99%;
  min-height: 100vh;
  z-index: 3;
  background: #616060;
    `;
export const Link = styled.a`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: normal;
  font-size: 1.02rem;
  line-height: 22px;
  text-decoration: none;

  color: #a0c3d2;
  transition: color 0.2s;

  &:hover {
    transition: color 0.2s;
    color: #265587;
  }
`;
export const CityContainer = styled.div`
  position: absolute;
  box-sizing: border-box;
  left: 0;
  bottom: -2px;
  z-index: -1;
  min-width: 100%;
`;
