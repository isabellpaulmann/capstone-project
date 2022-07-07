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
  const [isActive, setActive] = useState(edits);
  const edits = [];
  return (
    <>
      <Header />
      <StyledBigImageContainer>
        <ButtonGroup>
          <button onClick={() => setActive(edit[1])}>Brightness+</button>
          <button onClick={() => setActive(edit)}>Brightness-</button>
          <button onClick={() => setActive(edit)}>Contrast+</button>
          <button onClick={() => setActive(edit)}>Contrast-</button>
          <button onClick={() => setActive(edit)}>Color1</button>
          <button onClick={() => setActive(edit)}>Color2</button>
        </ButtonGroup>
        <StyledImage src={thisWallpaper.image} alt={thisWallpaper.altIMG} className={isActive ? setActive : null} />
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
const ButtonGroup = styled.div``;

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
