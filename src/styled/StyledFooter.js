import {keyframes} from 'styled-components';
import styled from 'styled-components';

const fadeIn = keyframes`
from {opacity:0
}
to { opacity:1; }
`;
const StyledFooter = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 4fr 3fr 4fr;
  align-items: center;
  justify-items: center;
  z-index: 2;
  background-color: #383233;
  position: absolute;
  bottom: 0;
  margin-bottom: 5px;
  margin-top: 5px;
  animation: ${fadeIn} 2s;
`;
export default StyledFooter;
