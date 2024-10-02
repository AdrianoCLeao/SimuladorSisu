import React from 'react';
import { Box, Select, Heading, Stack, Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const DetailsForm = () => {
    const navigate = useNavigate();

    const handleSimularAgora = () => {
        navigate('/universities');
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}   
            transition={{ duration: 0.5 }} 
        >
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={5}
            >
                <Heading as="h2" size="lg" whiteSpace="normal" textAlign="center" mb={6}>
                    Agora conta pra gente o seu curso dos sonhos
                </Heading>
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    width="50%"
                    p={5}
                >
                    <Stack direction="row" spacing={8} mb={4} width="100%" justifyContent="center">
                        <Select placeholder="Onde deseja estudar" width="48%" height={16}>
                            <option value="goias">Goiás</option>
                        </Select>
                        <Select placeholder="Cidade" width="48%" height={16}>
                            <option value="goiania">Goiânia</option>
                        </Select>
                    </Stack>

                    <Stack direction="row" spacing={8} mb={4} width="100%" justifyContent="center">
                        <Select placeholder="Curso" width="48%" height={16}>
                            <option value="artes">Artes Visuais</option>
                        </Select>
                        <Select placeholder="Modalidade" width="48%" height={16}>
                            <option value="ampla">Ampla concorrência</option>
                        </Select>
                    </Stack>
                </Box>
                <Button
                    rightIcon={<ArrowForwardIcon />}
                    colorScheme="teal"
                    size="lg"
                    onClick={handleSimularAgora}
                >
                    Simular agora
                </Button>
            </Box>
        </motion.div>
    );
};

export default DetailsForm;
