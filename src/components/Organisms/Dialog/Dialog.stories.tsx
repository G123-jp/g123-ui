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
  <div className="flex h-full w-full flex-col gap-y-8">
    <DialogContainer />

    {/* TODO(Akira): size implementation  */}
    {/* <div className="flex h-full w-full items-center gap-2">
      <h2>Size:</h2>
      <Button
        size={ButtonSize.small}
        onClick={(): void => {
          dialog.confirm('Confirm Size XS', { size: 'xs' });
        }}
      >
        XS
      </Button>
      <Button
        size={ButtonSize.small}
        onClick={(): void => {
          dialog.confirm('Confirm Size SM', { size: 'sm' });
        }}
      >
        SM
      </Button>
      <Button
        size={ButtonSize.middle}
        onClick={(): void => {
          dialog.confirm('Confirm Size MD', { size: 'md' });
        }}
      >
        MD
      </Button>
      <Button
        size={ButtonSize.large}
        onClick={(): void => {
          dialog.confirm('Confirm Size LG', { size: 'lg' });
        }}
      >
        LG
      </Button>
      <Button
        block
        size={ButtonSize.large}
        onClick={(): void => {
          dialog.confirm('Confirm Size XL', { size: 'xl' });
        }}
      >
        XL
      </Button>
    </div> */}

    <div className="flex h-full w-full flex-col gap-2">
      <div className="flex h-full w-full items-center gap-2">
        <h2>Confirm: </h2>
        <Button
          onClick={(): void => {
            dialog.confirm(`Confirm Dialog with Exclamation Icon`);
          }}
        >
          Confirm(exclamation)
        </Button>

        <Button
          onClick={(): void => {
            dialog.confirm(`Confirm Dialog with Tick Icon`, { icon: 'tick' });
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

      <div className="flex h-full w-full items-center gap-2">
        <h2>Alert: </h2>
        <Button
          type={ButtonType.danger}
          onClick={(): void => {
            dialog.alert(`Alert Dialog`);
          }}
        >
          Alert
        </Button>
      </div>

      <div className="flex h-full w-full items-center gap-2">
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
