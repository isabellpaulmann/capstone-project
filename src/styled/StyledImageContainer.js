import styled from 'styled-components';

const StyledImageContainer = styled.section`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 0 20px;
  padding-bottom: 20px;

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
