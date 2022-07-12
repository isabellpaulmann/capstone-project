import styled from 'styled-components';
import {keyframes} from 'styled-components';

const fadeIn = keyframes`
from {opacity:0
}
to { opacity:1; }
`;
const StyledImageContainer = styled.section`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 0 20px;
  padding-bottom: 20px;
  animation: ${fadeIn} 2s;

  @media (min-width: 425px) {
    grid-template-columns: repeat(4, 1fr);
  }
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

export default StyledImageContainer;
