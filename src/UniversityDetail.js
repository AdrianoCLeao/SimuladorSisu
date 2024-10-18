import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Box, Heading, Text, Container, SimpleGrid, Image, Flex, VStack,
  Stack, StackDivider, List, ListItem, Button, useColorModeValue
} from '@chakra-ui/react';
import Navbar from './components/Navbar';

const UniversityDetail = () => {
  const { id } = useParams();

  // Simulação de dados
  const universities = [
    { id: 1, name: 'Universidade A', description: 'Descrição da Universidade A', image: 'https://source.unsplash.com/600x400/?university' },
    { id: 2, name: 'Universidade B', description: 'Descrição da Universidade B', image: 'https://source.unsplash.com/600x400/?campus' },
    { id: 3, name: 'Universidade C', description: 'Descrição da Universidade C', image: 'https://source.unsplash.com/600x400/?college' },
  ];

  const university = universities.find((u) => u.id === Number(id));

  // Hooks de cores fora de qualquer condicional
  const headingColor = useColorModeValue('gray.900', 'gray.400');
  const dividerColor = useColorModeValue('gray.200', 'gray.600');
  const featuresColor = useColorModeValue('yellow.500', 'yellow.300');

  if (!university) {
    return <Text>Universidade não encontrada.</Text>;
  }

  return (
    <Box>
      <Navbar />
      <Flex
        justify="center"
        align="center" // Para ocupar toda a altura da tela
        p={5}
        mx={48}
      >
        <Container maxW={'7xl'}>
          <SimpleGrid
            columns={{ base: 1, lg: 1 }}
          >
            <Stack spacing={{ base: 6, md: 10 }}>
              <Box as={'header'}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
                  mt={5}
                >
                  {university.name}
                </Heading>
                <Text
                  color={headingColor}
                  fontWeight={300}
                  fontSize={'2xl'}
                >
                  Descrição detalhada
                </Text>
              </Box>

              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={'column'}
                divider={
                  <StackDivider borderColor={dividerColor} />
                }
              >
                <VStack spacing={{ base: 4, sm: 6 }}>
                  <Text
                    color="gray"
                    fontSize={'2xl'}
                    fontWeight={'300'}
                  >
                    {university.description}
                  </Text>
                  <Text fontSize={'lg'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.
                  </Text>
                </VStack>
                <Box>
                  <Text
                    fontSize={{ base: '16px', lg: '18px' }}
                    color={featuresColor}
                    fontWeight={'500'}
                    textTransform={'uppercase'}
                    mb={'4'}
                  >
                    Informações
                  </Text>

                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <List spacing={2}>
                      <ListItem>Localização: Goiânia, Goiás</ListItem>
                      <ListItem>Curso: Ciência da Computação</ListItem>
                      <ListItem>Duração: 4 anos</ListItem>
                    </List>
                    <List spacing={2}>
                      <ListItem>Turno: Integral</ListItem>
                      <ListItem>Modalidade: Presencial</ListItem>
                      <ListItem>Nota de Corte: 720.54</ListItem>
                    </List>
                  </SimpleGrid>
                </Box>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Flex>
    </Box>
  );
};

export default UniversityDetail;
