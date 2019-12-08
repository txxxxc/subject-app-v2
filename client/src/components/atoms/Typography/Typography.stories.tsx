import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text } from '@storybook/addon-knobs';
import theme from '../../../utils/theme';
import { WhiteTypography, BlackTypography } from './Typography';

const stories = storiesOf('Typography', module);
stories.addDecorator(muiTheme([theme]));
stories.addParameters({ info: { inline: true } });
stories.addDecorator(withKnobs);
stories.add('ヘッダー', () => (
  <WhiteTypography
    text={text('テキスト', 'ヘッダー')}
    fontWeight="fontWeightBold"
    fontSize={34}
  />
));
stories.add('科目名', () => (
  <BlackTypography text={text('テキスト', '科目名')} fontSize={34} />
));
stories.add('時間・曜日', () => (
  <BlackTypography text={text('テキスト', 'Mon')} fontSize={20} />
));
stories.add('科目一覧', () => (
  <BlackTypography
    text={text('テキスト', '科目一覧')}
    fontSize={20}
    fontWeight="fontWeightBold"
  />
));
stories.add('ブロック', () => (
  <BlackTypography
    text={text('テキスト', 'I_A')}
    fontSize={14}
    color={theme.palette.grey[500]}
  />
));
stories.add('必修', () => (
  <BlackTypography
    text={text('テキスト', '必修')}
    fontSize={14}
    color={theme.palette.grey[500]}
  />
));
