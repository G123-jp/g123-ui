import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Badge from './Badge';
import Button from './Button';

export default {
  title: 'Example/Badge',
  component: Badge,
  argTypes: {
    show: { control: 'boolean', defaultValue: true },
    content: { control: 'text', defaultValue: 'G123 Badge' },
    offsetTop: { control: 'number', defaultValue: 0 },
    offsetRight: { control: 'number', defaultValue: 0 },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => (
  <Badge {...args}>
    <Button>G123 Button</Button>
  </Badge>
);

export const Default = Template.bind({});
