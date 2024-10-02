import React from 'react';
import { Box, Image, Text, Badge, Button, Flex } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const UniversityCard = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      borderWidth="1px"
      borderRadius="lg"
      p={5}
      mb={4}
      boxShadow="lg"
      marginX="10rem"
    >
      <Flex alignItems="center">
        <Box>
          <Badge colorScheme="blue" borderRadius="full" px={2} py={1}>
            1
          </Badge>
        </Box>

        <Box ml={4}>
          <Text fontWeight="bold" fontSize="xl">
            Ciência da Computação na UNIVALI
          </Text>
          <Box display="flex" alignItems="center" mt={2}>
            <Badge colorScheme="yellow" mr={2} px={2}>
              Ouro
            </Badge>
            <Box as="span" color="gray.600" fontSize="sm">
              78% dos alunos recomendam esta instituição
            </Box>
          </Box>

          <Box display="flex" alignItems="center" mt={2}>
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < 4 ? "blue.500" : "gray.300"}
                />
              ))}
            <Text ml={2} color="gray.600" fontSize="sm">
              306 avaliações
            </Text>
          </Box>
        </Box>
      </Flex>

      <Box textAlign="right">
        <Text fontSize="sm" color="gray.500" mb={2}>
          O Quero Bolsa não oferece vagas para a UNIVALI.
        </Text>
        <Button colorScheme="green" size="md">
          Nota de corte: 720.54
        </Button>
      </Box>
    </Box>
  );
};

export default UniversityCard;
