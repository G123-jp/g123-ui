import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import Button, { ButtonHtmlType } from './Button';

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
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = ({ children, ...args }) => (
  <Button {...args}>{children ?? 'Button'}</Button>
);

export const Default = Template.bind({
  children: 'Button',
  htmlType: ButtonHtmlType.button,
  size: ButtonSize.large,
  type: ButtonType.default,
});
