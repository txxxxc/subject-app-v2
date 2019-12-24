import React, { FC } from 'react';
import styled from 'styled-components';
import TimeColumnElement, {
  TimeColumnElementProps,
} from '@/molecules/TimeColumnElement/TimeColumnElement';

export interface TimeColumnProps {
  elements: TimeColumnElementProps[];
}

const TimeColumn: FC<TimeColumnProps> = (props: TimeColumnProps) => {
  const elements = props.elements.map((elem, i) => (
    <TimeColumnElement
      additionalPeriod={elem.additionalPeriod}
      period={elem.period}
      time={i.toString()}
      key={i}
    />
  ));

  return <Container>{elements}</Container>;
};

const Container = styled.div`
  height: 1000px;
  padding: 20px 0;
`;

export default TimeColumn;
