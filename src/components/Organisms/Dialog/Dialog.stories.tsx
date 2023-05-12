import { Button, ButtonType, ButtonSize } from '@/components/Atoms';
import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import Dialog, { dialog, DialogContainer } from '.';

export default {
  title: 'Organisms/Dialog',
  component: Dialog,
} as Meta<typeof Dialog>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Dialog> = () => (
  <div className="flex h-full w-full flex-col gap-y-8">
    <DialogContainer />

    <div className="flex h-full w-full items-center gap-2">
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
    </div>

    <div className="flex h-full w-full gap-2">
      <h2>Icon&Logo:</h2>
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

      <Button
        type={ButtonType.danger}
        onClick={(): void => {
          dialog.alert(`Alert Dialog`);
        }}
      >
        Alert
      </Button>
    </div>
  </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
