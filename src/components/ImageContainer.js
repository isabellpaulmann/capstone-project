import styled from 'styled-components';

import StyledImageContainer from '../styled/StyledImageContainer';
import wallpapers from '../wallpaperData';

import DownloadButton from './DownloadButton';

export default function ImageContainer() {
  return (
    <StyledImageContainer>
      {wallpapers.map(wallpaper => {
        return (
          <article key={wallpaper.id}>
            <img src={wallpaper.image} alt={wallpaper.altIMG} />
            <DownloadLink href={wallpaper.image} download={wallpaper.image}>
              <DownloadButton />
            </DownloadLink>
          </article>
        );
      })}
    </StyledImageContainer>
  );
}

const DownloadLink = styled.a`
  display: flex;
  justify-content: center;
`;
