import {Link} from 'react-router-dom';
import styled from 'styled-components';

import DownloadButton from '../components/DownloadButton';
import Header from '../components/Header';
import StyledImageContainer from '../styled/StyledImageContainer';
import wallpapersDarker from '../wallpaperDataDarker';

export default function ImageContainerDark() {
  return (
    <>
      <Header />
      <StyledImageContainer>
        {wallpapersDarker.map(wallpaperDark => {
          return (
            <article key={wallpaperDark.id}>
              <Link to={`/images/darker/${wallpaperDark.id}`}>
                <img src={wallpaperDark.image} alt={wallpaperDark.altIMG} />
              </Link>
              <DownloadLink href={wallpaperDark.image} download={wallpaperDark.image}>
                <StyledColorButtonContainer>
                  <DownloadButton />
                </StyledColorButtonContainer>
              </DownloadLink>
            </article>
          );
        })}
      </StyledImageContainer>
    </>
  );
}

const StyledColorButtonContainer = styled.div`
  button {
    background-color: #495b70;
  }
`;

const DownloadLink = styled.a`
  display: flex;
  justify-content: center;
  text-decoration: none;
`;
