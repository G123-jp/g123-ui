import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import Icon from '.';

export default {
  title: 'Atoms/Icons',
  argTypes: {
    className: {
      control: 'text',
      defaultValue: 'stroke-primary',
    },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn = (args) => (
  <div className="flex gap-4 text-neutral-800">
    <Icon.EarthIcon {...args} />
    <Icon.NotificationIcon {...args} />
    <Icon.HomeIcon {...args} />
    <Icon.GameIcon {...args} />
    <Icon.UserCircleIcon {...args} />
    <Icon.ChatBubbleIcon {...args} />
  </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  className: 'stroke-primary fill-highlight',
};
