import styled from 'styled-components';

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
  padding-bottom: 20px;
  padding-top: 10px;
`;
export default StyledFooter;
