import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import CloseButton from './CloseButton';

export default {
  title: 'Atoms/CloseButton(deprecated)',
  component: CloseButton,
} as Meta<typeof CloseButton>;

// DEPRECATED: Akira: use <Button icon={<CloseOutlined className="scale-[0.85] text-[#666]" />} size={ButtonSize.small} type={ButtonType.secondary} /> instead
const Template: StoryFn<typeof CloseButton> = (args) => (
  <div className="flex flex-col gap-4">
    <h2 className="rounded-md bg-gray-100 px-4 py-2 text-gray-400">
      {`DEPRECATED: use <Button /> with icon <CloseOutlined /> instead`}
    </h2>
    <CloseButton {...args} />
  </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
