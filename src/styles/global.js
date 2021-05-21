import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root {
        --white: #f5f5f5;
        --vanilla: #f1ede0;
        --black : #0c0d0d;
        --blue: #1b7ced;
        --gray:  #2b3942;
        --red: red;
    }

    body {
        background: var(--vanilla);
        color: var(--black);
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`;
