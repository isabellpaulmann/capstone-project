import styled from 'styled-components';
import {keyframes} from 'styled-components';

export const StyledInput = styled.input`
  width: 44px;
  height: 33px;
  padding: 5px;
  margin-bottom: 15px;
  margin-top: 15px;
  border-radius: 20px;
  border: none;
  font-family: Jua, sans-serif;
  text-align: center;
  box-shadow: 1px 1px 15px #222;
`;

export const StyledMain = styled.div`
  overflow: hidden;
`;

export const StyledColorPicker = styled.div`
  position: absolute;
  left: 50vw;

  &.small .react-colorful {
    width: 100px;
    height: 80px;
  }
  &.small .react-colorful__hue {
    height: 10px;
  }
`;
export const fadeIn = keyframes`
from {opacity:0
}
to { opacity:1; }
`;
export const ButtonBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-left: -3px;
  margin-right: -3px;

  button {
    border: none;
    background-color: transparent;
    padding: 0;
    &:active {
      filter: drop-shadow(0 0 0.6rem #888);
    }
  }
`;

export const StyledColorButton = styled.div`
  button {
    background-color: #495b70;
    img {
      margin-top: -5px;
      width: 80px;
    }
  }
`;

export const DownloadLink = styled.a`
  display: flex;
  justify-content: center;
  text-decoration: none;
`;
