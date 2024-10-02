import React from 'react';
import { Box, Input, Heading, Text, Stack, Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const GradesForm = ({ onNext }) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            mt={10}
            p={5}
        >
            <Heading as="h2" size="lg" whiteSpace="normal" wordBreak="break-word" align="center" mb={4}>
                Conta pra gente quais foram <br /> suas notas no Enem 2023
            </Heading>

            <Stack direction="column" spacing={4} align="center" mb={4}>
                <Stack direction="row" spacing={4} align="center" mb={4}>
                    <Box textAlign="center">
                        <Input htmlSize={4} width="auto" height={16}/>
                        <Text fontSize="sm" whiteSpace="normal" wordBreak="break-word" mt={2}>Matemática</Text>
                    </Box>

                    <Box textAlign="center">
                        <Input htmlSize={4} width="auto" height={16}/>
                        <Text fontSize="sm" mt={2} whiteSpace="normal" wordBreak="break-word">
                            Ciências da Natureza
                        </Text>
                    </Box>

                    <Box textAlign="center">
                        <Input htmlSize={4} width="auto" height={16}/>
                        <Text fontSize="sm" mt={2}>Ciências da Natureza</Text>
                    </Box>
                </Stack>
                <Stack direction="row" spacing={4} align="center" mb={4}>
                    <Box textAlign="center">
                        <Input htmlSize={4} width="auto" height={16}/>
                        <Text fontSize="sm" mt={2}>Linguagens e Códigos</Text>
                    </Box>
                    <Box textAlign="center">
                        <Input htmlSize={4} width="auto" height={16}/>
                        <Text fontSize="sm" mt={2}>Redação</Text>
                    </Box>
                </Stack>
            </Stack>
            <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='solid' onClick={onNext}>
                Próxima Etapa
            </Button>
        </Box>
    );
};

export default GradesForm;
