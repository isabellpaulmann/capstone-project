import {useState} from 'react';
import CanvasDraw from 'react-canvas-draw';
import {HexColorPicker} from 'react-colorful';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import {keyframes} from 'styled-components';

import DownloadButton from '../components/DownloadButton';
import Header from '../components/Header';
import MyEditDownloadButton from '../components/MyEditDownloadButton';
import brightnessminus from '../images/brightnessminus.svg';
import brightnessplus from '../images/brightnessplus.svg';
import colors from '../images/colors.svg';
import contrastminus from '../images/contrastminus.svg';
import contrastplus from '../images/contrastplus.svg';
import deleteAll from '../images/deletedrawing.svg';
import draw from '../images/drawopen.svg';
import saturationminus from '../images/saturationminus.svg';
import saturationplus from '../images/saturationplus.svg';
import StyledFooter from '../styled/StyledFooter';

export default function DetailPageDarker({wallpapersDark}) {
  const {id} = useParams();
  const thisWallpaper = wallpapersDark.find(wallpaperDark => wallpaperDark.id === Number(id));
  const defaultImageStyle = {brightness: 1, contrast: 1, saturate: 1};
  const [imageStyle, setImageStyle] = useState(defaultImageStyle);
  const [color, setColor] = useState('#aabbcc');
  const [visible, setVisible] = useState(false);
  const defaultdraw = {
    brushRadius: 5,
  };
  const [state, setState] = useState(defaultdraw);
  const [disable, setDisable] = useState(false);

  return (
    <StyledMain>
      <Header />
      <StyledBigImageContainer>
        <ButtonBar>
          <button onClick={() => setImageStyle({...imageStyle, brightness: imageStyle.brightness + 0.1})}>
            <img src={brightnessplus} alt="higher brightness" />
          </button>
          <button onClick={() => setImageStyle({...imageStyle, brightness: imageStyle.brightness - 0.1})}>
            <img src={brightnessminus} alt="lower brightness" />
          </button>
          <button onClick={() => setImageStyle({...imageStyle, contrast: imageStyle.contrast + 0.1})}>
            <img src={contrastplus} alt="higher contrast" />
          </button>
          <button onClick={() => setImageStyle({...imageStyle, contrast: imageStyle.contrast - 0.1})}>
            <img src={contrastminus} alt="lower contrast" />
          </button>
          <button onClick={() => setImageStyle({...imageStyle, saturate: imageStyle.saturate + 0.1})}>
            <img src={saturationplus} alt="higher saturation" />
          </button>
          <button onClick={() => setImageStyle({...imageStyle, saturate: imageStyle.saturate - 0.1})}>
            <img src={saturationminus} alt="lower saturation" />
          </button>
        </ButtonBar>
        <CanvasDraw
          disabled={disable}
          hideInterface
          hideGrid
          brushColor={color}
          enablePanAndZoom
          clampLinesToDocument
          imgSrc={thisWallpaper.image}
          canvasHeight={497}
          canvasWidth={230}
          brushRadius={state.brushRadius}
          id="editedPicture"
          style={{
            backgroundColor: '#333',
            filter: `brightness(${imageStyle.brightness}) contrast(${imageStyle.contrast}) saturate(${imageStyle.saturate})`,
          }}
        ></CanvasDraw>
        <ButtonBar>
          <button>
            <img src={draw} alt="start drawing" />
          </button>
          <StyledInput
            type="number"
            value={state.brushRadius}
            onChange={e => setState({brushRadius: parseInt(e.target.value, 10)})}
            placeholder="size"
          />
          <button onClick={() => setVisible(!visible)}>
            <img src={colors} alt="color palette" />
          </button>
          <button onClick={() => setDisable(true)}>
            <img src={deleteAll} alt="delete all drawings" />
          </button>
        </ButtonBar>
        {visible && (
          <StyledColorPicker className="small">
            <HexColorPicker color={color} onChange={setColor} />
          </StyledColorPicker>
        )}
      </StyledBigImageContainer>
      <StyledFooter>
        <DownloadLink href={thisWallpaper.image} download={thisWallpaper.image}>
          <StyledColorButton>
            <DownloadButton />
          </StyledColorButton>
        </DownloadLink>
        <MyEditDownloadButton />
      </StyledFooter>
    </StyledMain>
  );
}
const StyledInput = styled.input`
  width: 44px;
  height: 33px;
  padding: 5px;
  margin-bottom: 15px;
  margin-top: 15px;
  border-radius: 20px;
  border: none;
  font-family: Jua, sans-serif;
  text-align: center;
  box-shadow: 1px 1px 15px #222;
`;

const StyledMain = styled.div`
  overflow: hidden;
`;

const StyledColorPicker = styled.div`
  position: absolute;
  left: 50vw;

  &.small .react-colorful {
    width: 100px;
    height: 80px;
  }
  &.small .react-colorful__hue {
    height: 10px;
  }
`;
const fadeIn = keyframes`
from {opacity:0
}
to { opacity:1; }
`;
const ButtonBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-left: -3px;
  margin-right: -3px;

  button {
    border: none;
    background-color: transparent;
    padding: 0;
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
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-content: center;
  align-items: center;
  animation: ${fadeIn} 2s;
`;
