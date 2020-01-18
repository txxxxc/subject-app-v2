/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs } from '@storybook/addon-knobs';
import theme from '../../../utils/theme';
import Search, { SearchProps } from './Search';

const stories = storiesOf('Search', module);
stories.addDecorator(muiTheme([theme]));
stories.addParameters({ info: { inline: true } });
stories.addDecorator(withKnobs);

const searchProps: SearchProps = {
  selectItems: [
    {
      inputLabel: '科目',
      menuItem: ['', '国語', '数学', '英語'],
      currentItem: '',
      category: 'subject',
      onChange: () => console.log('clicked'),
    },
    {
      inputLabel: 'ブロック',
      menuItem: ['', 'I_A', 'II_A', 'III_A'],
      currentItem: '',
      category: 'block',
      onChange: () => console.log('clicked'),
    },
    {
      inputLabel: '担当教員',
      menuItem: ['', 'Aさん', 'Bさん', 'Cさん'],
      currentItem: '',
      category: 'teacher',
      onChange: () => console.log('clicked'),
    },
  ],
  switch: {
    checked: false,
    onChange: () => console.log('clicked'),
  },
  iconOnClose: () => console.log('clicked'),
};

stories.add('Search', () => (
  <Search
    selectItems={searchProps.selectItems}
    switch={searchProps.switch}
    iconOnClose={searchProps.iconOnClose}
  />
));
