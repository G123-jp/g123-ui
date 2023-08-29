import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import { Button, ButtonSize, ButtonType } from '../Atoms';

import toast, { Toaster } from './Toast';

export default {
  title: 'Molecules/Toast',
} as Meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn = () => (
  <div className="h-full w-full">
    <div className="flex gap-x-4">
      <Button
        size={ButtonSize.small}
        onClick={(): void => {
          toast('Just A Toast');
        }}
      >
        Defaul
      </Button>

      <Button
        size={ButtonSize.small}
        type={ButtonType.highlight}
        onClick={(): void => {
          toast.success('Success');
        }}
      >
        Success
      </Button>

      <Button
        size={ButtonSize.small}
        type={ButtonType.danger}
        onClick={(): void => {
          toast.error('Something went wrong');
        }}
      >
        Error
      </Button>

      <Button
        size={ButtonSize.small}
        type={ButtonType.secondary}
        onClick={(): void => {
          toast.loading('Loading');
        }}
      >
        Loading
      </Button>
    </div>
    <Toaster />
  </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
