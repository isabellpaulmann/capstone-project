import styled from 'styled-components';
import {keyframes} from 'styled-components';

import Header from '../components/Header';
import stickers from '../stickerData';

export default function StickerPage() {
  return (
    <>
      <Header />
      <StyledStickerContainer>
        {stickers.map(sticker => {
          return (
            <article key={sticker.id}>
              <img src={sticker.image} alt={sticker.altIMG} />
            </article>
          );
        })}
      </StyledStickerContainer>
    </>
  );
}
const easeIn = keyframes`
from {opacity:0
}
to { opacity:1; }
`;

const StyledStickerContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  padding-left: 15px;
  padding-right: 15px;
  animation: ${easeIn} 2s;
  img {
    width: 100%;
    height: auto;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
