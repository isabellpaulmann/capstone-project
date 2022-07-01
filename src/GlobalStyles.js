import {createGlobalStyle} from 'styled-components';
import 'typeface-jua';
const styled = {createGlobalStyle};

export default styled.createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    color: white;
    background-color: #383233;
    margin: 0;
    font-size: 1.125rem;
    font-family: sans-serif;
  }
`;
