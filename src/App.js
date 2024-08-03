// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CoinProvider } from './CoinContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import BuyPage from './pages/BuyPage';
import SellPage from './pages/SellPage';
import PortfolioPage from './pages/PortfolioPage';
import CoinDetailsPage from './pages/CoinDetailsPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  const [user, setUser] = useState(null);

  const handleSignOut = () => {
    setUser(null); // Clear the user state
    // Optionally, you can also clear any tokens or session data here
  };

  return (
    <CoinProvider>
      <Router>
        <Header user={user} onSignOut={handleSignOut} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/coin/:id" element={<CoinDetailsPage />} />
          <Route path="/signin" element={<SignInPage setUser={setUser} />} />
          <Route path="/signup" element={<SignUpPage setUser={setUser} />} />
        </Routes>
      </Router>
    </CoinProvider>
  );
}

export default App;
