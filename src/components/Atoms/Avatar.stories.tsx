import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import Avatar from './Avatar';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  argTypes: {
    type: {
      options: Object.values(['default', 'colorful', 'cs']),
      control: 'select',
      defaultValue: 'default',
    },
    size: {
      options: Object.values(['default', 'small']),
      control: 'select',
      defaultValue: 'default',
    },
  },
} as Meta<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = { type: 'default', size: 'default' };
