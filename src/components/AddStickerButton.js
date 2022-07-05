import {Link} from 'react-router-dom';

import addSticker from '../images/addsticker.svg';

export default function AddStickerButton() {
  return (
    <>
      <Link to="/sticker">
        <img src={addSticker} alt="add a sticker" />
      </Link>
    </>
  );
}
