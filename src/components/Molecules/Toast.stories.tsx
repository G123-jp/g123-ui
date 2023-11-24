import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import { Button, ButtonSize, ButtonType } from '../Atoms';

import toast, { Toaster } from './Toast';

export default {
  title: 'Molecules/Toast',
} as Meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn = () => (
  <div className="flex h-full w-full flex-col gap-y-4">
    <div className="flex gap-x-4">
      <Button
        size={ButtonSize.small}
        onClick={(): void => {
          toast.default('Just A Toast');
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
        className="border-info-default text-info-default"
        size={ButtonSize.small}
        type={ButtonType.stroke}
        onClick={(): void => {
          toast.warn('Something got strange');
        }}
      >
        Warning
      </Button>

      <Button
        size={ButtonSize.small}
        type={ButtonType.secondary}
        onClick={(): void => {
          const toastId = toast.loading('Loading');

          setTimeout(() => {
            toast.dismiss(toastId);
          }, 2000);
        }}
      >
        Loading & dismiss
      </Button>

      <Button
        size={ButtonSize.small}
        type={ButtonType.secondary}
        onClick={(): void => {
          const toastId = toast.loading('Loading');

          setTimeout(() => {
            toast.remove(toastId);
          }, 2000);
        }}
      >
        Loading & remove(without animation)
      </Button>
    </div>

    <div className="flex gap-x-4">
      <Button
        size={ButtonSize.small}
        onClick={(): void => {
          toast.default('Just A Toast', {
            extraContent: (
              <div className="h-full w-full border border-solid border-brand-primary-secondary bg-brand-primary-bg">
                Default Extra Content
              </div>
            ),
          });
        }}
      >
        Defaul(with extra)
      </Button>

      <Button
        size={ButtonSize.small}
        type={ButtonType.highlight}
        onClick={(): void => {
          toast.success('Success', {
            extraContent: (
              <div className="h-full w-full rounded-md border border-solid border-brand-primary-secondary bg-brand-primary-bg p-4">
                <p>Success Extra Content</p>
                <p>Success Extra Content</p>
                <p>Success Extra Content</p>
                <p>Success Extra Content</p>
                <p>Success Extra Content</p>
              </div>
            ),
            duration: 999999999,
          });
        }}
      >
        Success(with extra)
      </Button>
    </div>
    <Toaster />
  </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
