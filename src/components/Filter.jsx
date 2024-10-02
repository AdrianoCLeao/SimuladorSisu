import React from 'react';
import { Box, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FaUmbrellaBeach, FaMountain, FaHome, FaWater, FaTree, FaSwimmer, FaCity, FaCampground, FaFilter } from 'react-icons/fa';

const FilterItem = ({ icon, label, isActive }) => (
  <Stack align="center" spacing={1}>
    <Icon as={icon} boxSize={6} color={isActive ? 'blue.500' : 'gray.500'} />
    <Text fontSize="sm" color={isActive ? 'blue.500' : 'gray.500'}>
      {label}
    </Text>
    {isActive && <Box h="2px" w="20px" bg="blue.500" />}
  </Stack>
);

const Filters = () => {
  return (
    <Flex justify="center" align="center" py={4} px={6} wrap="nowrap" overflowX="auto" bg="white" borderBottom="1px solid" borderColor="gray.200" gap={10}>
      <FilterItem icon={FaUmbrellaBeach} label="Icônicos" isActive />
      <FilterItem icon={FaHome} label="Chalés" />
      <FilterItem icon={FaWater} label="Vistas incríveis" />
      <FilterItem icon={FaMountain} label="Ilhas" />
      <FilterItem icon={FaTree} label="Parques nacionais" />
      <FilterItem icon={FaSwimmer} label="Piscinas incríveis" />
      <FilterItem icon={FaCity} label="No interior" />
      <FilterItem icon={FaCampground} label="Casas na árvore" />
      <FilterItem icon={FaFilter} label="Filtros avançados" />
    </Flex>
  );
};

export default Filters;
