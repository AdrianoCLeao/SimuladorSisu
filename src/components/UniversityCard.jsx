import React from 'react';
import { Box, Text, Badge, Button, Flex, Stack } from '@chakra-ui/react';
import { FaGlobeAmericas } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const UniversityCard = ({ university, index }) => {
  const {
    courseName,
    universityName,
    campus,
    location,
    shift,
    userScore,
    cutoffScore,
  } = university;

  const navigate = useNavigate();

  const handleCardClick = () => {
    // Redireciona para a página de detalhes, passando o ID ou index da universidade
    navigate(`/university/${university.id}`, { state: { university } });
  };

  // Lógica para determinar a cor do botão de Nota de Corte
  const getCutoffButtonColor = () => {
    const difference = userScore - cutoffScore;

    if (difference >= 0) {
      return 'green'; // Se a userScore for maior ou igual à cutoffScore
    } else if (difference >= -10) {
      return '#D69E2E'; // Se a diferença for até 10 pontos
    } else {
      return '#C53030'; // Tom diferente de vermelho (pode ser ajustado conforme necessário)
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      borderWidth="1px"
      borderRadius="lg"
      p={6}
      mb={5}
      boxShadow="xl"
      marginX={{ base: '1rem', lg: '10rem' }}
      _hover={{ cursor: 'pointer', boxShadow: '2xl' }}
      onClick={handleCardClick}
    >
      <Flex alignItems="center">
        <Box>
          <Badge colorScheme="blue" borderRadius="full" px={2} py={1}>
            {index} {/* Exibe o índice incremental */}
          </Badge>
        </Box>

        <Box ml={4}>
          <Text fontWeight="bold" fontSize="xl" noOfLines={1}>
            {courseName} na {universityName}
          </Text>
          <Box display="flex" alignItems="center" mt={2}>
            <Badge colorScheme="blue" mr={2} px={2}>
              {shift}
            </Badge>
            <Box as="span" color="gray.600" fontSize="sm">
              {campus}
            </Box>
          </Box>

          <Box display="flex" alignItems="center" mt={2}>
            <FaGlobeAmericas color="gray.300" />
            <Text ml={2} color="gray.600" fontSize="sm">
              {location}
            </Text>
          </Box>
        </Box>
      </Flex>

      <Box textAlign="right">
        <Stack direction="column" spacing={2}>
          <Button colorScheme="gray" bg="gray.100" size="md" variant="outline">
            Sua nota: {userScore}
          </Button>
          <Button bg={getCutoffButtonColor()} size="md" color="white">
            Nota de corte: {cutoffScore}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default UniversityCard;
