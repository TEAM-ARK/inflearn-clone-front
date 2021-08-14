import React from 'react';
import styled from 'styled-components';

const SpeechBubbleStyle = styled.span`
  right: 30px;
  width: max-content;
  position: absolute;
  padding: 6px 8px;
  background-color: #ebcc53;
  color: var(--color-dark-grey);
  border-radius: 4px;
  margin-right: 10px;
  font-size: 0.8rem;
  &::after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 8px 6px;
    border-color: transparent transparent transparent #ebcc53;
    transform: translateX(65%);
  }
`;

type SpeechBubbleProps = {
  message: string;
};

const SpeechBubble = ({ message }: SpeechBubbleProps) => {
  return <SpeechBubbleStyle>{message}</SpeechBubbleStyle>;
};

export default SpeechBubble;
