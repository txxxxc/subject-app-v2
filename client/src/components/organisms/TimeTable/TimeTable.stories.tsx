import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import theme from '../../../utils/theme';
import TimeTable, { TimeTableProps } from './TimeTable';

const stories = storiesOf('TimeTable', module);
stories.addDecorator(muiTheme([theme]));
stories.addParameters({ info: { inline: true } });

const props: TimeTableProps = {
  timeColumnElements: {
    elements: [
      {
        additionalPeriod: '08:40',
        period: '09:35',
      },
      {
        period: '10:30',
      },
      {
        period: '11:25',
      },
      {
        period: '12:20',
      },
    ],
  },
  cards: [
    {
      cardRow: [
        { blockName: 'I_A', subjectName: '数学' },
        { blockName: 'II_A', subjectName: '国語' },
        { blockName: 'II_A', subjectName: '国語' },
        { blockName: 'II_A', subjectName: '国語' },
        { blockName: 'II_A', subjectName: '国語' },
      ],
    },
    {
      cardRow: [
        { blockName: 'I_A', subjectName: '数学' },
        { blockName: 'II_A', subjectName: '国語' },
        { blockName: 'II_A', subjectName: '国語' },
        { blockName: 'II_A', subjectName: '国語' },
        { blockName: 'II_A', subjectName: '国語' },
      ],
    },
    {
      cardRow: [
        { blockName: 'I_A', subjectName: '数学' },
        { blockName: 'II_A', subjectName: '国語' },
        { blockName: 'II_A', subjectName: '国語' },
        { blockName: 'II_A', subjectName: '国語' },
        { blockName: 'II_A', subjectName: '国語' },
      ],
    },
    {
      cardRow: [
        { blockName: 'I_A', subjectName: '数学' },
        { blockName: 'II_A', subjectName: '国語' },
        { blockName: 'II_A', subjectName: '国語' },
        { blockName: 'II_A', subjectName: '国語' },
        { blockName: 'II_A', subjectName: '国語' },
      ],
    },
  ],
};

stories.add('タイムテーブル', () => (
  <TimeTable
    timeColumnElements={props.timeColumnElements}
    cards={props.cards}
  />
));
