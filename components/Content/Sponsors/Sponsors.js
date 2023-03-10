import React from "react";
import Divider from "../../Shared/Divider/Divider";
import Divider2 from "../../Shared/Divider/Divider2";
import {
  Wrapper,
  Header,
  Tier,
  GoldSponsor,
  SilverSponsor,
  BronzeSponsor,
  SponsorGrid,
} from "./SponsorsStyles";
import Image from "next/image";
import Replit from "/public/static/Sponsors/Replit.svg";
import Titan from "/public/static/Sponsors/titan.png";
import Maple from "/public/static/Sponsors/maple.png";
import Echo3D from "/public/static/Sponsors/echo3D.png";

import WolframLanguage from "/public/static/Sponsors/WolframLanguage.png";


const Sponsors = () => {
  return (
    <Wrapper>
      <Divider2 />
      <Divider />
      <div id="sponsors">
        <Header>Our sponsors</Header>
        <SponsorGrid>
          <Tier>
            <GoldSponsor
              href="https://Replit.com/"
              rel="noopener"
              target="_blank"
            >
              <Image
                src={Replit}
                layout="fill"
                objectFit="contain"
                alt="Replit"
                priority
              />
            </GoldSponsor>

            <GoldSponsor
              href="https://echo3d.com/"
              rel="noopener"
              target="_blank"
            >
              <Image
                src={Echo3D}
                layout="fill"
                objectFit="contain"
                alt="Echo 3D"
                priority
              />
            </GoldSponsor>

            <SilverSponsor
              href="http://www.yrdsb.ca/schools/tommydouglas.ss/Pages/default.aspx"
              rel="noopener"
              target="_blank"
            >
              <Image
                src={Titan}
                layout="fill"
                objectFit="contain"
                alt="Titan"
                priority
              />
            </SilverSponsor>

            <SilverSponsor
              href="http://www.yrdsb.ca/schools/maple.hs/Pages/default.aspx"
              rel="noopener"
              target="_blank"
            >
              <Image
                src={Maple}
                layout="fill"
                objectFit="contain"
                alt="Maple"
                priority
              />
            </SilverSponsor>
          </Tier>
        </SponsorGrid>
      </div>
    </Wrapper>
  );
};
export default Sponsors;