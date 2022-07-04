import {useParams} from 'react-router-dom';
import styled from 'styled-components';

import DownloadButton from '../components/DownloadButton';
import Header from '../components/Header';

export default function DetailPageDarker({wallpapersDark}) {
  const {id} = useParams();
  const thisWallpaper = wallpapersDark.find(wallpaperDark => wallpaperDark.id === Number(id));
  return (
    <>
      <Header />
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
    background-color: #495b70;
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
