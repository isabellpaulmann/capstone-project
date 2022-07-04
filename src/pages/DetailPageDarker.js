import {Link, useParams} from 'react-router-dom';
import styled from 'styled-components';

import DownloadButton from '../components/DownloadButton';
import homebutton from '../images/homebutton.svg';
import Logo from '../images/logo.svg';
import StyledHeader from '../styled/StyledHeader';

export default function DetailPageDarker({wallpapersDark}) {
  const {id} = useParams();
  const thisWallpaper = wallpapersDark.find(wallpaperDark => wallpaperDark.id === Number(id));
  return (
    <>
      <StyledHeader>
        <img src={Logo} alt="App Logo" />
        <Link to="/">
          <button>
            <img src={homebutton} alt="go to home" />
          </button>
        </Link>
        <StyledBigImageContainer>
          <img src={thisWallpaper.image} alt={thisWallpaper.altIMG} />
          <DownloadLink href={thisWallpaper.image} download={thisWallpaper.image}>
            <StyledColorButton>
              <DownloadButton />
            </StyledColorButton>
          </DownloadLink>
        </StyledBigImageContainer>
      </StyledHeader>
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

const StyledBigImageContainer = styled.div``;
