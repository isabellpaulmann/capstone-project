import {useState} from 'react';
import {Routes, Route} from 'react-router-dom';

import DarkerImages from './pages/DarkerImages';
import LighterImages from './pages/DarkerImages';
import Homepage from './pages/Homepage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/images/lighter" element={<LighterImages />} />
      <Route path="/images/darker" element={<DarkerImages />} />
    </Routes>
  );

  function navigate(page) {
    setCurrentPage(page);
  }

  /* return 
  {currentPage === 'home' && <Homepage/>}
  {currentPage === 'images' && <Images/>}*/
}
