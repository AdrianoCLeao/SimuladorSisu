import React, { useState, useEffect } from 'react';
import { Box, Heading, Button, IconButton, Input } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Navbar from './components/Navbar';
import UniversityCard from './components/UniversityCard';
import AdvancedFiltersPopup from './components/AdvancedFiltersPopup';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const UniversitiesPage = () => {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [notasEnem, setNotasEnem] = useState(null);
  const limit = 8;

  useEffect(() => {
    const notas = JSON.parse(localStorage.getItem('notasEnem'));
    setNotasEnem(notas);

    const fetchUniversities = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`http://localhost:4000/simulador?limit=${limit}&offset=${offset}&filter=${searchTerm}`);
        const universitiesData = response.data.data.map((university, index) => ({
          ...university,
          mediaPonderada: notas ? calcularMediaPonderada(university, notas) : null,
        }));
        setUniversities(universitiesData);
        setTotal(response.data.total);
      } catch (err) {
        setError('Erro ao buscar universidades. Por favor, tente novamente.');
      } finally {
        setLoading(false);
      }
    };

    fetchUniversities();
  }, [offset, searchTerm]);

  const calcularMediaPonderada = (university, notas) => {
    const { matematica, cienciasNatureza, cienciasHumanas, linguagens, redacao } = notas;

    const pesoM = university.PESO_M;
    const pesoCN = university.PESO_CN;
    const pesoCH = university.PESO_CH;
    const pesoL = university.PESO_L;
    const pesoR = university.PESO_R;

    const somaPesos = pesoM + pesoCN + pesoCH + pesoL + pesoR;
    const media = (
      (matematica * pesoM) +
      (cienciasNatureza * pesoCN) +
      (cienciasHumanas * pesoCH) +
      (linguagens * pesoL) +
      (redacao * pesoR)
    ) / somaPesos;

    return media.toFixed(2);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setOffset(limit * (pageNumber - 1));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setOffset(0);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(total / limit);

  const renderPageButtons = () => {
    const pages = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (currentPage <= 3) {
      endPage = Math.min(totalPages, maxPagesToShow);
    } else if (currentPage > totalPages - 3) {
      startPage = Math.max(1, totalPages - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <Button
          key={i}
          onClick={() => handlePageChange(i)}
          colorScheme={currentPage === i ? 'blue' : 'gray'}
        >
          {i}
        </Button>
      );
    }

    if (startPage > 1) {
      pages.unshift(<span key="start-ellipsis">...</span>);
    }
    if (endPage < totalPages) {
      pages.push(<span key="end-ellipsis">...</span>);
    }

    return pages;
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <Box>
        <Navbar />
        <Heading mt={4} display="flex" justifyContent="center" alignItems="center">
          Veja aqui as universidades
        </Heading>
        <Box p={5} display="flex" justifyContent="center" alignItems="center" mt={4} gap={2}>
          <Input
            placeholder="Pesquisar universidade ou curso..."
            value={searchTerm}
            onChange={handleSearchChange}
            width="50%"
          />
          <AdvancedFiltersPopup />
        </Box>
        <Box p={5} mx={28}>
          {loading ? (
            <Box textAlign="center" mt={4}>Carregando...</Box>
          ) : error ? (
            <Box textAlign="center" mt={4} color="red.500">{error}</Box>
          ) : universities.length > 0 ? (
            universities.map((university, index) => (
              <UniversityCard
                key={university.id}
                university={{
                  id: university.id,
                  courseName: university.NOME_CURSO,
                  universityName: university.NOME_IES,
                  campus: university.NOME_CAMPUS,
                  location: `${university.MUNICIPIO_CAMPUS} - ${university.UF_CAMPUS}`,
                  shift: university.TURNO,
                  cutoffScore: university.NOTA_CORTE,
                  userScore: university.mediaPonderada,
                }}
                index={offset + index + 1} // Calcula o número incremental
              />
            ))
          ) : (
            <Box textAlign="center" mt={4}>Nenhuma universidade encontrada</Box>
          )}
        </Box>
        <Box p={5} display="flex" justifyContent="center" alignItems="center" gap={2}>
          <IconButton
            icon={<ChevronLeftIcon />}
            isDisabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            aria-label="Página anterior"
          />
          {renderPageButtons()}
          <IconButton
            icon={<ChevronRightIcon />}
            isDisabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            aria-label="Próxima página"
          />
        </Box>
      </Box>
    </motion.div>
  );
};

export default UniversitiesPage;
