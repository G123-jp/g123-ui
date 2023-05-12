import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import Badge from './Badge';
import Button from './Button';

export default {
  title: 'Atoms/Badge',
  component: Badge,
  argTypes: {
    show: { control: 'boolean', defaultValue: true },
    content: { control: 'text', defaultValue: 'G123 Badge' },
    offsetTop: { control: 'number', defaultValue: 0 },
    offsetRight: { control: 'number', defaultValue: 0 },
  },
} as Meta<typeof Badge>;

const Template: StoryFn<typeof Badge> = (args) => (
  <Badge {...args}>
    <Button>G123 Button</Button>
  </Badge>
);

export const Default = Template.bind({});
