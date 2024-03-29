import { Logo, Avatar } from '@/components/Atoms';
import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import Modal from './index';

export default {
  title: 'Organisms/Modal',
  component: Modal,
  argTypes: {
    isOpen: { control: 'boolean', defaultValue: false },
  },
} as Meta<typeof Modal>;

// DEPRECATED(Akira): for v1.x, support game&psp
// use Drawer instead for general purpose
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Modal> = (args) => (
  <div className="size-full">
    <Modal {...args}>
      <Logo />
      <Avatar />
    </Modal>
  </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
