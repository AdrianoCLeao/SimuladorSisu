import React, { useState } from 'react';
import { Box, Icon, Text, Stack, Flex, Button } from '@chakra-ui/react';
import { FaPaintBrush, FaBook, FaFilter } from 'react-icons/fa';
import { FaComputer, FaDna } from 'react-icons/fa6';
import { BiMath } from "react-icons/bi";
import { RiHealthBookFill } from "react-icons/ri";
import { PiEngineFill } from "react-icons/pi";
import { GiGreekTemple } from "react-icons/gi";
import AdvancedFiltersPopup from './AdvancedFiltersPopup';  // Importando o novo popup de filtros avançados

const FilterItem = ({ icon, label, isActive, onClick }) => (
  <Stack align="center" spacing={1} onClick={onClick} cursor="pointer">
    <Icon as={icon} boxSize={6} color={isActive ? 'blue.500' : 'gray.500'} />
    <Text fontSize="sm" color={isActive ? 'blue.500' : 'gray.500'}>
      {label}
    </Text>
    {isActive && <Box h="2px" w="20px" bg="blue.500" />}
  </Stack>
);

const Filters = () => {
  const [activeFilter, setActiveFilter] = useState(null); // Estado para armazenar o filtro ativo

  const handleFilterClick = (label) => {
    setActiveFilter(label); // Atualiza o filtro ativo com o label clicado
  };

  return (
    <Flex justify="center" align="center" py={4} px={6} wrap="nowrap" overflowX="auto" bg="white" borderBottom="1px solid" borderColor="gray.200" gap={10}>
      <FilterItem
        icon={BiMath}
        label="Exatas"
        isActive={activeFilter === "Exatas"}
        onClick={() => handleFilterClick("Exatas")}
      />
      <FilterItem
        icon={RiHealthBookFill}
        label="Saúde"
        isActive={activeFilter === "Saúde"}
        onClick={() => handleFilterClick("Saúde")}
      />
      <FilterItem
        icon={FaPaintBrush}
        label="Artes"
        isActive={activeFilter === "Artes"}
        onClick={() => handleFilterClick("Artes")}
      />
      <FilterItem
        icon={PiEngineFill}
        label="Engenharias"
        isActive={activeFilter === "Engenharias"}
        onClick={() => handleFilterClick("Engenharias")}
      />
      <FilterItem
        icon={FaDna}
        label="Biológicas"
        isActive={activeFilter === "Biológicas"}
        onClick={() => handleFilterClick("Biológicas")}
      />
      <FilterItem
        icon={GiGreekTemple}
        label="Humanas"
        isActive={activeFilter === "Humanas"}
        onClick={() => handleFilterClick("Humanas")}
      />
      <FilterItem
        icon={FaComputer}
        label="Tecnologia"
        isActive={activeFilter === "Tecnologia"}
        onClick={() => handleFilterClick("Tecnologia")}
      />
      <FilterItem
        icon={FaBook}
        label="Linguagens"
        isActive={activeFilter === "Linguagens"}
        onClick={() => handleFilterClick("Linguagens")}
      />

      <AdvancedFiltersPopup /> 
    </Flex>
  );
};

export default Filters;
