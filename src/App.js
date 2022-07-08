import {Routes, Route} from 'react-router-dom';

import DarkerImages from './pages/DarkerImages';
import DetailPageDarker from './pages/DetailPageDarker';
import DetailPageLighter from './pages/DetailPageLighter';
import Homepage from './pages/Homepage';
import LighterImages from './pages/LighterImages';
import StickerPage from './pages/StickerPage';
import stickers from './stickerData';
import wallpapersDark from './wallpaperDataDarker';
import wallpapersLight from './wallpaperDataLighter';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/images/lighter" element={<LighterImages />} />
      <Route path="/images/darker" element={<DarkerImages />} />
      <Route path="/images/darker/:id" element={<DetailPageDarker wallpapersDark={wallpapersDark} />} />
      <Route path="/images/lighter/:id" element={<DetailPageLighter wallpapersLight={wallpapersLight} />} />
      <Route path="/sticker" element={<StickerPage stickers={stickers} />} />
    </Routes>
  );
}
