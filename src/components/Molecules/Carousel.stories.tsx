import { Logo } from '@/components/Atoms';
import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import Carousel from './Carousel';

export default {
  title: 'Molecules/Carousel',
  component: Carousel,
} as Meta<typeof Carousel>;

type Story = StoryFn<typeof Carousel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story = () => (
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

const CarouselWithScrollbar: Story = () => {
  return (
    <div className="h-full w-full">
      <Carousel
        className="w-72 gap-x-4 py-4"
        scrollbarClassName="max-[1024px]:hidden-scrollbar"
      >
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
};

export const WithScrollbar = CarouselWithScrollbar.bind({});

const CarouselWithNavigation: Story = () => {
  const ID = 'test-carousel';
  function navigate(num: number): void {
    const element = document.getElementById(ID);
    const width = element?.querySelector('div')?.clientWidth || 0;
    element?.scrollBy(width * num, 0);
  }
  return (
    <div className="h-full w-full">
      <Carousel className="w-72 gap-x-4 py-4" id={ID}>
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
      <button type="button" onClick={(): void => navigate(-1)}>
        left
      </button>
      &nbsp;
      <button type="button" onClick={(): void => navigate(1)}>
        right
      </button>
    </div>
  );
};

export const WithNavigation = CarouselWithNavigation.bind({});
