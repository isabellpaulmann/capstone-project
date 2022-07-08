import {useState} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';

import AddStickerButton from '../components/AddStickerButton';
import DownloadButton from '../components/DownloadButton';
import Header from '../components/Header';
import deletesticker from '../images/deletesticker.svg';
import StyledFooter from '../styled/StyledFooter';

export default function DetailPageDarker({wallpapersDark}) {
  const {id} = useParams();
  const thisWallpaper = wallpapersDark.find(wallpaperDark => wallpaperDark.id === Number(id));
  const imageStyle = {brightness: 0, contrast: 0, saturation: 0};
  const [isActive, setActive] = useState(imageStyle);

  return (
    <>
      <Header />
      <StyledBigImageContainer>
        <ButtonBar>
          <button onClick={() => setActive({...isActive, brightness: +1})}>Brightness+</button>
          <button onClick={() => setActive({...isActive, brightness: imageStyle.brightness - 1})}>Brightness-</button>
          <button onClick={() => setActive({contrast: +1})}>Contrast+</button>
          <button onClick={() => setActive({...isActive, contrast: isActive.contrast - 1})}>Contrast-</button>
          <button onClick={() => setActive({...isActive, saturation: isActive.saturation + 1})}>Saturation+</button>
          <button onClick={() => setActive({...isActive, saturation: isActive.saturation - 1})}>Saturation-</button>
        </ButtonBar>
        <StyledImage src={thisWallpaper.image} alt={thisWallpaper.altIMG} style={imageStyle} />
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
const ButtonBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  button {
    border: none;
  }
`;

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
  grid-template-columns: 1fr 3fr;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
