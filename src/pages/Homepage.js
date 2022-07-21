import {Link} from 'react-router-dom';

import Logo from '../images/logo.svg';
import {StyledSection, BackgroundImage, StyledLighterButton, StyledDarkerButton} from '../styled/StyledHomepage';

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
