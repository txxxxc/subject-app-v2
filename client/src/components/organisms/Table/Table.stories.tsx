// import React from 'react';
// import { storiesOf } from '@storybook/react';
// import { muiTheme } from 'storybook-addon-material-ui';
// import { withKnobs } from '@storybook/addon-knobs';
// import theme from '../../../utils/theme';
// import Table, { TableProps } from './Table';

// const row: TableProps = {
//   head: {
//     headElements: ['ブロック', '科目名', '教師名', '必修'],
//   },
//   body: {
//     subjectRows: [
//       {
//         block: 'I_A',
//         courseName: '数学A',
//         teacherName: '田中太郎',
//         isCompulsory: true,
//       },
//       {
//         block: 'I_A',
//         courseName: '数学A',
//         teacherName: '田中太郎',
//         isCompulsory: true,
//       },
//       {
//         block: 'I_A',
//         courseName: '数学A',
//         teacherName: '田中太郎',
//         isCompulsory: true,
//       },
//     ],
//   },
// };

// const stories = storiesOf('Table', module);
// stories.addDecorator(muiTheme([theme]));
// stories.addParameters({ info: { inline: true } });
// stories.addDecorator(withKnobs);

// stories.add('Table', () => <Table head={row.head} body={row.body} />);
