import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import VipBadge from './VipBadge';

export default {
  title: 'Molecules/VipBadge',
  component: VipBadge,
  argTypes: {
    rank: { control: 'number', defaultValue: 0 },
  },
} as Meta<typeof VipBadge>;

const Template: StoryFn<typeof VipBadge> = (args) => (
  <div className="flex gap-4">
    <VipBadge {...args} />
    <VipBadge rank={1} />
    <VipBadge rank={6} />
    <VipBadge rank={11} />
    <VipBadge rank={99} />
  </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  rank: 0,
};
