import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import theme from '../../../utils/theme';
import Switch from './Switch';

const stories = storiesOf('Switch', module);
stories.addDecorator(muiTheme([theme]));
stories.addParameters({ info: { inline: true } });
stories.addDecorator(withKnobs);

stories.add('Switch', () => <Switch checked={boolean('checked', false)} />);
