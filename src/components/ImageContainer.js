import {useState} from 'react';
import styled from 'styled-components';

import StyledImageContainer from '../styled/StyledImageContainer';
import data from '../wallpaperData';

import DownloadButton from './DownloadButton';

export default function ImageContainer() {
  const [wallpapers, setWallpapers] = useState(data);

  return (
    <StyledBox>
      <StyledImageContainer>
        {wallpapers.map(wallpaper => {
          return (
            <>
              <img key={wallpaper.id} src={wallpaper.image} alt={wallpaper.altIMG} />{' '}
              <a href={wallpaper.image} download={wallpaper.image}>
                <DownloadButton />
              </a>
            </>
          );
        })}
      </StyledImageContainer>
    </StyledBox>
  );
}

const StyledBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 10px;
`;
