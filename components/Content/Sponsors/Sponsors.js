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
import Amazon from "/public/static/Sponsors/Amazon.svg";
import Ubisoft from "/public/static/Sponsors/Ubisoft.svg";
import FDMLogo from "/public/static/Sponsors/FDM.svg";
import QuestTrade from "/public/static/Sponsors/QuestTrade.svg";
import WolframLanguage from "/public/static/Sponsors/WolframLanguage.png";
import Clerky from "/public/static/Sponsors/Clerky.svg";
import Echo3D from "/public/static/Sponsors/echo3D.webp";
import Maplesoft from "/public/static/Sponsors/Maplesoft.webp";
import Glimpse from "/public/static/Sponsors/Glimpse.svg";
import GoogleCloud from "/public/static/Sponsors/GoogleCloud.svg";
import Stickermule from "/public/static/Sponsors/Stickermule.svg";
import UofTEng from "/public/static/Sponsors/UofTEng.svg";
import Varient from "/public/static/Sponsors/Varient.svg";

const Sponsors = () => {
  return (
    <Wrapper>
      <Divider />
      <div id="sponsors">
        <Header>Our sponsors</Header>
        <SponsorGrid>
          <Tier>
            <GoldSponsor
              href="https://amazon.com/"
              rel="noopener"
              target="_blank"
            >
              <Image
                src={Amazon}
                layout="fill"
                objectFit="contain"
                alt="Amazon"
                priority
              />
            </GoldSponsor>
            <GoldSponsor
              href="https://ubisoft.com"
              rel="noopener"
              target="_blank"
            >
              <Image
                src={Ubisoft}
                layout="fill"
                objectFit="contain"
                alt="Ubisoft"
                priority
              />
            </GoldSponsor>
          </Tier>
          <Tier>
            <SilverSponsor
              href="https://www.fdmgroup.com/"
              rel="noopener"
              target="_blank"
            >
              <Image
                src={FDMLogo}
                layout="fill"
                objectFit="contain"
                alt="FDM"
                priority
              />
            </SilverSponsor>
            <SilverSponsor
              href="https://www.questrade.com/"
              rel="noopener"
              target="_blank"
            >
              <Image
                src={QuestTrade}
                layout="fill"
                objectFit="contain"
                alt="QuestTrade"
                priority
              />
            </SilverSponsor>
          </Tier>
          <Tier>
            <BronzeSponsor
              href="https://www.clerky.com/"
              rel="noopener"
              target="_blank"
            >
              <Image
                src={Clerky}
                layout="fill"
                objectFit="contain"
                alt="Clerky"
                priority
              />
            </BronzeSponsor>
            <BronzeSponsor
              href="https://www.echo3d.co/"
              rel="noopener"
              target="_blank"
            >
              <Image
                src={Echo3D}
                layout="fill"
                objectFit="contain"
                alt="Echo3D"
                priority
              />
            </BronzeSponsor>
            <BronzeSponsor
              href="https://www.maplesoft.com/"
              rel="noopener"
              target="_blank"
            >
              <Image
                src={Maplesoft}
                layout="fill"
                objectFit="contain"
                alt="Maplesoft"
                priority
              />
            </BronzeSponsor>
            <BronzeSponsor
              href="https://www.wolfram.com/"
              rel="noopener"
              target="_blank"
            >
              <Image
                src={WolframLanguage}
                layout="fill"
                objectFit="contain"
                alt="Wolfram Language"
                priority
              />
            </BronzeSponsor>
            <BronzeSponsor
              href="https://cloud.google.com/"
              rel="noopener"
              target="_blank"
            >
              <Image
                src={GoogleCloud}
                layout="fill"
                objectFit="contain"
                alt="Google Cloud"
                priority
              />
            </BronzeSponsor>
            <BronzeSponsor
              href="https://www.joinglimpse.com/"
              rel="noopener"
              target="_blank"
            >
              <Image
                src={Glimpse}
                layout="fill"
                objectFit="contain"
                alt="Glimpse"
                priority
              />
            </BronzeSponsor>
            <BronzeSponsor
              href="https://www.engineering.utoronto.ca/"
              rel="noopener"
              target="_blank"
            >
              <Image
                src={UofTEng}
                layout="fill"
                objectFit="contain"
                alt="UofT Engineering"
                priority
              />
            </BronzeSponsor>
            <BronzeSponsor
              href="http://hackp.ac/mlh-stickermule-hackathons"
              rel="noopener"
              target="_blank"
            >
              <Image
                src={Stickermule}
                layout="fill"
                objectFit="contain"
                alt="Stickermule"
                priority
              />
            </BronzeSponsor>
            <BronzeSponsor
              href="http://www.uofthacks.com/"
              rel="noopener"
              target="_blank"
            >
              <Image
                src={Varient}
                layout="fill"
                objectFit="contain"
                alt="Varient"
                priority
              />
            </BronzeSponsor>
          </Tier>
        </SponsorGrid>
      </div>
    </Wrapper>
  );
};
export default Sponsors;
