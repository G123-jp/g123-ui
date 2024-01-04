import classnames from '@/utils/classnames';
import { useArgs } from '@storybook/client-api';
import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import Drawer from './index';

export default {
  title: 'Organisms/Drawer',
  component: Drawer,
  argTypes: {
    title: { control: 'text', defaultValue: 'G123 Drawer' },
    isOpen: { control: 'boolean', defaultValue: false },
  },
} as Meta<typeof Drawer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Drawer> = ({ ...args }) => {
  const { open } = args;
  const [_, updateArgs] = useArgs();
  const handleClose = (): void => updateArgs({ open: false });

  return (
    <div className="size-full">
      <Drawer
        {...args}
        maskClassName="bg-slate-300/40"
        open={open}
        onClose={(): void => {
          handleClose();
        }}
        onGoBack={(): void => {
          console.log('on Drawer go back');
        }}
      >
        <div
          className={classnames(
            'flex items-center justify-center',
            'h-[28rem] w-full',
            'text-brand-primary-secondary',
            'bg-brand-primary-bg',
            'rounded-lg border border-dashed border-brand-primary-secondary',
          )}
        >
          <h2>TODO: Swappable</h2>
        </div>
      </Drawer>
    </div>
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  title: 'G123 Drawer',
  open: false,
};
