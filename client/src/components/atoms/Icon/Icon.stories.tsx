import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import theme from '../../../utils/theme';
import Icon from './Icon';

const stories = storiesOf('Icon', module);
stories.addDecorator(muiTheme([theme]));
stories.add('Dehaze', () => <Icon IconName="Dehaze" />);
stories.add('Delete', () => <Icon IconName="Search" />);
stories.add('Search', () => <Icon IconName="Delete" />);
