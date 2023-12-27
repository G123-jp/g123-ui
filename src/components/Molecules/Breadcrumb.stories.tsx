import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import { Button, ButtonType } from '../Atoms';

import Breadcrumb from './Breadcrumb';
import toast, { Toaster } from './Toast';

export default {
  title: 'Molecules/Breadcrumb',
  component: Breadcrumb,
} as Meta<typeof Breadcrumb>;

type Story = StoryFn<typeof Breadcrumb>;

const BreadcrumbWithDefaultItems: Story = () => (
  <div className="size-full">
    <Breadcrumb
      items={[
        { title: 'g123-ui', href: 'https://github.com/G123-jp/g123-ui' },
        {
          title: 'Molecules',
          href: 'https://github.com/G123-jp/g123-ui/tree/develop/src/components/Molecules',
        },
        {
          title: 'Breadcrumb',
          href: 'https://github.com/G123-jp/g123-ui/blob/develop/src/components/Molecules/Breadcrumb.tsx',
        },
        {
          title: 'onClick',
          onClick: (evt): void => {
            evt?.preventDefault();
            toast.success('item clicked');
          },
        },
      ]}
    />
    <Toaster />
  </div>
);

export const Default = BreadcrumbWithDefaultItems.bind({});

const BreadcrumbWithReactElementItems: Story = () => {
  return (
    <div className="size-full">
      <Breadcrumb
        items={[
          <div key="g123-ui">Element g123-ui</div>,
          <a
            key="Molecules"
            href="https://github.com/G123-jp/g123-ui/tree/develop/src/components/Molecules"
          >
            Element Molecules
          </a>,
          <a href="https://github.com/G123-jp/g123-ui/blob/develop/src/components/Molecules/Breadcrumb.tsx">
            Element Breadcrumb
          </a>,
          <Button
            // size={ButtonSize.small}
            type={ButtonType.link}
            onClick={(evt): void => {
              evt?.preventDefault();
              toast.success('element item clicked');
            }}
          >
            Element onClick
          </Button>,
        ]}
      />
    </div>
  );
};

export const WithReactElementItems = BreadcrumbWithReactElementItems.bind({});
