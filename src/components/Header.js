import {Link} from 'react-router-dom';

import GoBackButton from '../components/GoBackButton';
import homebutton from '../images/homebutton.svg';
import Logo from '../images/logo.svg';
import StyledHeader from '../styled/StyledHeader';

export default function Header() {
  return (
    <StyledHeader>
      <GoBackButton />
      <img src={Logo} alt="App Logo" />
      <Link to="/">
        <button>
          <img src={homebutton} alt="go to home" />
        </button>
      </Link>
    </StyledHeader>
  );
}
