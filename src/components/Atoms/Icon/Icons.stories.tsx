import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import {
  NotificationOutlined,
  HomeOutlined,
  GameOutlined,
  ChatOutlined,
  EarthOutlined,
  ProfileOutlined,
  NotificationFilled,
  HomeFilled,
  GameFilled,
  ChatFilled,
  EarthFilled,
  ProfileFilled,
  NotificationTwoTone,
  HomeTwoTone,
  GameTwoTone,
  ChatTwoTone,
  EarthTwoTone,
  ProfileTwoTone,
  DownloadOutlined,
  ChevronUpOutlined,
  ChevronDownOutlined,
  ChevronLeftOutlined,
  ChevronRightOutlined,
  CloseOutlined,
} from '.';

export default {
  title: 'Atoms/Icons',
  argTypes: {
    className: {
      control: 'text',
      defaultValue: 'text-primary',
    },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn = (args) => (
  <div className="flex flex-col gap-4 text-neutral-800">
    <h2>Outlined</h2>
    <div className="flex gap-4 text-neutral-800">
      <ChatOutlined {...args} />
      <DownloadOutlined className="text-blue-500" />
      <EarthOutlined className="text-highlight" style={{ color: 'orange' }} />
      <GameOutlined />
      <HomeOutlined />
      <NotificationOutlined />
      <ProfileOutlined />
      <ChevronUpOutlined />
      <ChevronDownOutlined />
      <ChevronLeftOutlined />
      <ChevronRightOutlined />
      <CloseOutlined />
    </div>

    <h2>Filled</h2>
    <div className="flex gap-4 text-neutral-800">
      <ChatFilled {...args} />
      <EarthFilled className="text-blue-500" />
      <GameFilled className="text-highlight" style={{ color: 'orange' }} />
      <HomeFilled />
      <NotificationFilled />
      <ProfileFilled />
    </div>

    <h2>TwoTone</h2>
    <div className="flex gap-4 text-neutral-800">
      <ChatTwoTone {...args} />
      <EarthTwoTone className="text-blue-500" />
      <GameTwoTone className="text-highlight" style={{ color: 'orange' }} />
      <HomeTwoTone />
      <NotificationTwoTone />
      <ProfileTwoTone />
    </div>
  </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  className: 'text-primary',
};
