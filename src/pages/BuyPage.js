// src/pages/BuyPage.js
import React, { useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';
import axios from 'axios';
import BuyForm from '../components/BuyForm';

function BuyPage() {
  const [coins, setCoins] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get('http://77.68.4.18:9001/api/coins/')
      .then(response => setCoins(response.data))
      .catch(error => console.error('Error fetching coins:', error));
    
    axios.get('http://77.68.4.18:9001/api/users/1') // Assume user_id is 1
      .then(response => setUser(response.data))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>Buy Page</Text>
      <BuyForm coins={coins} user={user} />
    </Box>
  );
}

export default BuyPage;
