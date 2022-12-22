import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html, body {
  scroll-behaviour: smooth;
  margin: 0;
  padding: 0;
}
    @font-face {
      font-family: 'Filson Pro';
      src: url('/fonts/FilsonProMedium.otf') format('opentype');
      font-weight: normal;
      font-display: swap;
    }
    @font-face {
    font-family: 'Proxima Nova';
    src: url('/fonts/ProximaNova-Regular.otf') format('opentype');
    font-weight: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Proxima Nova';
    src: url('/fonts/ProximaNovaAlt-Bold.otf') format('opentype');
    font-weight: bold;
    font-display: swap;
  }
`;
function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
