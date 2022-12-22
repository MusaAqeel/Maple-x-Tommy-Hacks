import React from "react";
import Divider from "../../Shared/Divider/Divider";
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

import WolframLanguage from "/public/static/Sponsors/WolframLanguage.png";

const Sponsors = () => {
  return (
    <Wrapper>
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
           
          </Tier>
        </SponsorGrid>
      </div>
    </Wrapper>
  );
};
export default Sponsors;
