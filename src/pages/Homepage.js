import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {keyframes} from 'styled-components';

import Logo from '../images/logo.svg';

export default function Homepage() {
  return (
    <>
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
    </>
  );
}
const glowingLight = keyframes`
    from {
      box-shadow: 0 0 10px -10px #ca8484;
    }
    to {
      box-shadow: 0 0 30px 10px #494949;
    }
   
  `;
const glowingDark = keyframes`
  from {
    box-shadow: 0 0 14px -5px black;
  }
  to {
    box-shadow: 0 0 40px 5px #292929;
  }
 
`;
const easeIn = keyframes`
from {opacity:0
}
to { opacity:1; }
`;

const StyledSection = styled.section`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-rows: 3fr 1fr 1fr 1fr;
  grid-gap: 25px;
`;

const StyledLighterButton = styled.button`
  height: 100px;
  width: 240px;
  background: #ca8484;
  border: 5px solid #494949;
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
  height: 100px;
  width: 240px;
  background: #324050;
  border: 5px solid #494949;
  box-shadow: 1px 5px 15px #222;
  border-radius: 40px;
  font-family: Jua, sans-serif;
  color: white;
  font-size: 2rem;
  animation: ${glowingDark} 3s 0s infinite alternate, ${easeIn} 5s;
`;
