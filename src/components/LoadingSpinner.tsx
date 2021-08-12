import React from 'react';
import styled from 'styled-components';

const Spinner = styled.div`
  border: 1px solid white;
  border-top: 1px solid var(--color-light-blue);
  border-radius: 50%;
  animation: spin 2s linear infinite;
  margin: auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

type SpinnerProps = {
  width?: string;
  height?: string;
};

const LoadingSpinner = ({ width = '30px', height = '30px' }: SpinnerProps) => {
  return <Spinner style={{ width, height }} />;
};

export default LoadingSpinner;
