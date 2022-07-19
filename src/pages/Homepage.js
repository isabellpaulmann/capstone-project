import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {keyframes} from 'styled-components';

import background from '../images/background.png';
import Logo from '../images/logo.svg';

export default function Homepage() {
  return (
    <BackgroundImage>
      <StyledSection>
        <header>
          <img src={Logo} alt="App Logo" />
        </header>
        <Link to="/images/lighter">
          <StyledLighterButton>lighter</StyledLighterButton>
        </Link>
        <Link to="/images/darker">
          <StyledDarkerButton>darker</StyledDarkerButton>
        </Link>
      </StyledSection>
    </BackgroundImage>
  );
}
const glowingLight = keyframes`
    from {
      box-shadow: 0 0 10px -10px #ca8484;
    }
    to {
      box-shadow: 0 0 30px 10px #5C5331;
    }
   
  `;
const glowingDark = keyframes`
  from {
    box-shadow: 0 0 14px -5px #222;
  }
  to {
    box-shadow: 0 0 30px 10px #222;
  }
 
`;
const easeIn = keyframes`
from {opacity:0
}
to { opacity:1; }
`;
const animatedBackground = keyframes`
from { background-position: 0 0; }
    to { background-position: 100% 0; }`;

const StyledSection = styled.section`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-rows: 3fr 1fr 1fr 1fr;
  grid-gap: 25px;
  overflow: hidden;
`;
const BackgroundImage = styled.div`
  background-image: url(${background});
  height: 100vh;
  width: auto;
  animation: ${animatedBackground} 80s infinite alternate;
  overflow: hidden;
`;

const StyledLighterButton = styled.button`
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

const StyledDarkerButton = styled.button`
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
