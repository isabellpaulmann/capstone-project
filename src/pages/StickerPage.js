import styled from 'styled-components';

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
const StyledStickerContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  padding-left: 15px;
  padding-right: 15px;
  img {
    width: 100%;
    height: auto;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
