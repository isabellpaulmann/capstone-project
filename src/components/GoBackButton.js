import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

import goBack from '../images/goback.svg';

export default function GoBackButton() {
  const navigate = useNavigate();

  return (
    <>
      <StyledGoBackButton onClick={() => navigate(-1)}>
        <img src={goBack} alt="one page back" />
      </StyledGoBackButton>
    </>
  );
}

const StyledGoBackButton = styled.button`
  height: 58px;
`;
