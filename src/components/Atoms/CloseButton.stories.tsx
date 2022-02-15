import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import CloseButton from './CloseButton';

export default {
  title: 'Atoms/CloseButton',
  component: CloseButton,
} as ComponentMeta<typeof CloseButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CloseButton> = (args) => (
  <CloseButton {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
