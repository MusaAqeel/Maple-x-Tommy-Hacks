import About from "./About/About";
import FAQ from "./FAQ/FAQ";
import Hero from "./Hero/Hero";

import { Wrapper, Cover } from "./ContentStyles";
import Sponsors from "./Sponsors/Sponsors";

const Content = () => {
  return (
    <Wrapper>
      <Hero />
      <Divider />
      <Cover>
        <About />
        <Sponsors />
        <FAQ />
      </Cover>
    </Wrapper>
  );
};
export default Content;
