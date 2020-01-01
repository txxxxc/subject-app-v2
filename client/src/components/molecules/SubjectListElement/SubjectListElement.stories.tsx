import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import theme from '../../../utils/theme';
import SubjectListElement from './SubjectListElement';

const stories = storiesOf('SubjectListElement', module);
stories.addDecorator(muiTheme([theme]));
stories.addParameters({ info: { inline: true } });
stories.addDecorator(withKnobs);

stories.add('SubjectListElement', () => (
  <SubjectListElement
    subjectName={text('科目', '国語総合１')}
    block={text('ブロック', 'I_A')}
    isCompulsory={boolean('isCompulsory', false)}
  />
));
