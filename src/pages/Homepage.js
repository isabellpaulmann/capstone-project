import {Link} from 'react-router-dom';

import Logo from '../images/logo.svg';

export default function Homepage() {
  return (
    <>
      <header>
        <img src={Logo} alt="App Logo" />
      </header>
      <Link to="/images/lighter">
        <button>lighter</button>
      </Link>
      <Link to="/images/darker">
        <button>darker</button>r
      </Link>
    </>
  );
}
