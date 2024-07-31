// src/pages/BuyPage.js
import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import BuyForm from '../components/BuyForm';

function BuyPage() {
  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>Buy Page</Text>
      <BuyForm />
    </Box>
  );
}

export default BuyPage;
