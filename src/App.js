import {Routes, Route} from 'react-router-dom';

import DarkerImages from './pages/DarkerImages';
import DetailPageDarker from './pages/DetailPageDarker';
import Homepage from './pages/Homepage';
import LighterImages from './pages/LighterImages';
import wallpapersDark from './wallpaperDataDarker';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/images/lighter" element={<LighterImages />} />
      <Route path="/images/darker" element={<DarkerImages />} />
      <Route path="/images/darker/:id" element={<DetailPageDarker wallpapersDark={wallpapersDark} />} />
    </Routes>
  );
}
