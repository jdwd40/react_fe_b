// src/components/CoinList.js
import React, { useContext, useEffect } from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';
import axios from 'axios';
import { CoinContext } from '../CoinContext';

function CoinList() {
  const { coins, setCoins } = useContext(CoinContext);

  useEffect(() => {
    axios.get('http://77.68.4.18:9001/api/coins/')
      .then(response => setCoins(response.data))
      .catch(error => console.error('Error fetching coins:', error));
  }, [setCoins]);

  console.log(coins);

  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>Coin List</Text>
      <VStack spacing={4} align="stretch">
        {coins.map(coin => (
          <Box key={coin.coin_id} p={4} borderWidth="1px" borderRadius="lg">
            <Text fontWeight="bold">{coin.name}</Text>
            <Text>Symbol: {coin.symbol}</Text>
            <Text>Current Price: ${coin.current_price}</Text>
            <Text>Market Cap: ${coin.market_cap}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}

export default CoinList;
