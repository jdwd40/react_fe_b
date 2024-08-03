// src/pages/CoinDetailsPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Text, Stack, useColorModeValue } from '@chakra-ui/react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function CoinDetailsPage() {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const [history, setHistory] = useState([]);
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');

  useEffect(() => {
    axios.get(`http://77.68.4.18:9001/api/coins/${id}`)
      .then(response => setCoin(response.data))
      .catch(error => console.error('Error fetching coin details:', error));

    axios.get(`http://77.68.4.18:9001/api/history/${id}`)
      .then(response => setHistory(response.data))
      .catch(error => console.error('Error fetching price history:', error));
  }, [id]);

  if (!coin) {
    return <Text>Loading...</Text>;
  }

  // Filter the history to the last 2 hours
  const twoHoursAgo = new Date(Date.now() - 2 * 60 * 60 * 1000);
  const filteredHistory = history.filter(entry => new Date(entry.timestamp) >= twoHoursAgo);

  const data = {
    labels: filteredHistory.map(entry => new Date(entry.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label: 'Price',
        data: filteredHistory.map(entry => parseFloat(entry.price)),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return (
    <Box p={4} bg={bgColor} color={textColor}>
      <Stack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">{coin.name} ({coin.symbol})</Text>
        <Text>Current Price: ${coin.current_price}</Text>
        <Text>Market Cap: ${coin.market_cap}</Text>
        <Text>Supply: {coin.supply}</Text>
        <Text>Description: {coin.description}</Text>
        <Box>
          <Line data={data} />
        </Box>
      </Stack>
    </Box>
  );
}

export default CoinDetailsPage;
