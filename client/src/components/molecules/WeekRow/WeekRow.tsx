import React from 'react';
import styled from 'styled-components';
import Typography from '@/atoms/Typography/Typography';

const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const WeekRow = () => {
  return (
    <Container>
      {week.map((elem, i) => (
        <DayOfTheWeek key={i}>
          <Typography text={elem} fontSize={20} />
        </DayOfTheWeek>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 35px;
  width: 1000px;
  border: solid 1px black;
`;
const DayOfTheWeek = styled.div`
  text-align: center;
  flex-grow: 1;
`;

export default WeekRow;
