import React, { FC } from 'react';
import styled from 'styled-components';
import TimeColumnElement, {
  TimeColumnElementProps,
} from '@/molecules/TimeColumnElement/TimeColumnElement';

export interface TimeColumnProps {
  Elements: TimeColumnElementProps[];
}

const TimeColumn: FC<TimeColumnProps> = (props: TimeColumnProps) => {
  const Elements = props.Elements.map((elem, i) => (
    <TimeColumnElement
      additionalPeriod={elem.additionalPeriod}
      period={elem.period}
      time={i.toString()}
      key={i}
    />
  ));

  return <Container>{Elements}</Container>;
};

const Container = styled.div`
  height: 1000px;
  padding: 20px 0;
`;

export default TimeColumn;
