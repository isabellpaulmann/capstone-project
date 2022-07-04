import {Link, useParams} from 'react-router-dom';
import styled from 'styled-components';

import DownloadButton from '../components/DownloadButton';
import GoBackButton from '../components/GoBackButton';
import homebutton from '../images/homebutton.svg';
import Logo from '../images/logo.svg';
import StyledHeader from '../styled/StyledHeader';

export default function DetailPageLighter({wallpapersLight}) {
  const {id} = useParams();
  const thisWallpaper = wallpapersLight.find(wallpaperLight => wallpaperLight.id === Number(id));
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
      <StyledBigImageContainer>
        <StyledImage src={thisWallpaper.image} alt={thisWallpaper.altIMG} />
        <DownloadLink href={thisWallpaper.image} download={thisWallpaper.image}>
          <StyledColorButton>
            <DownloadButton />
          </StyledColorButton>
        </DownloadLink>
      </StyledBigImageContainer>
    </>
  );
}

const StyledImage = styled.img`
  height: 500px;
  border-radius: 10px;
`;

const StyledColorButton = styled.div`
  button {
    background-color: #cd8282;
    img {
      margin-top: -5px;
      width: 80px;
    }
  }
`;

const DownloadLink = styled.a`
  display: flex;
  justify-content: center;
  text-decoration: none;
`;

const StyledBigImageContainer = styled.div`
  display: grid;
  grid-template-rows: 7fr 1fr;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
