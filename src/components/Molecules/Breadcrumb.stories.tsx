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
  <div className="flex size-full flex-col gap-4">
    <div className="flex flex-col gap-2">
      <h2>Desktop:</h2>
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
    </div>
    <div className="flex flex-col gap-2">
      <h2>Mobile:</h2>
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
        mode="mobile"
      />
    </div>
    <Toaster />
  </div>
);

export const Default = BreadcrumbWithDefaultItems.bind({});

const BreadcrumbWithReactElementItems: Story = () => {
  return (
    <div className="flex size-full flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h2>Desktop:</h2>
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
              className="!px-0"
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

      <div className="flex flex-col gap-2">
        <h2>Mobile:</h2>
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
              className="!px-0"
              type={ButtonType.link}
              onClick={(evt): void => {
                evt?.preventDefault();
                toast.success('element item clicked');
              }}
            >
              Element onClick
            </Button>,
          ]}
          mode="mobile"
        />
      </div>
    </div>
  );
};

export const WithReactElementItems = BreadcrumbWithReactElementItems.bind({});
