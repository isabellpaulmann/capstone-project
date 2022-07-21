import styled from 'styled-components';
import {keyframes} from 'styled-components';

import background from '../images/background.png';

export const glowingLight = keyframes`
    from {
      box-shadow: 0 0 10px -10px #ca8484;
    }
    to {
      box-shadow: 0 0 30px 10px #5C5331;
    }
   
  `;
export const glowingDark = keyframes`
  from {
    box-shadow: 0 0 14px -5px #222;
  }
  to {
    box-shadow: 0 0 30px 10px #222;
  }
 
`;
export const easeIn = keyframes`
from {opacity:0
}
to { opacity:1; }
`;
export const animatedBackground = keyframes`
from { background-position: 0 0; }
    to { background-position: 100% 0; }`;

export const StyledSection = styled.section`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-rows: 3fr 1fr 1fr 1fr;
  grid-gap: 25px;
  overflow: hidden;
`;
export const BackgroundImage = styled.div`
  background-image: url(${background});
  height: 100vh;
  width: auto;
  animation: ${animatedBackground} 80s infinite alternate;
  overflow: hidden;
`;

export const StyledLighterButton = styled.button`
  height: 95px;
  width: 220px;
  background: #cd8282;
  border: none;
  box-shadow: 1px 5px 15px #222;
  border-radius: 40px;
  font-family: Jua, sans-serif;
  color: white;
  font-size: 2rem;
  animation: ${glowingLight} 3s 0s infinite alternate, ${easeIn} 5s;
  margin-bottom: 20px;
  margin-top: -20px; ;
`;

export const StyledDarkerButton = styled.button`
  height: 95px;
  width: 220px;
  background: #495b70;
  border: none;
  box-shadow: 1px 5px 15px #222;
  border-radius: 40px;
  font-family: Jua, sans-serif;
  color: white;
  font-size: 2rem;
  animation: ${glowingDark} 3s 0s infinite alternate, ${easeIn} 5s;
`;
