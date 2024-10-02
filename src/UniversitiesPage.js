import React from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar'
import UniversityCard from './components/UniversityCard';
import Filters from './components/Filter';

const UniversitiesPage = () => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
    >
        <Box>
            <Navbar />
            <Filters />
            <Box p={5}>
                <UniversityCard />
                <UniversityCard />
                <UniversityCard />
            </Box>
        </Box>
    </motion.div>
);
};

export default UniversitiesPage;
