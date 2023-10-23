import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import {
  NotificationOutlined,
  HomeOutlined,
  LinkOutlined,
  GameOutlined,
  ChatOutlined,
  DocumentOutlined,
  DownloadOutlined,
  FileOutlined,
  PaymentOutlined,
  SecurityOutlined,
  EarthOutlined,
  ExclamationOutlined,
  ProfileOutlined,
  NotificationFilled,
  HomeFilled,
  GameFilled,
  ChatFilled,
  EarthFilled,
  ExclamationFilled,
  ProfileFilled,
  NotificationTwoTone,
  HomeTwoTone,
  LinkTwoTone,
  GameTwoTone,
  ChatTwoTone,
  EarthTwoTone,
  ExclamationTwoTone,
  ProfileTwoTone,
  ChevronUpOutlined,
  ChevronDownOutlined,
  ChevronLeftOutlined,
  ChevronRightOutlined,
  CloseOutlined,
  CopyOutlined,
  CopyFilled,
  CopyTwoTone,
  LoadingOutlined,
  StarOutlined,
  StarHalfOutlined,
  StarHalfFilled,
  StarFilled,
  StarHalfTwoTone,
  StarTwoTone,
  SwitchOutlined,
  DisconnectOutlined,
  FileFilled,
  FileTwoTone,
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
      <EarthOutlined className="text-nutuarl-5" />
      <ExclamationOutlined />
      <GameOutlined />
      <HomeOutlined />
      <NotificationOutlined />
      <ProfileOutlined />
      <FileOutlined />
      <StarOutlined />
      <StarHalfOutlined />
      <LinkOutlined />
      <ChevronUpOutlined />
      <ChevronDownOutlined />
      <ChevronLeftOutlined />
      <ChevronRightOutlined />
      <CloseOutlined />
      <DownloadOutlined
        className="text-highlight"
        style={{ color: 'orange' }}
      />
      <LoadingOutlined className="animate-spin" />
      <DocumentOutlined />
      <PaymentOutlined />
      <SecurityOutlined />
      <SwitchOutlined />
      <DisconnectOutlined />
    </div>

    <h2>Filled</h2>
    <div className="flex gap-4 text-neutral-800">
      <ChatFilled {...args} />
      <CopyFilled className="text-blue-500" />
      <EarthFilled className="text-highlight" style={{ color: 'orange' }} />
      <ExclamationFilled />
      <GameFilled />
      <HomeFilled />
      <NotificationFilled />
      <ProfileFilled />
      <FileFilled />
      <StarFilled />
      <StarHalfFilled />
    </div>

    <h2>TwoTone</h2>
    <div className="flex gap-4 text-neutral-800">
      <ChatTwoTone {...args} />
      <CopyTwoTone className="text-blue-500" />
      <EarthTwoTone className="text-highlight" style={{ color: 'orange' }} />
      <ExclamationTwoTone />
      <GameTwoTone />
      <HomeTwoTone />
      <NotificationTwoTone />
      <ProfileTwoTone />
      <FileTwoTone />
      <StarTwoTone />
      <StarHalfTwoTone />
      <LinkTwoTone />
    </div>
  </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  className: 'text-primary',
};
