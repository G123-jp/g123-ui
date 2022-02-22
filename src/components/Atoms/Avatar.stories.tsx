import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Avatar from './Avatar';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  argTypes: {
    size: { control: 'text', defaultValue: '48' },
  },
} as ComponentMeta<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
