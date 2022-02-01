import { Logo, Avatar } from '@/components/Atoms';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Modal from '.';

export default {
  title: 'Example/Modal',
  component: Modal,
  argTypes: {
    isOpen: { control: 'boolean', defaultValue: true },
  },
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => (
  <div className="w-full h-full">
    <Modal {...args}>
      <Logo />
      <Avatar />
    </Modal>
  </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
