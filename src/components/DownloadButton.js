import {useState} from 'react';
import Modal from 'react-modal';

import downloadtrue from '../images/downloadtrue.svg';
import polygon from '../images/polygon.svg';
import StyledDownloadButton from '../styled/StyledDownloadButton';

export default function DownloadButton() {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      background: 'transparent',
      border: 'none',
    },

    overlay: {
      backdropFilter: 'blur(5px)',
      backgroundColor: 'transparent',
    },
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
    setTimeout(() => {
      setModalIsOpen(false);
    }, 1500);
  }

  function closeModal() {
    setModalIsOpen(false);
  }
  return (
    <>
      <StyledDownloadButton onClick={openModal}>
        download
        <img src={polygon} alt="download" />
      </StyledDownloadButton>
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
      >
        <img src={downloadtrue} alt="download complete" />
      </Modal>
    </>
  );
}
