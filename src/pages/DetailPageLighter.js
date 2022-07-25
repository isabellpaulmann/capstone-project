import {useState, useRef, useEffect} from 'react';
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
import {StyledInput, StyledMain, fadeIn, ButtonBar, DownloadLink} from '../styled/StyledDetailPage';
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

  const [isDisabled, setIsDisabled] = useState(false);
  const startDrawing = () => {
    setIsDisabled(!isDisabled);
    setVisible2(!visible2);
    canvasRef.current.set('isActive', !isDisabled);
    canvasRef.current.clearFilter();
  };

  useEffect(() => {
    const filter = `brightness(${imageStyle.brightness * 100}%) contrast(${imageStyle.contrast}) saturate(${
      imageStyle.saturate * 100
    }%)`;
    if (canvasRef.current) {
      canvasRef.current.setFilter(filter);
    }
  }, [imageStyle]);
  function handleChangeLineWidth(event) {
    const parsedValue = Number.parseInt(event.target.value);
    setLineWidth(parsedValue);
    if (canvasRef.current) {
      canvasRef.current.set('lineWidth', parsedValue);
    }
  }

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
          id="canvas"
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
            <StyledInput type="number" value={lineWidth} onChange={handleChangeLineWidth} placeholder="size" />
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
          {visible && (
            <StyledInputColor
              type="color"
              color={color}
              onChange={event => {
                setColor(event.target.value);
                if (canvasRef.current) {
                  canvasRef.current.set('color', event.target.value);
                }
              }}
            />
          )}
        </ButtonBar>
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

const StyledInputColor = styled.input.attrs({type: 'color'})`
  background: none;
  color: #fff;
  cursor: pointer;
  width: 55px;
  height: 48px;
  border-color: transparent;
  border: none;
`;

const StyledBigImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  animation: ${fadeIn} 2s;

  @media (min-width: 390px) {
    margin-top: 3vh;
  }
  @media (min-width: 411px) {
    margin-top: 1px;
  }
  @media (min-width: 412px) {
    margin-top: 3vh;
  }
  @media (min-width: 414px) {
    margin-top: 3vh;
  }
  @media (min-width: 540px) {
    margin-top: 5px;
  }
  @media (min-width: 768px) {
    margin-top: 3vh;
  }
  @media (min-width: 820px) {
    margin-top: 10px;
  }
`;

export const StyledColorButton = styled.div`
  button {
    background-color: #cd8282;
    img {
      margin-top: -5px;
      width: 80px;
    }
  }
`;
