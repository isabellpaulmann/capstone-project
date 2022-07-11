import DomToImage from 'dom-to-image';
import {useState} from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

import downloadtrue from '../images/downloadtrue.svg';
import saveEdit from '../images/myedit.svg';

export default function MyEditDownloadButton() {
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
    const node = document.getElementById('editedPicture');

    DomToImage.toPng(node).then(function (dataURL) {
      var link = document.createElement('a');
      link.download = 'my-image-name.png';
      link.href = dataURL;
      link.click();
    });
  }

  function closeModal() {
    setModalIsOpen(false);
  }
  return (
    <>
      <StyledMyEditDownloadButton onClick={openModal}>
        <img src={saveEdit} alt="download edited" />
      </StyledMyEditDownloadButton>
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
const StyledMyEditDownloadButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
`;
