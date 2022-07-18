import {useState, useRef} from 'react';
import {HexColorPicker} from 'react-colorful';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';

import Canvas from '../components/Canvas';
import DownloadButton2 from '../components/DownloadButton2';
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
import {StyledInput, StyledMain, StyledColorPicker, fadeIn, ButtonBar, DownloadLink} from '../styled/StyledDetailPage';
import StyledFooter from '../styled/StyledFooter';

export default function DetailPageLighter({wallpapersLight}) {
  const {id} = useParams();
  const thisWallpaper = wallpapersLight.find(wallpaperLight => wallpaperLight.id === Number(id));
  const defaultImageStyle = {brightness: 1, contrast: 1, saturate: 1};
  const [imageStyle, setImageStyle] = useState(defaultImageStyle);
  const [color, setColor] = useState('#aabbcc');
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [lineWidth, setLineWidth] = useState(5);
  const canvasRef = useRef();

  const [isDisabled, setIsDisabled] = useState(true);
  const startDrawing = () => {
    setIsDisabled(!isDisabled);
    setVisible2(!visible2);
  };

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
        <Canvas
          color={color}
          lineWidth={lineWidth}
          ref={canvasRef}
          disabled={isDisabled}
          image={thisWallpaper.image}
          style={{
            filter: `brightness(${imageStyle.brightness}) contrast(${imageStyle.contrast}) saturate(${imageStyle.saturate})`,
          }}
        ></Canvas>
        <ButtonBar>
          <button onClick={startDrawing}>
            <img src={draw} alt="start drawing" />
          </button>
          {visible2 && (
            <StyledInput
              type="number"
              value={lineWidth}
              onChange={e => setLineWidth(Number.parseFloat(e.target.value))}
              placeholder="size"
            />
          )}
          {visible2 && (
            <button onClick={() => setVisible(!visible)}>
              <img src={colors} alt="color palette" />
            </button>
          )}
          {visible2 && (
            <button
              onClick={() => {
                if (canvasRef.current) {
                  canvasRef.current.clear();
                }
              }}
            >
              <img src={deleteAll} alt="delete all drawings" />
            </button>
          )}
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
            <DownloadButton2 />
          </StyledColorButton>
        </DownloadLink>
        <div
          onClick={() => {
            if (canvasRef.current) {
              canvasRef.current.download();
            }
          }}
        >
          <MyEditDownloadButton />
        </div>
      </StyledFooter>
    </StyledMain>
  );
}

const StyledBigImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 2s;
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
