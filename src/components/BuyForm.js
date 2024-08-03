// src/components/BuyForm.js
import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Select,
  Input,
  Text,
  Stack,
  Button,
  useColorModeValue,
  useToast,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import axios from 'axios';

function BuyForm({ coins, user }) {
  const [selectedCoin, setSelectedCoin] = useState('');
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handleCoinChange = (e) => {
    setSelectedCoin(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(Number(e.target.value));
  };

  const handleConfirm = async () => {
    setLoading(true);

    const coin = coins.find(c => c.coin_id === Number(selectedCoin));
    const total = coin ? parseFloat(coin.current_price) * amount : 0;

    if (total > user.funds) {
      toast({
        title: "Insufficient funds",
        description: "You do not have enough balance to complete this transaction.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      setLoading(false);
      onClose();
      return;
    }

    try {
      await axios.post('http://77.68.4.18:9001/api/transactions', {
        user_id: user.user_id,
        coin_id: selectedCoin,
        type: 'buy',
        amount: amount,
      });

      toast({
        title: "Transaction successful",
        description: "Your purchase was completed successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      // Optionally, update user's funds locally after successful transaction
      // setUser({...user, funds: user.funds - total});
    } catch (error) {
      console.error('Error posting transaction:', error);
      toast({
        title: "Transaction failed",
        description: "There was an error processing your transaction.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
      onClose();
    }
  };

  const coin = coins.find(c => c.coin_id === Number(selectedCoin));
  const price = coin ? parseFloat(coin.current_price) : 0;
  const total = price * amount;

  return (
    <Box
      maxW={'lg'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow={'lg'}
      rounded={'lg'}
      p={8}
    >
      <Stack spacing={4} as="form" onSubmit={(e) => { e.preventDefault(); onOpen(); }}>
        <Text>Your Balance: ${parseFloat(user.funds).toFixed(2)}</Text>
        <FormControl id="coin">
          <FormLabel>Select Coin</FormLabel>
          <Select placeholder="Select coin" value={selectedCoin} onChange={handleCoinChange}>
            {coins.map((coin) => (
              <option key={coin.coin_id} value={coin.coin_id}>
                {coin.name}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl id="amount">
          <FormLabel>Amount</FormLabel>
          <Input type="number" value={amount} onChange={handleAmountChange} min="0" />
        </FormControl>
        {coin && (
          <>
            <Text>Current Price: ${price.toFixed(2)}</Text>
            <Text>Total Cost: ${total.toFixed(2)}</Text>
          </>
        )}
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={loading}
          type="submit"
        >
          Buy
        </Button>
      </Stack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Purchase</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Are you sure you want to buy {amount} {coin?.name} for a total of ${total.toFixed(2)}?</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="teal" onClick={handleConfirm} isLoading={loading}>
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default BuyForm;
