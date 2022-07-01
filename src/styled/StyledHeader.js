import styled from 'styled-components';

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 6fr 1fr;
  justify-items: end;
  align-items: center;
  padding-top: 6px;
  padding-bottom: 5px;
  padding-right: 5px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 2;
  background-color: #383233;

  button {
    background-color: transparent;
    border: none;
    height: auto;
    cursor: pointer;
  }
`;
export default StyledHeader;
