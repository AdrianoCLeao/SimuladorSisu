import React, { useState } from 'react';
import { Box, Input, Heading, Text, Stack, Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const GradesForm = () => {
    const [formValues, setFormValues] = useState({
        matematica: '',
        cienciasNatureza: '',
        cienciasHumanas: '',
        linguagens: '',
        redacao: ''
    });

    const [errors, setErrors] = useState({
        matematica: false,
        cienciasNatureza: false,
        cienciasHumanas: false,
        linguagens: false,
        redacao: false
    });

    const navigate = useNavigate();

    const handleChange = (field) => (e) => {
        setFormValues({
            ...formValues,
            [field]: e.target.value
        });

        setErrors({
            ...errors,
            [field]: false
        });
    };

    const handleSubmit = () => {
        const newErrors = {
            matematica: !formValues.matematica,
            cienciasNatureza: !formValues.cienciasNatureza,
            cienciasHumanas: !formValues.cienciasHumanas,
            linguagens: !formValues.linguagens,
            redacao: !formValues.redacao
        };

        setErrors(newErrors);

        const hasErrors = Object.values(newErrors).some(error => error);

        if (!hasErrors) {
            localStorage.setItem('notasEnem', JSON.stringify(formValues));
            navigate('/universities');
        }
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={5}>
            <Heading as="h2" size="lg" textAlign="center" mb={4}>
                Informe quais foram suas notas no Enem 2024
            </Heading>

            <Stack direction="column" spacing={4} align="center" mb={4}>
                <Stack direction="row" spacing={4} align="center" mb={4}>
                    <Box textAlign="center">
                        {errors.matematica && <Text color="red.500" fontSize="xs">Campo obrigatório</Text>}
                        <Input
                            value={formValues.matematica}
                            onChange={handleChange('matematica')}
                            borderColor={errors.matematica ? 'red.500' : 'gray.300'}
                            isInvalid={errors.matematica}
                            placeholder='000,0'
                            textAlign="center"
                        />
                        <Text fontSize="sm" mt={2}>Matemática</Text>
                    </Box>

                    <Box textAlign="center">
                        {errors.cienciasNatureza && <Text color="red.500" fontSize="xs">Campo obrigatório</Text>}
                        <Input
                            value={formValues.cienciasNatureza}
                            onChange={handleChange('cienciasNatureza')}
                            borderColor={errors.cienciasNatureza ? 'red.500' : 'gray.300'}
                            isInvalid={errors.cienciasNatureza}
                            placeholder='000,0'
                            textAlign="center"
                        />
                        <Text fontSize="sm" mt={2}>Ciências da Natureza</Text>
                    </Box>
                </Stack>

                <Stack direction="row" spacing={4} align="center" mb={4}>
                    <Box textAlign="center">
                        {errors.cienciasHumanas && <Text color="red.500" fontSize="xs">Campo obrigatório</Text>}
                        <Input
                            value={formValues.cienciasHumanas}
                            onChange={handleChange('cienciasHumanas')}
                            borderColor={errors.cienciasHumanas ? 'red.500' : 'gray.300'}
                            isInvalid={errors.cienciasHumanas}
                            placeholder='000,0'
                            textAlign="center"
                        />
                        <Text fontSize="sm" mt={2}>Ciências Humanas</Text>
                    </Box>

                    <Box textAlign="center">
                        {errors.linguagens && <Text color="red.500" fontSize="xs">Campo obrigatório</Text>}
                        <Input
                            value={formValues.linguagens}
                            onChange={handleChange('linguagens')}
                            borderColor={errors.linguagens ? 'red.500' : 'gray.300'}
                            isInvalid={errors.linguagens}
                            placeholder='000,0'
                            textAlign="center"
                        />
                        <Text fontSize="sm" mt={2}>Linguagens e Códigos</Text>
                    </Box>

                    <Box textAlign="center">
                        {errors.redacao && <Text color="red.500" fontSize="xs">Campo obrigatório</Text>}
                        <Input
                            value={formValues.redacao}
                            onChange={handleChange('redacao')}
                            borderColor={errors.redacao ? 'red.500' : 'gray.300'}
                            isInvalid={errors.redacao}
                            placeholder='000,0'
                            textAlign="center"
                        />
                        <Text fontSize="sm" mt={2}>Redação</Text>
                    </Box>
                </Stack>
            </Stack>

            <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' onClick={handleSubmit}>
                Próxima Etapa
            </Button>
        </Box>
    );
};

export default GradesForm;
