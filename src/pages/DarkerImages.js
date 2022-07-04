import {Link} from 'react-router-dom';
import styled from 'styled-components';

import DownloadButton from '../components/DownloadButton';
import GoBackButton from '../components/GoBackButton';
import homebutton from '../images/homebutton.svg';
import Logo from '../images/logo.svg';
import StyledHeader from '../styled/StyledHeader';
import StyledImageContainer from '../styled/StyledImageContainer';
import wallpapersDarker from '../wallpaperDataDarker';

export default function ImageContainerDark() {
  return (
    <>
      <StyledHeader>
        <GoBackButton />
        <img src={Logo} alt="App Logo" />
        <Link to="/">
          <button>
            <img src={homebutton} alt="go to home" />
          </button>
        </Link>
      </StyledHeader>
      <StyledImageContainer>
        {wallpapersDarker.map(wallpaperDark => {
          return (
            <article key={wallpaperDark.id}>
              <Link key={wallpaperDark.id} to={`/images/darker/${wallpaperDark.id}`}>
                <img src={wallpaperDark.image} alt={wallpaperDark.altIMG} />
              </Link>
              <DownloadLink href={wallpaperDark.image} download={wallpaperDark.image}>
                <StyledColorButton>
                  <DownloadButton />
                </StyledColorButton>
              </DownloadLink>
            </article>
          );
        })}
      </StyledImageContainer>
    </>
  );
}

const StyledColorButton = styled.div`
  button {
    background-color: #495b70;
  }
`;

const DownloadLink = styled.a`
  display: flex;
  justify-content: center;
  text-decoration: none;
`;
