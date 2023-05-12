import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import Logo from './Logo';

export default {
  title: 'Atoms/Logo',
  component: Logo,
} as Meta<typeof Logo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Logo> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
