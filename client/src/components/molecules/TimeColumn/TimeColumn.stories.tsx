import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import theme from '../../../utils/theme';
import TimeColumn from './TimeColumn';

const stories = storiesOf('TimeColumn', module);
stories.addDecorator(muiTheme([theme]));
stories.addParameters({ info: { inline: true } });

const elements = [
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
];

stories.add('タイムテーブル', () => <TimeColumn elements={elements} />);
