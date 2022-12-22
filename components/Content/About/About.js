import React from "react";
import { Wrapper, Link, Cover, CityContainer } from "./AboutStyles";
import Image from "next/image";

import Segment from "./Segment/Segment";
import City from "/public/static/City/City.svg";


const About = () => {
  return (
    <Wrapper>
      <Cover id="about">
        <Segment
          title={"About UofTHacks"}
          paragraph={`
            For the 9th consecutive year, Canada’s first student-run hackathon,
            UofTHacks, will bring together 500 innovators, technology enthusiasts,
            designers, and entrepreneurs in a thrilling competition where they
            will embark on a journey to build unique and impactful projects.
          `}
        />
        <Segment
          title={"What is a hackathon?"}
          paragraph={
            "An event, typically lasting several days, in which a large number of people meet to engage in collaborative computer programming. We look past this traditional definition of a hackathon and take it to new heights. UofTHacks is the University of Toronto's annual hackathon. At UofTHacks, we bring people together to make new friends, learn new things, and bring new ideas to life."
          }
        />
        <Segment
          title={"Sponsors"}
          paragraph={
            <span>
              We&apos;re currently in the process of finding sponsors to make
              UofTHacks 2022 even greater than before. If you are interested in
              sponsoring for UofTHacks IX, please email us at{" "}
              <Link href="mailto:sponsors@uofthacks.com">
                sponsors@uofthacks.com
              </Link>
            </span>
          }
        />

        <CityContainer>
          <Image src={City} layout="responsive" priority alt="City Skyline" />
        </CityContainer>
      </Cover>
    </Wrapper>
  );
};
export default About;
