import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import theme from '../../../utils/theme';
import Icon from './Icon';

const stories = storiesOf('Icon', module);
stories.addDecorator(muiTheme([theme]));
stories.add('Dehaze', () => <Icon iconName="Dehaze" />);
stories.add('Delete', () => <Icon iconName="Search" />);
stories.add('Search', () => <Icon iconName="Delete" />);
