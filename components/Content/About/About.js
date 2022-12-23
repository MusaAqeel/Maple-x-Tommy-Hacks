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
          title={"About Maple X Tommy Hacks"}
          paragraph={`
          Welcome to Maple X Tommy Hacks, a global hackathon collaboration between Maple High School and Tommy Douglas Secondary School! This event is open to all students across the globe and brings together a diverse group of individuals to work on projects that address real-world problems and showcase their skills in technology and innovation.
          `}
        />
        <Segment
          title={"What is a hackathon?"}
          paragraph={
            "An event, typically lasting several days, in which a large number of people meet to engage in collaborative computer programming.."
          }
        />
        <Segment
          title={"Sponsors"}
          paragraph={
            <span>
              We&apos;re currently in the process of finding sponsors to make
              Maple X Tommy Hacks even better. If you are interested in
              sponsoring for Maple X Tommy Hacks, please email us at{" "}
              <Link href="maplehs.compsci@gmail.com">
                maplehs.compsci@gmail.com
              </Link>
            </span>
          }
        />

      </Cover>
    </Wrapper>
  );
};
export default About;
