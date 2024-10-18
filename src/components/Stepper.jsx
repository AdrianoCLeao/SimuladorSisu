import React from 'react';
import { Box } from '@chakra-ui/react';
import {
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepIcon,
  StepNumber,
  StepTitle,
  StepDescription,
  StepSeparator,
} from '@chakra-ui/react';

const steps = [
  { title: 'Notas', description: 'Preencha suas notas' },
  { title: 'Simulador', description: 'Simule já' },
];

const StepperComponent = ({ activeStep, setActiveStep }) => {
  return (
    <Stepper size="lg" index={activeStep}>
      {steps.map((step, index) => (
        <Step key={index} onClick={() => setActiveStep(index)}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink="0">
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          {index < steps.length - 1 && <StepSeparator />}
        </Step>
      ))}
    </Stepper>
  );
};

export default StepperComponent;