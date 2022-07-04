import {Link} from 'react-router-dom';
import styled from 'styled-components';

import DownloadButton from '../components/DownloadButton';
import GoBackButton from '../components/GoBackButton';
import homebutton from '../images/homebutton.svg';
import Logo from '../images/logo.svg';
import StyledHeader from '../styled/StyledHeader';
import StyledImageContainer from '../styled/StyledImageContainer';
import wallpapersLighter from '../wallpaperDataLighter';

export default function ImageContainerLight() {
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
        {wallpapersLighter.map(wallpaperLight => {
          return (
            <article key={wallpaperLight.id}>
              <Link key={wallpaperLight.id} to={`/images/lighter/${wallpaperLight.id}`}>
                <img src={wallpaperLight.image} alt={wallpaperLight.altIMG} />
              </Link>
              <DownloadLink href={wallpaperLight.image} download={wallpaperLight.image}>
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
    background-color: #cd8282;
  }
`;

const DownloadLink = styled.a`
  display: flex;
  justify-content: center;
  text-decoration: none;
`;
