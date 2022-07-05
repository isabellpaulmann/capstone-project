import {useParams} from 'react-router-dom';
import styled from 'styled-components';

import AddStickerButton from '../components/AddStickerButton';
import DownloadButton from '../components/DownloadButton';
import Header from '../components/Header';
import deletesticker from '../images/deletesticker.svg';
import StyledFooter from '../styled/StyledFooter';

export default function DetailPageLighter({wallpapersLight}) {
  const {id} = useParams();
  const thisWallpaper = wallpapersLight.find(wallpaperLight => wallpaperLight.id === Number(id));
  return (
    <>
      <Header />
      <StyledBigImageContainer>
        <StyledImage src={thisWallpaper.image} alt={thisWallpaper.altIMG} />
      </StyledBigImageContainer>
      <StyledFooter>
        <AddStickerButton />
        <DownloadLink href={thisWallpaper.image} download={thisWallpaper.image}>
          <StyledColorButton>
            <DownloadButton />
          </StyledColorButton>
        </DownloadLink>
        <img src={deletesticker} alt="delete sticker" />
      </StyledFooter>
    </>
  );
}

const StyledImage = styled.img`
  height: 73vh;
  border-radius: 10px;

  @media (min-width: 390px) {
    height: 78vh;
  }
  @media (min-width: 768px) {
    height: 83vh;
  }
  @media (min-width: 912px) {
    height: 86vh;
  }
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
  justify-content: center;
  align-content: center;
  align-items: center;
`;
