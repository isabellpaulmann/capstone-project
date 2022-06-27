import styled from 'styled-components';

import wallpaper1 from '../images/wallpaper1.png';
import wallpaper10 from '../images/wallpaper10.png';
import wallpaper11 from '../images/wallpaper11.png';
import wallpaper12 from '../images/wallpaper12.png';
import wallpaper2 from '../images/wallpaper2.png';
import wallpaper3 from '../images/wallpaper3.png';
import wallpaper4 from '../images/wallpaper4.png';
import wallpaper5 from '../images/wallpaper5.png';
import wallpaper6 from '../images/wallpaper6.png';
import wallpaper7 from '../images/wallpaper7.png';
import wallpaper8 from '../images/wallpaper8.png';
import wallpaper9 from '../images/wallpaper9.png';
import StyledImageContainer from '../styled/StyledImageContainer';

import DownloadButton from './DownloadButton';

export default function ImageContainer() {
  return (
    <StyledBox>
      <StyledImageContainer>
        <img src={wallpaper3} alt="colourful wallpaper" />
        <DownloadButton />
      </StyledImageContainer>

      <StyledImageContainer>
        <img src={wallpaper2} alt="colourful wallpaper" />
        <DownloadButton />
      </StyledImageContainer>

      <StyledImageContainer>
        <img src={wallpaper1} alt="colourful wallpaper" />
        <DownloadButton />
      </StyledImageContainer>

      <StyledImageContainer>
        <img src={wallpaper4} alt="colourful wallpaper" />
        <DownloadButton />
      </StyledImageContainer>

      <StyledImageContainer>
        <img src={wallpaper9} alt="colourful wallpaper" />
        <DownloadButton />
      </StyledImageContainer>

      <StyledImageContainer>
        <img src={wallpaper6} alt="colourful wallpaper" />
        <DownloadButton />
      </StyledImageContainer>

      <StyledImageContainer>
        <img src={wallpaper11} alt="colourful wallpaper" />
        <DownloadButton />
      </StyledImageContainer>

      <StyledImageContainer>
        <img src={wallpaper10} alt="colourful wallpaper" />
        <DownloadButton />
      </StyledImageContainer>

      <StyledImageContainer>
        <img src={wallpaper7} alt="colourful wallpaper" />
        <DownloadButton />
      </StyledImageContainer>

      <StyledImageContainer>
        <img src={wallpaper5} alt="colourful wallpaper" />
        <DownloadButton />
      </StyledImageContainer>

      <StyledImageContainer>
        <img src={wallpaper8} alt="colourful wallpaper" />
        <DownloadButton />
      </StyledImageContainer>

      <StyledImageContainer>
        <img src={wallpaper12} alt="colourful wallpaper" />
        <DownloadButton />
      </StyledImageContainer>
    </StyledBox>
  );
}

const StyledBox = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 0;
  margin-left: 10px;
  margin-right: 10px;
`;
