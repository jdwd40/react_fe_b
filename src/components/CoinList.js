// src/components/CoinList.js
import React, { useContext, useEffect } from 'react';
import { Box, Center, Text, Stack, List, ListItem, ListIcon, Button, useColorModeValue } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CoinContext } from '../CoinContext';

function CoinList() {
  const { coins, setCoins } = useContext(CoinContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://77.68.4.18:9001/api/coins/')
      .then(response => setCoins(response.data))
      .catch(error => console.error('Error fetching coins:', error));
  }, [setCoins]);

  // Call hooks at the top level
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const badgeBgColor = useColorModeValue('green.50', 'green.900');
  const badgeColor = useColorModeValue('green.500', 'green.500');
  const boxBgColor = useColorModeValue('gray.50', 'gray.900');

  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>Coin List</Text>
      <Stack spacing={6}>
        {coins.map(coin => (
          <Center py={6} key={coin.coin_id}>
            <Box
              maxW={'200px'}  // Adjusted the max width to be smaller
              w={'full'}
              bg={bgColor}
              boxShadow={'2xl'}
              rounded={'md'}
              overflow={'hidden'}>
              <Stack
                textAlign={'center'}
                p={4}  
                color={textColor}
                align={'center'}>
                <Text
                  fontSize={'sm'}
                  fontWeight={500}
                  bg={badgeBgColor}
                  p={2}
                  px={3}
                  color={badgeColor}
                  rounded={'full'}>
                  {coin.name}
                </Text>
                <Stack direction={'row'} align={'center'} justify={'center'}>
                  <Text fontSize={'2xl'}>$</Text>  // Adjusted font size
                  <Text fontSize={'4xl'} fontWeight={800}>
                    {coin.current_price}
                  </Text>
                  <Text color={'gray.500'}>/coin</Text>
                </Stack>
              </Stack>

              <Box bg={boxBgColor} px={4} py={6}> 
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="green.400" />
                    Market Cap: ${coin.market_cap}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="green.400" />
                    Supply: {coin.supply}
                  </ListItem>
                </List>

                <Button
                  mt={6}
                  w={'full'}
                  bg={'green.400'}
                  color={'white'}
                  rounded={'xl'}
                  boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                  _hover={{
                    bg: 'green.500',
                  }}
                  _focus={{
                    bg: 'green.500',
                  }}
                  onClick={() => navigate(`/coin/${coin.coin_id}`)}
                >
                  View Details
                </Button>
              </Box>
            </Box>
          </Center>
        ))}
      </Stack>
    </Box>
  );
}

export default CoinList;
