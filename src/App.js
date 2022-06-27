import ImageContainer from './components/ImageContainer';
import Logo from './images/logo.svg';
import StyledHeader from './styled/StyledHeader';

export default function App() {
  return (
    <>
      <StyledHeader>
        <img src={Logo} alt="App Logo" />
      </StyledHeader>
      <ImageContainer></ImageContainer>
    </>
  );
}
