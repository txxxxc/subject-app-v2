import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import Example from './example';

storiesOf('Components', module)
  .addDecorator(withInfo({ inline: true }))
  .addDecorator(withKnobs)
  .add('Example', () => (
    <Example
      text={text('テキスト', 'ああああ')}
      flag={boolean('テキスト表示', true)}
      action={action('ぽちっとな')}
    />
  ));
