// src/pages/SellPage.js
import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import SellForm from '../components/SellForm';

function SellPage() {
  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>Sell Page</Text>
      <SellForm />
    </Box>
  );
}

export default SellPage;
