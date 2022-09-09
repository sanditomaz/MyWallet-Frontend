import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    body{
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
        //font-family: 'Saira Stencil One', cursive;
        cursor: default;
        a {
            text-decoration: none;
            cursor: pointer;
        }
    }
    html,body{
        height: 100%;
        background-color:#f2f2f2;
    }
    .root{
        height: 100%
    }
`;

export default GlobalStyle;
