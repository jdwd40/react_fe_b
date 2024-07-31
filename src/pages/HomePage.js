// src/pages/HomePage.js
import React from 'react';
import { Box } from '@chakra-ui/react';
import CoinList from '../components/CoinList';

function HomePage() {
  return (
    <Box>
      <CoinList />
    </Box>
  );
}

export default HomePage;
