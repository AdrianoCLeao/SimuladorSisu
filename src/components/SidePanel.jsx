import React from 'react';
import { Box, Image, Heading } from '@chakra-ui/react';

const SidePanel = () => {
  return (
    <Box
      bg="#0496ff"  
      width="33%"   
      height="100vh" 
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      position="fixed"  
      top="0"      
      left="0"
    >
      <Image 
        src='A-Plataform-Logo-preta-e1725138557660.png' 
        alt='A+ Platform Logo' 
        width="20rem" 
      />
      <Heading as="h1" size="lg" color="white" mt={4}>
        Simulador SiSU A+ Platform
      </Heading>
      <Image 
        src='desenho.png' 
        alt='A+ Platform Logo' 
        width="200rem" 
      />
    </Box>
  );
};

export default SidePanel;