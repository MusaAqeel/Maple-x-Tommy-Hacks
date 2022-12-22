import styled from "styled-components";
import Mountains from "./Other/Mountains/Mountains";
import Content from "./Content/Content";
// import Navigation from "../components/Layout/Navigation/Navigation";
import Footer from "../components/Layout/Footer/Footer";

const Parallax = styled.section`
  position: absolute;
  background: linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%);
  perspective: 100px;
  left: 0;
  bottom: 0;
  height: 100%;
  min-width: 100vw;
  z-index: 4;
  overflow-x: hidden;
  overflow-y: scroll;
  scroll-behavior: smooth;
`;

const Main = () => {
  return (
    <Parallax>
      <Mountains />
      <Content />
      <Footer />
    </Parallax>
  );
};

export default Main;
