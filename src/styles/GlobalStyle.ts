import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  *{
    ${reset}
    box-sizing: border-box;
    text-decoration-line: none;
    list-style: none;
  };
`;

export default GlobalStyle;
