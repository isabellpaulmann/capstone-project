import {useState} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';

import AddStickerButton from '../components/AddStickerButton';
import DownloadButton from '../components/DownloadButton';
import Header from '../components/Header';
import brightnessminus from '../images/brightnessminus.svg';
import brightnessplus from '../images/brightnessplus.svg';
import contrastminus from '../images/contrastminus.svg';
import contrastplus from '../images/contrastplus.svg';
import deletesticker from '../images/deletesticker.svg';
import saturationminus from '../images/saturationminus.svg';
import saturationplus from '../images/saturationplus.svg';
import StyledFooter from '../styled/StyledFooter';

export default function DetailPageDarker({wallpapersDark}) {
  const {id} = useParams();
  const thisWallpaper = wallpapersDark.find(wallpaperDark => wallpaperDark.id === Number(id));
  const defaultImageStyle = {brightness: 0, contrast: 0, saturation: 0};
  const [imageStyle, setImageStyle] = useState(defaultImageStyle);

  return (
    <>
      <Header />
      <StyledBigImageContainer>
        <ButtonBar>
          <button onClick={() => setImageStyle({...imageStyle, brightness: imageStyle.brightness + 1})}>
            <img src={brightnessplus} alt="higher brightness" />
          </button>
          <button onClick={() => setImageStyle({...imageStyle, brightness: imageStyle.brightness - 1})}>
            <img src={brightnessminus} alt="lower brightness" />
          </button>
          <button onClick={() => setImageStyle({...imageStyle, contrast: imageStyle.contrast + 1})}>
            <img src={contrastplus} alt="higher contrast" />
          </button>
          <button onClick={() => setImageStyle({...imageStyle, contrast: imageStyle.contrast - 1})}>
            <img src={contrastminus} alt="lower contrast" />
          </button>
          <button onClick={() => setImageStyle({...imageStyle, saturation: imageStyle.saturation + 1})}>
            <img src={saturationplus} alt="higher saturation" />
          </button>
          <button onClick={() => setImageStyle({...imageStyle, saturation: imageStyle.saturation - 1})}>
            <img src={saturationminus} alt="lower saturation" />
          </button>
        </ButtonBar>
        <StyledImage
          src={thisWallpaper.image}
          alt={thisWallpaper.altIMG}
          style={{
            filter: `brightness(${imageStyle.brightness}) contrast(${imageStyle.contrast}) saturation(${imageStyle.saturation})`,
          }}
        />
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
    background-color: transparent;
    padding: 0;
    margin-left: -3px;
    margin-right: -3px;
    border-radius: 999px;
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
  grid-template-columns: 1fr 5fr;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
