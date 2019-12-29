import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import theme from '../../../utils/theme';
import CardRow, { CardRowProps } from './CardRow';

const stories = storiesOf('CardRow', module);
stories.addDecorator(muiTheme([theme]));
stories.addParameters({ info: { inline: true } });

const cardRowElements: CardRowProps = {
  cardRow: [
    { blockName: 'I_A', subjectName: '数学' },
    { blockName: 'II_A', subjectName: '国語' },
    { blockName: 'II_A', subjectName: '国語' },
    { blockName: 'II_A', subjectName: '国語' },
    { blockName: 'II_A', subjectName: '国語' },
  ],
};

stories.add('CardRow', () => <CardRow cardRow={cardRowElements.cardRow} />);
