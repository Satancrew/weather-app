import React from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Statistic } from './pages/Statistic/Statistic';
import './styles/index.scss';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/statistic"
        element={<Statistic />}
      />
    </Routes>
  );
}

export default App;
