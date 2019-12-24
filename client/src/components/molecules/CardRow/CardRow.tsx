import React, { FC } from 'react';
import styled from 'styled-components';
import Card, { CardProps } from '@/molecules/Card/Card';

export interface CardRowProps {
  cardRow: CardProps[];
}

const CardRow: FC<CardRowProps> = (props: CardRowProps) => {
  return (
    <Container>
      {props.cardRow.map((card, i) => (
        <Card
          subjectName={card.subjectName}
          blockName={card.blockName}
          key={i}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;

export default CardRow;
