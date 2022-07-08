import {Link} from 'react-router-dom';

import addstickers from '../images/addstickers.svg';

export default function AddStickerButton() {
  return (
    <>
      <Link to="/sticker">
        <img src={addstickers} alt="add a sticker" />
      </Link>
    </>
  );
}
