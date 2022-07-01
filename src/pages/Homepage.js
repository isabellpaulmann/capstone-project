import {Link} from 'react-router-dom';
import styled from 'styled-components';

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
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  font-family: Jua, sans-serif;
  color: white;
  font-size: 2rem;
`;

const StyledDarkerButton = styled.button`
  height: 100px;
  width: 240px;
  background: #324050;
  border: 5px solid #494949;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  font-family: Jua, sans-serif;
  color: white;
  font-size: 2rem;
`;
