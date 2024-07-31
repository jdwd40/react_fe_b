// src/components/Header.js
import React from 'react';
import { Box, Flex, Link, Text, Spacer } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Header() {
  return (
    <Box bg="teal.500" p={4} color="white">
      <Flex alignItems="center">
        <Text fontSize="xl" fontWeight="bold">
          Crypto Exchange Simulator
        </Text>
        <Spacer />
        <Flex alignItems="center">
          <Text mr={4}>User: John Doe</Text>
          <Text mr={4}>Balance: $10,000</Text>
          <Link as={RouterLink} to="/" mr={4}>
            Home
          </Link>
          <Link as={RouterLink} to="/buy" mr={4}>
            Buy
          </Link>
          <Link as={RouterLink} to="/sell" mr={4}>
            Sell
          </Link>
          <Link as={RouterLink} to="/portfolio" mr={4}>
            Portfolio
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
