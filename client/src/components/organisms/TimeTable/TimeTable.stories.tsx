import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, boolean } from '@storybook/addon-knobs';
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
      {
        additionalPeriod: '12:50',
        period: '13:45',
      },
      {
        period: '14:40',
      },
      {
        period: '15:30',
      },
    ],
  },
  cardRows: [
    {
      elements: [
        {
          blockName: 'hoge',
        },
        {
          blockName: 'hoge',
        },
        {
          blockName: 'hoge',
        },
        {
          blockName: 'hoge',
        },
        {
          blockName: 'hoge',
        },
      ],
    },
    {
      elements: [
        {
          blockName: 'hoge',
        },
        {
          blockName: 'hoge',
        },
        {
          blockName: 'hoge',
        },
        {
          blockName: 'hoge',
        },
        {
          blockName: 'hoge',
        },
      ],
    },
    {
      elements: [
        {
          blockName: 'hoge',
        },
        {
          blockName: 'hoge',
        },
        {
          blockName: 'hoge',
        },
        {
          blockName: 'hoge',
        },
        {
          blockName: 'hoge',
        },
      ],
    },
    {
      elements: [
        {
          blockName: 'hoge',
        },
        {
          blockName: 'hoge',
        },
        {
          blockName: 'hoge',
        },
        {
          blockName: 'hoge',
        },
        {
          blockName: 'hoge',
        },
      ],
    },
    {
      elements: [
        {
          blockName: 'hoge',
        },
        {
          blockName: 'hoge',
        },
        {
          blockName: 'hoge',
        },
        {
          blockName: 'hoge',
        },
        {
          blockName: 'hoge',
        },
      ],
    },
    {
      elements: [
        {
          blockName: 'hoge',
        },
        {
          blockName: 'hoge',
        },
        {
          blockName: 'hoge',
        },
        {
          blockName: 'hoge',
        },
        {
          blockName: 'hoge',
        },
      ],
    },
    {
      elements: [
        {
          blockName: 'hoge',
        },
        {
          blockName: 'hoge',
        },
        {
          blockName: 'hoge',
        },
        {
          blockName: 'hoge',
        },
        {
          blockName: 'hoge',
        },
      ],
    },
  ],
  cardActions: {
    onActionAreaClick: () => {},
    onIconClick: () => {},
  },
  tableBody: {
    subjectRows: [
      {
        block: 'hoge',
        courseName: 'hoge',
        teacherName: 'hoge',
        isCompulsory: false,
      },
      {
        block: 'hoge',
        courseName: 'hoge',
        teacherName: 'hoge',
        isCompulsory: true,
      },
      {
        block: 'hoge',
        courseName: 'hoge',
        teacherName: 'hoge',
        isCompulsory: false,
      },
      {
        block: 'hoge',
        courseName: 'hoge',
        teacherName: 'hoge',
        isCompulsory: true,
      },
    ],
  },
  open: false,
};

stories.addDecorator(withKnobs);
stories.add('タイムテーブル', () => (
  <TimeTable
    timeColumnElements={props.timeColumnElements}
    cardRows={props.cardRows}
    cardActions={props.cardActions}
    tableBody={props.tableBody}
    open={boolean('Disabled', false)}
  />
));
