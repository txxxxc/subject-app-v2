import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs } from '@storybook/addon-knobs';
import theme from '../../../utils/theme';
import TableBody, { TableBodyProps } from './TableBody';

const row: TableBodyProps = {
  subjectRows: [
    {
      block: 'I_A',
      courseName: '数学A',
      teacherName: '田中太郎',
      isCompulsory: true,
    },
  ],
};

const stories = storiesOf('TableBody', module);
stories.addDecorator(muiTheme([theme]));
stories.addParameters({ info: { inline: true } });
stories.addDecorator(withKnobs);

stories.add('TableBody', () => <TableBody subjectRows={row.subjectRows} />);
