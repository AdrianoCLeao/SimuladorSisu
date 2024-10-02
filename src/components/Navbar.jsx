import React from 'react';
import { Box, Flex, Text, Button, Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box bg="blue.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Text fontSize="lg" fontWeight="bold" color="white">
          Minha Universidade
        </Text>
        <Flex alignItems="center">
          <ChakraLink as={Link} to="/" mr={4} color="white">
            Home
          </ChakraLink>
          <ChakraLink as={Link} to="/universities" mr={4} color="white">
            Universidades
          </ChakraLink>
          <Button colorScheme="teal" variant="solid">
            Login
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
