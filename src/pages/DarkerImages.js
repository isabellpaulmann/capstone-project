import {Link} from 'react-router-dom';
import styled from 'styled-components';

import DownloadButton from '../components/DownloadButton';
import homebutton from '../images/homebutton.svg';
import Logo from '../images/logo.svg';
import StyledHeader from '../styled/StyledHeader';
import StyledImageContainer from '../styled/StyledImageContainer';
import wallpapersDarker from '../wallpaperDataDarker';

export default function ImageContainerDark() {
  return (
    <>
      <StyledHeader>
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
              <img src={wallpaperDark.image} alt={wallpaperDark.altIMG} />
              <DownloadLink href={wallpaperDark.image} download={wallpaperDark.image}>
                <DownloadButton />
              </DownloadLink>
            </article>
          );
        })}
      </StyledImageContainer>
    </>
  );
}

const DownloadLink = styled.a`
  display: flex;
  justify-content: center;
`;
