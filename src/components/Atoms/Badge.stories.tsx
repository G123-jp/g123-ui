import { StoryFn, Meta } from '@storybook/react';
import React, { useEffect } from 'react';

import Badge from './Badge';
import Button from './Button';

export default {
  title: 'Atoms/Badge',
  component: Badge,
  argTypes: {
    show: { control: 'boolean', defaultValue: true },
    content: { control: 'text', defaultValue: '' },
    offsetTop: { control: 'number', defaultValue: 0 },
    offsetRight: { control: 'number', defaultValue: 0 },
  },
} as Meta<typeof Badge>;

const Template: StoryFn<typeof Badge> = (args) => {
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      setInterval(() => {
        ref.current?.classList?.toggle('opacity-40');
      }, 1000);
    }
  }, []);

  return (
    <div className="flex gap-x-4">
      <Badge {...args}>
        <Button>With Badge</Button>
      </Badge>
      <Badge ref={ref}>
        <Button>opacity is controled via ref</Button>
      </Badge>
    </div>
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  show: true,
  content: '',
  isOverlay: true,
  offsetRight: 0,
  offsetTop: 0,
};
