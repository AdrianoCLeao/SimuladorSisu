import './App.css';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SidePanel from './components/SidePanel';
import GradesForm from './components/GradesForm';
import StepperComponent from './components/Stepper';
import DetailsForm from './components/DetailsForm';
import UniversitiesPage from './UniversitiesPage';

function App() {
  const [activeStep, setActiveStep] = useState(0);

  const renderForm = () => {
    if (activeStep === 0) {
      return <GradesForm onNext={() => setActiveStep(1)} />;
    } else if (activeStep === 1) {
      return <DetailsForm />;
    }
  };

  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Box display="flex" height="100vh">
                <SidePanel />
                <Box
                  flex="1"
                  display="flex"
                  flexDirection="column"
                  p={5}
                  ml="33%"
                >
                  <Box mb={8} mx="10rem">
                    <StepperComponent
                      activeStep={activeStep}
                      setActiveStep={setActiveStep}
                    />
                  </Box>
                  <Box
                    flex="1"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, y: -100 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 100 }}
                      transition={{ duration: 0.5 }}
                      style={{ width: '100%' }}
                    >
                      {renderForm()}
                    </motion.div>
                  </Box>
                </Box>
              </Box>
            }
          />
          <Route path="/universities" element={<UniversitiesPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
