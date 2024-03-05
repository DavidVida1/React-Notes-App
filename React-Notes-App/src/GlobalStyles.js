import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
        v2.0 | 20110126
        License: none (public domain)
    */


        html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

:root {
  --font-size-small:1.2rem;
  --font-size1:1.5rem;
  --font-size2:3rem;
  --color-grey: rgba(60, 68, 76, 0.85);
  --color-grey2: rgba(125, 125, 125, 0.5);
  --color-white: rgba(255, 255, 255, 1);
  --color-white2: rgba(255, 255, 255, 0.25);
  --color-white3:rgba(255, 255, 255, 0.2);
  --color-black: rgba(0, 0, 0, 1);
  --color-purple: rgba(79, 65, 123,0.7);
  --color-purple2:rgba(79, 65, 123, 0.35);
  --color-green:rgba(173, 219, 204,1);
  --border-note: rgba(46, 45, 130,0.5);
  --border-noteList: rgba(79, 65, 123,1);
  --box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  --b-radius1: 0px;
  --b-radius2:10px;
      font-size:62.5%;
    }

    
#root{/*position:relative*/}

::-webkit-scrollbar {
  width: 0rem;
}

::-webkit-scrollbar-thumb {
  border-radius: 1rem;
  background: #797979;
  transition: all 0.5s ease-in-out;
}

::-webkit-scrollbar-thumb:hover {
  background: #222224;
}

::-webkit-scrollbar-track {
  background: #363949;
}

html {
  scroll-behavior: smooth;
}

body{
}

input {
        &:disabled {
            cursor: not-allowed;
        }
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
      font-family: 'Roboto', sans-serif;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }



`;
export default GlobalStyles;
