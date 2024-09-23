import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${(props) => props.theme.fonts.main};
    background-color: ${(props) => props.theme.colors.neutral["98"]};
    color: ${(props) => props.theme.colors.text};
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
