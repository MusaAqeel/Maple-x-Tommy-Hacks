import React, {useState, useCallback, useEffect} from 'react';
import Head from "next/head";
import styled from "styled-components";
import Navigation from '../components/Layout/Navigation/Navigation';
import Main from "../components/Main";
import Mountains from "../components/Other/Mountains/Mountains";
import Content from "../components/Content/Content";
import Footer from "../components/Layout/Footer/Footer";

// const Wrapper = styled.main`
//   /* display: flex;
//   scroll-behavior: smooth;
//   flex-direction: column;
//   align-items: center;
//   height: 100%;
//   width: 100%;
//   background: linear-gradient(180deg, #f9f9f9 0%, #a4e0ff 100%);
//   z-index: 0; */
//   position: absolute;
//   background: linear-gradient(180deg, #f9f9f9 0%, #a4e0ff 100%);
//   perspective: 100px;
//   left: 0;
//   bottom: 0;
//   height: 100%;
//   min-width: 100vw;
//   z-index: 4;
//   overflow-x: hidden;
//   overflow-y: scroll;
//   scroll-behavior: smooth;
// `;

// const Home = () => {
//   return (
//     <Wrapper>
//       <Head>
//         <title>UofTHacks IX</title>
//         <meta charSet="UTF-8" />
//         <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <link
//           rel="apple-touch-icon"
//           sizes="180x180"
//           href="/apple-touch-icon.png"
//         />
//         <link
//           rel="icon"
//           type="image/png"
//           sizes="32x32"
//           href="/favicon-32x32.png"
//         />
//         <link
//           rel="icon"
//           type="image/png"
//           sizes="16x16"
//           href="/favicon-16x16.png"
//         />
//         <link rel="manifest" href="/site.webmanifest" />
//         <title>UofTHacks IX</title>
//         <meta name="title" content="UofTHacks IX" />
//         <meta
//           name="description"
//           content="Join 500+ hackers for a great weekend of learning, building, and networking at University of Toronto's largest annual hackathon 💻"
//         />

//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://dev.uofthacks.com/" />
//         <meta property="og:title" content="UofTHacks IX" />
//         <meta
//           property="og:description"
//           content="Join 500+ hackers for a great weekend of learning, building, and networking at University of Toronto's largest annual hackathon 💻"
//         />
//         <meta
//           property="og:image"
//           content="https://i.ibb.co/0h5Mvzr/meta-img.png"
//         />

//         <meta property="twitter:card" content="summary_large_image" />
//         <meta property="twitter:url" content="https://dev.uofthacks.com/" />
//         <meta property="twitter:title" content="UofTHacks IX" />
//         <meta
//           property="twitter:description"
//           content="Join 500+ hackers for a great weekend of learning, building, and networking at University of Toronto's largest annual hackathon 💻"
//         />
//         <meta
//           property="twitter:image"
//           content="https://i.ibb.co/0h5Mvzr/meta-img.png"
//         />
//       </Head>
//       <Navigation />
//       <Main />
//       <Footer />
//     </Wrapper>
//   );

// };

const Parallax = styled.section`
  position: absolute;
  background: linear-gradient(180deg, #f9f9f9 0%, #a4e0ff 100%);
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
          <title>UofTHacks IX</title>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <title>UofTHacks IX</title>
          <meta name="title" content="UofTHacks IX" />
          <meta
            name="description"
            content="Join 500+ hackers for a great weekend of learning, building, and networking at University of Toronto's largest annual hackathon 💻"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://dev.uofthacks.com/" />
          <meta property="og:title" content="UofTHacks IX" />
          <meta
            property="og:description"
            content="Join 500+ hackers for a great weekend of learning, building, and networking at University of Toronto's largest annual hackathon 💻"
          />
          <meta
            property="og:image"
            content="https://i.ibb.co/0h5Mvzr/meta-img.png"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://dev.uofthacks.com/" />
          <meta property="twitter:title" content="UofTHacks IX" />
          <meta
            property="twitter:description"
            content="Join 500+ hackers for a great weekend of learning, building, and networking at University of Toronto's largest annual hackathon 💻"
          />
          <meta
            property="twitter:image"
            content="https://i.ibb.co/0h5Mvzr/meta-img.png"
          />
        </Head>
        <Mountains />
        <Content />
        <Footer />
      </Parallax>
    </>
  );
};
export default Home;
