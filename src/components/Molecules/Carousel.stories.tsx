import { Logo } from '@/components/Atoms';
import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import Carousel from './Carousel';

export default {
  title: 'Molecules/Carousel',
  component: Carousel,
} as Meta<typeof Carousel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Carousel> = () => (
  <div className="h-full w-full">
    <Carousel className="w-72 gap-x-4 py-4">
      <Carousel.Item className="rounded bg-primary">
        <h1 className="flex h-20 w-60 items-center justify-center gap-x-2">
          <Logo /> 1
        </h1>
      </Carousel.Item>
      <Carousel.Item className="rounded bg-secondary">
        <h1 className="flex h-20 w-60 items-center justify-center gap-x-2">
          <Logo /> 2
        </h1>
      </Carousel.Item>
      <Carousel.Item className="rounded bg-highlight">
        <h1 className="flex h-20 w-60 items-center justify-center gap-x-2">
          <Logo /> 3
        </h1>
      </Carousel.Item>
    </Carousel>
  </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
