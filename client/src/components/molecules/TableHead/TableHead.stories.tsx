import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs } from '@storybook/addon-knobs';
import theme from '../../../utils/theme';
import TableHead, { TableHeadProps } from './TableHead';

const head: TableHeadProps = {
  headElements: ['ブロック', '分野', '科目名'],
};

const stories = storiesOf('TableHead', module);
stories.addDecorator(muiTheme([theme]));
stories.addParameters({ info: { inline: true } });
stories.addDecorator(withKnobs);

stories.add('TableHead', () => <TableHead headElements={head.headElements} />);
