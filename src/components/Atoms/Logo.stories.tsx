import { StoryFn, Meta } from '@storybook/react';
import React, { useEffect } from 'react';

import Logo from './Logo';

import { Icon } from '.';

export default {
  title: 'Atoms/Logo',
  component: Logo,
} as Meta<typeof Logo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Logo> = (args) => {
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      setInterval(() => {
        ref.current?.classList?.toggle('opacity-40');
      }, 1000);
    }
  }, []);

  return (
    <div className="flex flex-col gap-y-4">
      <Logo {...args} />
      <Logo {...args} className="fill-primary" />
      <Logo {...args} className="w-12" />
      <Logo {...args} className="w-20 fill-highlight" />
      <div className="flex items-center gap-x-4">
        <Logo {...args} ref={ref} />{' '}
        <span className="flex items-center justify-center text-font-secondary">
          <Icon.ExclamationOutlined className="scale-75" /> opacity is controled
          via ref
        </span>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
