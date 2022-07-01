import styled from 'styled-components';

const StyledImageContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 0 20px 0px 20px;
  padding-bottom: 20px;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

export default StyledImageContainer;
