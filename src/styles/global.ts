import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
        /* cursor: none; */
        //scroll 7:50
    }
    body {
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');
        /* 
        font-family: 'Bebas Neue', sans-serif;
        font-family: 'Cormorant Garamond', serif;
        font-family: 'Playfair Display', serif; 
        font-family: 'Poppins', sans-serif;
        */
    }
    ul {
        list-style: none;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    button {
        cursor: pointer;
    }
`;