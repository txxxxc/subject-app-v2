import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs } from '@storybook/addon-knobs';
import theme from '../../../utils/theme';
import SubjectList, { SubjectListProps } from './SubjectList';

const SubjectItems: SubjectListProps = {
  subjectListElements: [
    {
      subjectName: '国語総合',
      block: 'I_A',
      isCompulsory: true,
    },
    {
      subjectName: '国語総合',
      block: 'I_A',
      isCompulsory: true,
    },
    {
      subjectName: '国語総合',
      block: 'I_A',
      isCompulsory: true,
    },
    {
      subjectName: '国語総合',
      block: 'I_A',
      isCompulsory: true,
    },
    {
      subjectName: '国語総合',
      block: 'I_A',
      isCompulsory: true,
    },
    {
      subjectName: '国語総合',
      block: 'I_A',
      isCompulsory: true,
    },
    {
      subjectName: '国語総合',
      block: 'I_A',
      isCompulsory: true,
    },
    {
      subjectName: '国語総合',
      block: 'I_A',
      isCompulsory: true,
    },
    {
      subjectName: '国語総合',
      block: 'I_A',
      isCompulsory: true,
    },
  ],
};

const stories = storiesOf('SubjectList', module);
stories.addDecorator(muiTheme([theme]));
stories.addParameters({ info: { inline: true } });
stories.addDecorator(withKnobs);

stories.add('SubjectList', () => (
  <SubjectList subjectListElements={SubjectItems.subjectListElements} />
));
