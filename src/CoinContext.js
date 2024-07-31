// src/CoinContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CoinContext = createContext();

export const CoinProvider = ({ children }) => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await axios.get('http://77.68.4.18:9001/api/coins/');
        setCoins(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchCoins();
  }, []);

  return (
    <CoinContext.Provider value={{ coins, setCoins, loading, error }}>
      {children}
    </CoinContext.Provider>
  );
};
