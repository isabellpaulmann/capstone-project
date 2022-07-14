import {useState} from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

import downloadtrue from '../images/downloadtrue.svg';

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
      <StyledDownloadButton2 onClick={openModal}>
        download <br /> raw picture
      </StyledDownloadButton2>
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
const StyledDownloadButton2 = styled.button`
  width: 142px;
  height: 48px;
  background: #305216;
  box-shadow: 1px 1px 15px #222;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  margin-top: 8px;
  margin-bottom: 12px;
  text-align: center;
  padding-top: 3px;
  font-family: Jua, sans-serif;
  color: white;
  letter-spacing: 2px;
  align-items: center;
  font-size: 0.98rem;
`;
