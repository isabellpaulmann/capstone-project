import {keyframes} from 'styled-components';
import styled from 'styled-components';

const fadeIn = keyframes`
from {opacity:0
}
to { opacity:1; }
`;

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  align-items: center;
  padding-top: 2px;
  padding-bottom: 1px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 2;
  background-color: #383233;
  justify-items: center;
  animation: ${fadeIn} 2s;

  button {
    background-color: transparent;
    border: none;
    height: auto;
    cursor: pointer;
  }
`;
export default StyledHeader;
