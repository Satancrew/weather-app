import React from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Statistic } from './pages/Statistic/Statistic';
import { Header } from './shared/Header/Header';
import './styles/index.scss';

function App() {
  return (
    <div className="container">
      <Header />
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
    </div>
  );
}

export default App;
