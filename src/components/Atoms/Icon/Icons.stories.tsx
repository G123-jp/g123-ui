import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import LoadingOutlined from './icons/LoadingOutlined';

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
  CopyOutlined,
  CopyFilled,
  CopyTwoTone,
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
      <CopyOutlined className="text-blue-500" />
      <DownloadOutlined
        className="text-highlight"
        style={{ color: 'orange' }}
      />
      <EarthOutlined />
      <GameOutlined />
      <HomeOutlined />
      <NotificationOutlined />
      <ProfileOutlined />
      <ChevronUpOutlined />
      <ChevronDownOutlined />
      <ChevronLeftOutlined />
      <ChevronRightOutlined />
      <CloseOutlined />
      <LoadingOutlined className="animate-spin" />
    </div>

    <h2>Filled</h2>
    <div className="flex gap-4 text-neutral-800">
      <ChatFilled {...args} />
      <CopyFilled className="text-blue-500" />
      <EarthFilled className="text-highlight" style={{ color: 'orange' }} />
      <GameFilled />
      <HomeFilled />
      <NotificationFilled />
      <ProfileFilled />
    </div>

    <h2>TwoTone</h2>
    <div className="flex gap-4 text-neutral-800">
      <ChatTwoTone {...args} />
      <CopyTwoTone className="text-blue-500" />
      <EarthTwoTone className="text-highlight" style={{ color: 'orange' }} />
      <GameTwoTone />
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
