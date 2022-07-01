import {Routes, Route} from 'react-router-dom';

import DarkerImages from './pages/DarkerImages';
import Homepage from './pages/Homepage';
import LighterImages from './pages/LighterImages';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/images/lighter" element={<LighterImages />} />
      <Route path="/images/darker" element={<DarkerImages />} />
    </Routes>
  );
}
