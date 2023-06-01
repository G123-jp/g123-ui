import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

// import {
//   EarthIcon,
//   NotificationIcon,
//   HomeIcon,
//   GameIcon,
//   UserCircleIcon,
//   ChatBubbleIcon,
// } from '.';
import icons from '.';

const {
  EarthIcon,
  NotificationIcon,
  HomeIcon,
  GameIcon,
  UserCircleIcon,
  ChatBubbleIcon,
} = icons;

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
    <EarthIcon {...args} />
    <NotificationIcon {...args} />
    <HomeIcon {...args} />
    <GameIcon {...args} />
    <UserCircleIcon {...args} />
    <ChatBubbleIcon {...args} />
  </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
