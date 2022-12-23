import React, { useState } from "react";
import Link from "next/link";
import InstagramIcon from "../../Shared/Icons/InstagramIcon";
import TwitterIcon from "../../Shared/Icons/TwitterIcon";
import FacebookIcon from "../../Shared/Icons/FacebookIcon";
import {
  Wrapper,
  DividerWrapper,
  Shape,
  Cover,
  First_Container,
  Second_Container,
  Third_Container,
  IconContainer,
  Content,
  Socials,
  MailingContainer,
  CompanyContainer,
} from "./FooterStyles";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitStatus, setSubmitStatus] = useState([
    false,
    "Sign Up",
    "#4582c3",
    "#FFFFFF",
    "pointer",
  ]);

  const formSubmit = (e) => {
    e.preventDefault();
    const action = `https://script.google.com/macros/s/AKfycbwnuktDcCkwVEluIyidhI4KJeot4t_JrKuZYDOHqhJjNidodKZuSUqfzAwZl5Yrfqsj/exec?req=add&email=${email}`;
    const body = { req: "add", email: email };
    console.log(email);
    fetch(action, {
      method: "POST",
      body: JSON.stringify(body),
    })
      .catch((err) => console.log(err))
      .then((res) => {
        console.log(res);
        setSubmitStatus([true, "Signed Up!", "#45C26D", "#969696", "default"]);
      });
  };

  return (
    <Wrapper>
      <DividerWrapper>
        <Shape
          width="1920"
          height="37"
          viewBox="0 0 1920 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-2 6.79964C57.5468 17.7707 119.39 22.9834 181.418 22.2598C263.655 21.1946 295.435 10.0037 376.055 6.79964C474.581 2.88404 487.449 17.2007 599.967 22.2598C752.704 29.1273 766.549 4.43525 930.692 6.30093C1073.37 7.92268 1051.31 26.4472 1187.04 26.7485C1347.2 27.1037 1375.79 1.30773 1527.26 11.2883C1585.01 15.0929 1615.74 21.1398 1683.92 20.2652C1750.86 19.4067 1795.83 -6.80699 1864.32 2.81023C1883.01 5.518 1901.05 9.75116 1918 15.4025V36.0783H-2V6.79964Z"
            fill="#A0C3D2"
          />
          <path
            d="M0 37.0095C40.9061 24.9624 103.548 10.7014 180.648 10.5886C225.232 10.5234 254.666 15.2183 280.341 18.3261C413.654 34.4633 472.22 11.0323 638.758 10.0359C792.365 9.11698 774.144 28.8614 937.835 28.8269C1067.71 28.7996 1101.09 16.3663 1233.35 13.9047C1400.37 10.7961 1402.86 36.0956 1521.75 27.1688C1611.95 20.3957 1664.73 4.31019 1740.52 16.1154C1760.56 19.2377 1789.03 25.3721 1829.92 24.4055C1868.44 23.4951 1899.42 16.725 1920 10.9571V37.0095H0Z"
            fill="#171C28"
          />
        </Shape>
      </DividerWrapper>
      <Cover>
  <Content>
    <First_Container>
      <span>Made with ❤️ by Musa Aqeel and Sibel Jahangirli</span>
      <ul>
        <li>
          <a
            href="https://drive.google.com/file/d/1IhsuhrWrBa16f8MH2ow4MMwT9pJNBFpj/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Hackathon Package
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/tommyprogramming/"
            target="_blank"
            rel="noreferrer"
          >
            Contact Us
          </a>
        </li>
        <li>
          <a
            href="https://github.com/MusaAqeel/Maple-x-Tommy-Hacks"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </First_Container>
    <Third_Container>
      <CompanyContainer>Maple X Tommy Hacks</CompanyContainer>
    </Third_Container>
  </Content>
</Cover>

    </Wrapper>
  );
};

export default Footer;
