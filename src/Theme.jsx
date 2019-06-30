// @ts-check

/**
 * Since this file is shared with NetlifyCMS it must be .jsx
 */

import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { Button } from "rebass";

const GlobalStyle = createGlobalStyle`
  :root {
    --yellow: #fdc40c;
    --dark: #070200;
    --blue: #8884ff;

    --white: white;
    --white-1: rgba(255, 255, 255, 0.8);
  }

  html, body {
    font-family: 'Arial', 'Helvetica', sans-serif;
    height: 100%;
    margin: 0;
  }

  #___gatsby {
    height: 100%;
  }
`;

const developmentFontFallback =
  process.env.NODE_ENV === "development" ? "'Comic Sans MS'," : "";

export const theme = {
  // TODO: https://rebassjs.org/theming
  fonts: {
    mono: `"Roboto Mono", ${developmentFontFallback} monospace`,
    sans: `"Roboto Mono", ${developmentFontFallback} monospace`,
  },
  space: [4, 9, 18, 36, 72, 144, 288],
};

const CascadeTheme = styled.div`
  height: 100%;

  font-family: "Roboto Mono", ${developmentFontFallback} monospace;
  background-color: var(--dark);
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAKCAYAAAB8OZQwAAAAOUlEQVQImWMwNjb+z87E8J+dieE/AwMUIwvAJWCCKKrRBdiZoIIwDlwSXdDY2BjTTNza4W5DxZiCAE/cNAaKEuVmAAAAAElFTkSuQmCC)
    repeat;

  color: white;

  font-size: 18px;

  padding: 0.5em;

  button {
    cursor: pointer;
  }

  h1,
  h2,
  h3 {
    margin: 0;
    color: var(--yellow);

    font-family: "Roboto Condensed", ${developmentFontFallback} sans-serif;
    font-style: italic;
    font-weight: 700;
  }

  h1 {
    font-size: 4.236em;
  }

  h2 {
    font-size: 2.618em;
  }

  h3 {
    font-size: 1.618em;
  }

  small {
    font-size: 0.618em;
  }

  a {
    color: white;
    &:focused,
    &:visited {
      color: white;
    }
  }
`;

export const LayoutComponents = {
  // h1: styled.h1`
  //   font-size: 20px;
  // `,
  // p: styled.p`
  //   font-size: 16px;
  // `,
};

export const UIComponents = {
  Button: props => (
    <Button px={2} py={1} css={{ fontFamily: "inherit" }} {...props}>
      {props.children}
    </Button>
  ),
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Condensed:700i|Roboto+Mono&display=swap&subset=latin-ext"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <CascadeTheme id="cascade-theme">{children}</CascadeTheme>
    </Fragment>
  </ThemeProvider>
);
