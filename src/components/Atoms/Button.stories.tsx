import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import Button from './Button';

import { ButtonSize, ButtonType } from '.';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    children: { control: 'text', defaultValue: 'G123 Button' },
    block: { control: 'boolean', defaultValue: false },
    disabled: { control: 'boolean', defaultValue: false },
    type: {
      options: Object.values(ButtonType),
      control: 'select',
      defaultValue: ButtonType.default,
    },
    size: {
      options: Object.values(ButtonSize),
      control: 'select',
      defaultValue: ButtonSize.middle,
    },
    className: { control: 'text', defaultValue: '' },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = ({ children, ...args }) => (
  <Button {...args}>{children ?? 'Button'}</Button>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: 'Button',
  size: ButtonSize.default,
  type: ButtonType.default,
  block: false,
  disabled: false,
  className: '',
  style: {},
};
