import React, { useState } from 'react';
import {
  Box, Button, Flex, Text, IconButton, Divider, Select, Checkbox,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton,
  ModalBody, ModalFooter, useDisclosure
} from '@chakra-ui/react';
import { FaPlus, FaMinus, FaFilter } from 'react-icons/fa';


const AdvancedFiltersPopup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [noteRange, setNoteRange] = useState(0);
  const [showBelowUserScore, setShowBelowUserScore] = useState(false);
  const [universityCount] = useState(57); // Simulação da quantidade de universidades disponíveis com filtros

  const increase = (setter) => setter(prev => prev + 1);
  const decrease = (setter, value) => {
    if (value > 0) setter(prev => prev - 1);
  };

  return (
    <>
      <Button onClick={onOpen}><FaFilter /></Button>

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Filtros Avançados</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Text fontWeight="bold">Nota de Corte</Text>
              <Flex justifyContent="space-between" alignItems="center" mt={4}>
                <Text>Faixa de Nota de Corte</Text>
                <Flex alignItems="center">
                  <IconButton icon={<FaMinus />} size="sm" onClick={() => decrease(setNoteRange, noteRange)} />
                  <Text mx={3}>{noteRange === 0 ? 'Qualquer' : `Acima de ${noteRange * 100}`}</Text>
                  <IconButton icon={<FaPlus />} size="sm" onClick={() => increase(setNoteRange)} />
                </Flex>
              </Flex>
            </Box>

            <Divider my={4} />

            <Box>
              <Text fontWeight="bold">Modalidade de Concorrência</Text>
              <Select placeholder="Selecione a modalidade" mt={2}>
                <option value="ampla">Ampla Concorrência</option>
                <option value="cotasRaciais">Cotas Raciais</option>
                <option value="cotasEscolaPublica">Cotas Escola Pública</option>
                <option value="cotasPcd">Pessoas com Deficiência</option>
                <option value="cotasIndigenas">Cotas Indígenas</option>
              </Select>
            </Box>

            <Divider my={4} />

            <Box>
              <Text fontWeight="bold">Turno</Text>
              <Flex wrap="wrap" gap={2} mt={2}>
                <Button variant="outline" size="sm">Matutino</Button>
                <Button variant="outline" size="sm">Vespertino</Button>
                <Button variant="outline" size="sm">Noturno</Button>
                <Button variant="outline" size="sm">Integral</Button>
              </Flex>
            </Box>

            <Divider my={4} />

            <Box>
              <Text fontWeight="bold">Localização</Text>
              <Flex wrap="wrap" gap={2} mt={2}>
                <Button variant="outline" size="sm">São Paulo</Button>
                <Button variant="outline" size="sm">Rio de Janeiro</Button>
                <Button variant="outline" size="sm">Minas Gerais</Button>
                <Button variant="outline" size="sm">Distrito Federal</Button>
                <Button variant="outline" size="sm">Paraná</Button>
                <Button variant="outline" size="sm">Pernambuco</Button>
              </Flex>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>Remover filtros</Button>
            <Button colorScheme="blue" ml={3}>Mostrar {universityCount} Universidades</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AdvancedFiltersPopup;
