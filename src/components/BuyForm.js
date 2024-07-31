// src/components/BuyForm.js
import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Select } from '@chakra-ui/react';
import axios from 'axios';

function BuyForm() {
  const [coinId, setCoinId] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:9001/api/transactions', {
        user_id: 1, // Replace with actual user ID
        coin_id: coinId,
        type: 'buy',
        amount,
        price: 2.50, // Replace with actual price
      });
      // Handle success (e.g., show a success message)
    } catch (error) {
      console.error('Error creating transaction:', error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <Box p={4}>
      <form onSubmit={handleSubmit}>
        <FormControl id="coin" mb={4}>
          <FormLabel>Coin</FormLabel>
          <Select value={coinId} onChange={(e) => setCoinId(e.target.value)} placeholder="Select coin">
            <option value="1">Bitcoin</option>
            <option value="2">Ethereum</option>
            <option value="3">Litecoin</option>
            {/* Add more options based on your coin list */}
          </Select>
        </FormControl>
        <FormControl id="amount" mb={4}>
          <FormLabel>Amount</FormLabel>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </FormControl>
        <Button type="submit" colorScheme="teal">
          Buy
        </Button>
      </form>
    </Box>
  );
}

export default BuyForm;
