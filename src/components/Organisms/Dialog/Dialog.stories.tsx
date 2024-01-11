import { Button, ButtonType } from '@/components/Atoms';
import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import toast, { Toaster } from '../../Molecules/Toast';

import Dialog, { dialog, DialogContainer } from './index';

export default {
  title: 'Organisms/Dialog',
  component: Dialog,
} as Meta<typeof Dialog>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Dialog> = () => (
  <div className="flex size-full flex-col gap-y-8">
    <DialogContainer />

    <div className="flex size-full flex-col gap-2">
      <div className="flex size-full items-center gap-2">
        <h2>Confirm: </h2>
        <Button
          onClick={(): void => {
            dialog.confirm(`Confirm Dialog with Exclamation Icon`, {
              onConfirm: (): void => {
                toast.success('Confirm Dialog with Exclamation Icon');
              },
              onCancle: (): void => {
                toast.error('Cancle Dialog with Exclamation Icon');
              },
            });
          }}
        >
          Confirm(exclamation)
        </Button>

        <Button
          onClick={(): void => {
            dialog.confirm(`Confirm Dialog with Tick Icon`, {
              icon: 'tick',
              onConfirm: (): void => {
                toast.success('Confirm Dialog with Tick Icon');
              },
              onCancle: (): void => {
                toast.error('Cancle Dialog with Tick Icon');
              },
            });
          }}
        >
          Confirm(tick)
        </Button>

        <Button
          onClick={(): void => {
            dialog.confirm(`Confirm Dialog without Icon`, { icon: false });
          }}
        >
          Confirm(no icon)
        </Button>

        <Button
          type={ButtonType.primary}
          onClick={(): void => {
            dialog.confirm(`Confirm Dialog with Tick Icon`, { logo: true });
          }}
        >
          Confirm(logo)
        </Button>
      </div>

      <div className="flex size-full items-center gap-2">
        <h2>Alert: </h2>
        <Button
          type={ButtonType.danger}
          onClick={(): void => {
            dialog.alert(`Alert Dialog`, {
              icon: 'tick',
              onConfirm: (): void => {
                toast.success('Confirm Alert Dialog');
              },
            });
          }}
        >
          Alert
        </Button>
      </div>

      <div className="flex size-full items-center gap-2">
        <h2>Show&Customize: </h2>
        <Button
          type={ButtonType.stroke}
          onClick={(): void => {
            dialog.show(`Simple Dialog`, 'Title');
          }}
        >
          Simple
        </Button>

        <Button
          type={ButtonType.stroke}
          onClick={(): void => {
            dialog.show(`Simple Dialog`, 'Title', [
              {
                color: 'primary',
                text: 'Button 1',
                onClick: (): void => {
                  console.log('Button 1 clicked');
                },
              },
              {
                color: 'secondary',
                text: 'Button 2',
                onClick: (): void => {
                  console.log('Button 2 clicked');
                },
              },
            ]);
          }}
        >
          With Button
        </Button>

        <Button
          type={ButtonType.stroke}
          onClick={(): void => {
            dialog.show('Custom Mask', null, null, {
              maskClassName: 'bg-brand-primary-base/30',
            });
          }}
        >
          Custom Mask
        </Button>

        <Button
          type={ButtonType.stroke}
          onClick={(): void => {
            dialog.show(`Custom Dialog`, null, null, {
              className: 'bg-brand-primary-base font-bold text-xl',
              onClose: (): void => {
                toast.success('Dialog Closed');
              },
            });
          }}
        >
          Custom Dialog
        </Button>

        <Button
          type={ButtonType.stroke}
          onClick={(): void => {
            dialog.show(`Custom Content`, null, null, {
              contentClassName:
                'px-4 font-bold text-xl text-brand-primary-secondary animate-pulse',
            });
          }}
        >
          Custom Content
        </Button>
      </div>
    </div>
    <Toaster />
  </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
