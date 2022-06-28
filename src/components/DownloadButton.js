import downloadButton from '../images/Download.svg';
import StyledDownloadButton from '../styled/StyledDownloadButton';

export default function DownloadButton() {
  return (
    <>
      <StyledDownloadButton>
        <img src={downloadButton} alt="download" />
      </StyledDownloadButton>
    </>
  );
}
