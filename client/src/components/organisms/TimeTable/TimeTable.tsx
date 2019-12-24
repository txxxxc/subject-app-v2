import React, { FC } from 'react';
import styled from 'styled-components';
import TimeColumn, { TimeColumnProps } from '@/molecules/TimeColumn/TimeColumn';
import WeekRow from '@/molecules/WeekRow/WeekRow';
import CardRow, { CardRowProps } from '@/molecules/CardRow/CardRow';

export interface TimeTableProps {
  timeColumnElements: TimeColumnProps;
  cards: CardRowProps[];
}

const TimeTable: FC<TimeTableProps> = (props: TimeTableProps) => {
  return (
    <Container>
      <Header>
        <WeekRow />
      </Header>
      <Contents>
        <TimeColumn elements={props.timeColumnElements.elements} />
        <CardContainer>
          {props.cards.map((cardRowElements, i) => (
            <CardRow cardRow={cardRowElements.cardRow} key={i} />
          ))}
        </CardContainer>
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  width: 1100px;
  height: 1000px;
`;

const Header = styled.div`
  width: 100%;
  height: 40px;
  padding-left: 55px;
`;

const Contents = styled.div`
  display: flex;
  width: 100%;
  height: 950px;
`;

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default TimeTable;
