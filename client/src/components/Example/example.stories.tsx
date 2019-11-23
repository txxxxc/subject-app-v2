import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Example from './example';

const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);
stories.addParameters({ info: { inline: true } });
stories.add('Example', () => (
  <Example
    text={text('テキスト', 'ああああ')}
    flag={boolean('テキスト表示', true)}
    action={action('ぽちっとな')}
  />
));
