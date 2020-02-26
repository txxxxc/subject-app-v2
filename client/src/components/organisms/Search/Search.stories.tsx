// import React from 'react';
// import { storiesOf } from '@storybook/react';
// import { muiTheme } from 'storybook-addon-material-ui';
// import { withKnobs } from '@storybook/addon-knobs';
// import theme from '../../../utils/theme';
// import Search, { SearchProps } from './Search';

// const stories = storiesOf('Search', module);
// stories.addDecorator(muiTheme([theme]));
// stories.addParameters({ info: { inline: true } });
// stories.addDecorator(withKnobs);

// const searchProps: SearchProps = {
//   selectItems: [
//     {
//       inputLabel: '科目',
//       menuItem: ['', '国語', '数学', '英語'],
//       currentItem: '',
//       category: 'subject',
//       onChange: () => {},
//     },
//     {
//       inputLabel: 'ブロック',
//       menuItem: ['', 'I_A', 'II_A', 'III_A'],
//       currentItem: '',
//       category: 'block',
//       onChange: () => {},
//     },
//     {
//       inputLabel: '担当教員',
//       menuItem: ['', 'Aさん', 'Bさん', 'Cさん'],
//       currentItem: '',
//       category: 'teacher',
//       onChange: () => {},
//     },
//   ],
//   switch: {
//     checked: false,
//     onChange: () => {},
//   },
//   iconOnClose: () => {},
// };

// stories.add('Search', () => (
//   <Search
//     selectItems={searchProps.selectItems}
//     switch={searchProps.switch}
//     iconOnClose={searchProps.iconOnClose}
//   />
// ));
