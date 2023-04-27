import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Statistic } from './pages/Statistic/Statistic';
import { Header } from './shared/Header/Header';
import { Popup } from './shared/Popup/Popup';
import './styles/index.scss';

function App() {
  return (
    <div className="global-container">
      <Popup />
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/statistic" element={<Statistic />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
