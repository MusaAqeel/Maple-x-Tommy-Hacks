import React, {useState, useCallback, useEffect} from 'react';
import Head from "next/head";
import styled from "styled-components";
import Navigation from '../components/Layout/Navigation/Navigation';
import Main from "../components/Main";
import Mountains from "../components/Other/Mountains/Mountains";
import Content from "../components/Content/Content";
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

const Home = () => {

  return (
    <>
    <Navigation />
      <Parallax id="parallax">
        <Head>
          <title>Maple X Tommy Hacks</title>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon-32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="48x32"
            href="/favicon-32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <title>Maple X Tommy Hacks </title>
          <meta name="title" content="Maple X Tommy Hacks" />
          <meta
            name="description"
            content="Maple X Tommy Hacks. A beginner friendly hackathon for high school students. 💻"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://maple-x-tommy-hacks.vercel.app/" />
          <meta property="og:title" content="Maple X Tommy Hacks " />
          <meta
            property="og:description"
            content="Maple X Tommy Hacks. A beginner friendly hackathon for high school students. 💻"
          />
          <meta
            property="og:image"
            content="https://i.ibb.co/RGXqTg2/meta-img.png"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://maple-x-tommy-hacks.vercel.app/" />
          <meta property="twitter:title" content="Maple X Tommy Hacks " />
          <meta
            property="twitter:description"
            content="Maple X Tommy Hacks. A beginner friendly hackathon for high school students. 💻"
          />
          <meta
            property="twitter:image"
            content="https://i.ibb.co/RGXqTg2/meta-img.png"
          />
        </Head>
        <Content />
        <Footer />
      </Parallax>
    </>
  );
};
export default Home;
