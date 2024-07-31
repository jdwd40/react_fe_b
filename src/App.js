// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CoinProvider } from './CoinContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import BuyPage from './pages/BuyPage';
import SellPage from './pages/SellPage';
import PortfolioPage from './pages/PortfolioPage';
import CoinDetailsPage from './pages/CoinDetailsPage';

function App() {
  return (
    <CoinProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/coin/:id" element={<CoinDetailsPage />} />
        </Routes>
      </Router>
    </CoinProvider>
  );
}

export default App;
