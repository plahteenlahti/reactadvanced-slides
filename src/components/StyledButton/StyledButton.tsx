import React from 'react';
import { styled } from '../../utils/styled';
import { ButtonOpacity, Paragraph } from '../../utils/tags';

export const StyledButton = () => {
  return (
    <Button>
      <ButtonText>Press me</ButtonText>
    </Button>
  );
};

const Button = styled(ButtonOpacity)`
  background-color: #4a5aef;
  border-radius: 3px;
  border: none;
  padding: 16px 32px;
`;

const ButtonText = styled(Paragraph)`
  font-family: 'Arial';
  color: white;
  margin: 0 auto;
`;
