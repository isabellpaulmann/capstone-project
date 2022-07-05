import {Link} from 'react-router-dom';
import styled from 'styled-components';

import DownloadButton from '../components/DownloadButton';
import Header from '../components/Header';
import StyledImageContainer from '../styled/StyledImageContainer';
import wallpapersLighter from '../wallpaperDataLighter';

export default function ImageContainerLight() {
  return (
    <>
      <Header />
      <StyledImageContainer>
        {wallpapersLighter.map(wallpaperLight => {
          return (
            <article key={wallpaperLight.id}>
              <Link to={`/images/lighter/${wallpaperLight.id}`}>
                <img src={wallpaperLight.image} alt={wallpaperLight.altIMG} />
              </Link>
              <DownloadLink href={wallpaperLight.image} download={wallpaperLight.image}>
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
    background-color: #cd8282;
  }
`;

const DownloadLink = styled.a`
  display: flex;
  justify-content: center;
  text-decoration: none;
`;
