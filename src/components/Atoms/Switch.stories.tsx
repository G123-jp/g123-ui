import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Switch from './Switch';

export default {
  title: 'Atoms/Switch',
  component: Switch,
  argTypes: {
    checked: { control: 'boolean', defaultValue: false },
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Switch>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
