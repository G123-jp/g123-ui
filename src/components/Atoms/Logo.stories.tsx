import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import Logo from './Logo';

export default {
  title: 'Atoms/Logo',
  component: Logo,
} as Meta<typeof Logo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Logo> = (args) => (
  <div className="flex flex-col gap-y-4">
    <Logo {...args} />
    <Logo {...args} className="fill-primary" />
    <Logo {...args} className="w-12" />
    <Logo {...args} className="w-20 fill-highlight" />
  </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
