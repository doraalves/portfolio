import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root,
  [data-theme="light"] {
    --bg:           #F5F2ED;
    --ink:          #1A1714;
    --ink-soft:     #6B6460;
    --accent:       #C8191A;
    --line:         #D9D4CE;
    --surface:      #FFFFFF;
    --surface-soft: #EDE9E4;
    --mono: 'DM Mono', monospace;
    --serif: 'DM Serif Display', serif;
    --sans: 'DM Sans', sans-serif;
  }

  [data-theme="dark"] {
    --bg:           #0F0D0C;
    --ink:          #F0EBE4;
    --ink-soft:     #9A928A;
    --accent:       #D62828;
    --line:         #2A2522;
    --surface:      #1A1714;
    --surface-soft: #221F1C;
    --mono: 'DM Mono', monospace;
    --serif: 'DM Serif Display', serif;
    --sans: 'DM Sans', sans-serif;
  }

  html, body { height: 100%; }

  body {
    background: var(--bg);
    color: var(--ink);
    font-family: var(--sans);
    font-size: 16px;
    line-height: 1.6;
    overflow-x: hidden;
    transition: background 0.3s, color 0.3s;
  }
`;

export default GlobalStyle;
