import {useState} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';

import './test.css';

import AddStickerButton from '../components/AddStickerButton';
import DownloadButton from '../components/DownloadButton';
import Header from '../components/Header';
import deletesticker from '../images/deletesticker.svg';
import StyledFooter from '../styled/StyledFooter';

export default function DetailPageDarker({wallpapersDark}) {
  const {id} = useParams();
  const thisWallpaper = wallpapersDark.find(wallpaperDark => wallpaperDark.id === Number(id));
  const [isActive, setActive] = useState(false);
  const [isActive2, setActive2] = useState(false);
  const [isActive3, setActive3] = useState(false);
  const [isActive4, setActive4] = useState(false);
  const [isActive5, setActive5] = useState(false);
  const [isActive6, setActive6] = useState(false);

  const higherBrightness = () => {
    setActive(!isActive);
  };
  const lowerBrightness = () => {
    setActive2(!isActive2);
  };
  const higherContrast = () => {
    setActive3(!isActive3);
  };
  const lowerContrast = () => {
    setActive4(!isActive4);
  };
  const changeColor1 = () => {
    setActive5(!isActive5);
  };
  const changeColor2 = () => {
    setActive6(!isActive6);
  };
  return (
    <>
      <Header />
      <StyledBigImageContainer>
        <button onClick={higherBrightness}>Brightness+</button>
        <button onClick={lowerBrightness}>Brightness-</button>
        <button onClick={higherContrast}>Contrast+</button>
        <button onClick={lowerContrast}>Contrast-</button>
        <button onClick={changeColor1}>Color1</button>
        <button onClick={changeColor2}>Color2</button>
        <StyledImage
          src={thisWallpaper.image}
          alt={thisWallpaper.altIMG}
          className={isActive ? 'makeBrighter' : null}
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
  justify-content: center;
  align-content: center;
  align-items: center;
`;
