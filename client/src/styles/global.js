import { createGlobalStyle } from "styled-components";
import background from "../assets/background.jpg";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;900&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body {
        background: url(${background}) no-repeat center top;
        -webkit-font-smoothing: antialiased;
        color: #000000;
    }
    body, input, button {
        font: 16px Roboto, sans-serif;
    }
    #root {
        margin: 0 auto;
        padding: 0;
    }
    button {
        cursor: pointer;
    }
`;
