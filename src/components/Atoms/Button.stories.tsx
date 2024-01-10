import { StoryFn, Meta } from '@storybook/react';
import React, { useEffect } from 'react';

import toast, { Toaster } from '../Molecules/Toast';

import Button from './Button';
import { ChatOutlined } from './Icon';

import { ButtonSize, ButtonType } from './index';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    children: { control: 'text', defaultValue: 'Try to set props below' },
    block: { control: 'boolean', defaultValue: false },
    disabled: { control: 'boolean', defaultValue: false },
    type: {
      options: Object.values(ButtonType),
      control: 'select',
      defaultValue: ButtonType.default,
    },
    size: {
      options: Object.values(ButtonSize),
      control: 'select',
      defaultValue: ButtonSize.default,
    },
    className: { control: 'text', defaultValue: '' },
  },
} as Meta<typeof Button>;

type Story = StoryFn<typeof Button>;

type DefaultProps = React.PropsWithChildren<any>;

const DefaultTemplate: Story = ({ children, ...args }: DefaultProps) => {
  const ref = React.useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (ref.current) {
      setInterval(() => {
        ref.current?.classList?.toggle('opacity-40');
      }, 1000);
    }
  }, []);

  return (
    <div className="flex flex-col gap-2">
      {/* Button Type: Basic */}
      <div className="flex items-center gap-2">
        <Button {...args} aria-label="g123-button">
          {children ?? 'Button'}
        </Button>
        <Button ref={ref}>opacity is controled via ref</Button>
      </div>
      <Toaster />
    </div>
  );
};

export const Default = DefaultTemplate.bind({});
Default.args = {
  children: 'Try to set props below',
  size: ButtonSize.default,
  type: ButtonType.default,
  block: false,
  disabled: false,
  loading: false,
  className: '',
  style: {},
};

const SummaryTemplate: Story = () => (
  <div className="flex flex-col gap-2">
    {/* Button Type: Basic */}
    <div className="flex items-center gap-2">
      <Button type={ButtonType.highlight}>Highlight</Button>
      <Button type={ButtonType.primary}>Primary</Button>
      <Button>Default</Button>
      <Button type={ButtonType.secondary}>Secondary</Button>
      <Button type={ButtonType.stroke}>Stroke</Button>
      <Button type={ButtonType.danger}>Danger</Button>
      <Button type={ButtonType.link}>Link</Button>
      <Button type={ButtonType.text}>Text</Button>
    </div>

    {/* Button Type: Icon Only */}
    <div className="flex items-center gap-2">
      <Button icon={<ChatOutlined />} type={ButtonType.highlight} />
      <Button icon={<ChatOutlined />} type={ButtonType.primary} />
      <Button icon={<ChatOutlined />} />
      <Button icon={<ChatOutlined />} type={ButtonType.secondary} />
      <Button icon={<ChatOutlined />} type={ButtonType.stroke} />
      <Button icon={<ChatOutlined />} type={ButtonType.danger} />
      <Button icon={<ChatOutlined />} type={ButtonType.link} />
      <Button icon={<ChatOutlined />} type={ButtonType.text} />
    </div>

    {/* Button Type: With Icon */}
    <div className="flex items-center gap-2">
      <Button icon={<ChatOutlined />} type={ButtonType.highlight}>
        Highlight
      </Button>
      <Button icon={<ChatOutlined />} type={ButtonType.primary}>
        Primary
      </Button>
      <Button icon={<ChatOutlined />}>Default</Button>
      <Button icon={<ChatOutlined />} type={ButtonType.secondary}>
        Secondary
      </Button>
      <Button icon={<ChatOutlined />} type={ButtonType.stroke}>
        Stroke
      </Button>
      <Button icon={<ChatOutlined />} type={ButtonType.danger}>
        Danger
      </Button>
      <Button icon={<ChatOutlined />} type={ButtonType.link}>
        Link
      </Button>
      <Button icon={<ChatOutlined />} type={ButtonType.text}>
        Text
      </Button>
    </div>

    {/* Button Size */}
    <div className="flex flex-col gap-2">
      {/* Button Size: Basic & Inline */}
      <div className="flex items-center gap-2">
        <Button size={ButtonSize.small}>Small</Button>
        <Button size={ButtonSize.middle}>Middle</Button>
        <Button size={ButtonSize.large}>Large</Button>
        <Button size={ButtonSize.xLarge}>XLarge</Button>
        <Button size={ButtonSize.small} type={ButtonType.link}>
          Small
        </Button>
        <Button size={ButtonSize.middle} type={ButtonType.link}>
          Middle
        </Button>
        <Button size={ButtonSize.large} type={ButtonType.link}>
          Large
        </Button>
        <Button size={ButtonSize.xLarge} type={ButtonType.link}>
          XLarge
        </Button>
      </div>
      {/* Button Size: Only Icon & With Icon & Inline With Icon */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Button
            icon={<ChatOutlined className="scale-50" />}
            size={ButtonSize.small}
          />
          <Button icon={<ChatOutlined />} size={ButtonSize.small} />
          <Button icon={<ChatOutlined />} size={ButtonSize.middle} />
          <Button icon={<ChatOutlined />} size={ButtonSize.large} />
          <Button icon={<ChatOutlined />} size={ButtonSize.xLarge} />
        </div>
        <div className="flex items-center gap-2">
          <Button icon={<ChatOutlined />} size={ButtonSize.small}>
            Small
          </Button>
          <Button icon={<ChatOutlined />} size={ButtonSize.middle}>
            Middle
          </Button>
          <Button icon={<ChatOutlined />} size={ButtonSize.large}>
            Large
          </Button>
          <Button icon={<ChatOutlined />} size={ButtonSize.xLarge}>
            XLarge
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button
            icon={<ChatOutlined />}
            size={ButtonSize.small}
            type={ButtonType.link}
          >
            Small
          </Button>
          <Button
            icon={<ChatOutlined />}
            size={ButtonSize.middle}
            type={ButtonType.link}
          >
            Middle
          </Button>
          <Button
            icon={<ChatOutlined />}
            size={ButtonSize.large}
            type={ButtonType.link}
          >
            Large
          </Button>
          <Button
            icon={<ChatOutlined />}
            size={ButtonSize.xLarge}
            type={ButtonType.link}
          >
            XLarge
          </Button>
        </div>
      </div>
      <Button block>Block</Button>
    </div>

    {/* UX */}
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Button>Normal</Button>
        <Button disabled>Disabled</Button>
        <Button loading>Loading</Button>
        <Button icon={<ChatOutlined />} loading>
          Loading with given icon
        </Button>
        <Button icon={<ChatOutlined />} loading />
        <Button
          onClick={(): void => {
            toast.success('Behave as Button(default)');
          }}
        >
          Behave as Button(default)
        </Button>
        <Button
          href="https://www.npmjs.com/package/@g123jp/g123-ui"
          target="_blank"
        >
          Behave as Link
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button type={ButtonType.highlight}>Normal</Button>
        <Button disabled type={ButtonType.highlight}>
          Disabled
        </Button>
        <Button loading type={ButtonType.highlight}>
          Loading
        </Button>
        <Button icon={<ChatOutlined />} loading type={ButtonType.highlight}>
          Loading with given icon
        </Button>
        <Button icon={<ChatOutlined />} loading type={ButtonType.highlight} />
      </div>
      <div className="flex items-center gap-2">
        <Button type={ButtonType.primary}>Normal</Button>
        <Button disabled type={ButtonType.primary}>
          Disabled
        </Button>
        <Button loading type={ButtonType.primary}>
          Loading
        </Button>
        <Button icon={<ChatOutlined />} loading type={ButtonType.primary}>
          Loading with given icon
        </Button>
        <Button icon={<ChatOutlined />} loading type={ButtonType.primary} />
      </div>
      <div className="flex items-center gap-2">
        <Button type={ButtonType.stroke}>Normal</Button>
        <Button disabled type={ButtonType.stroke}>
          Disabled
        </Button>
        <Button loading type={ButtonType.stroke}>
          Loading
        </Button>
        <Button icon={<ChatOutlined />} loading type={ButtonType.stroke}>
          Loading with given icon
        </Button>
        <Button icon={<ChatOutlined />} loading type={ButtonType.stroke} />
      </div>
      <div className="flex items-center gap-2">
        <Button type={ButtonType.danger}>Normal</Button>
        <Button disabled type={ButtonType.danger}>
          Disabled
        </Button>
        <Button loading type={ButtonType.danger}>
          Loading
        </Button>
        <Button icon={<ChatOutlined />} loading type={ButtonType.danger}>
          Loading with given icon
        </Button>
        <Button icon={<ChatOutlined />} loading type={ButtonType.danger} />
      </div>
      <div className="flex items-center gap-2">
        <Button type={ButtonType.link}>Normal</Button>
        <Button disabled type={ButtonType.link}>
          Disabled
        </Button>
        <Button loading type={ButtonType.link}>
          Loading
        </Button>
        <Button icon={<ChatOutlined />} loading type={ButtonType.link}>
          Loading with given icon
        </Button>
        <Button icon={<ChatOutlined />} loading type={ButtonType.link} />
      </div>
      <div className="flex items-center gap-2">
        <Button type={ButtonType.text}>Normal</Button>
        <Button disabled type={ButtonType.text}>
          Disabled
        </Button>
        <Button loading type={ButtonType.text}>
          Loading
        </Button>
        <Button icon={<ChatOutlined />} loading type={ButtonType.text}>
          Loading with given icon
        </Button>
        <Button icon={<ChatOutlined />} loading type={ButtonType.text} />
      </div>
    </div>
    <Toaster />
  </div>
);

export const Summary = SummaryTemplate.bind({});
Summary.args = {};

const TypeTemplate: Story = () => (
  <div className="flex flex-col gap-2">
    {/* Button Type: Basic */}
    <div className="flex items-center gap-2">
      <Button type={ButtonType.highlight}>Highlight</Button>
      <Button type={ButtonType.primary}>Primary</Button>
      <Button>Default</Button>
      <Button type={ButtonType.secondary}>Secondary</Button>
      <Button type={ButtonType.stroke}>Stroke</Button>
      <Button type={ButtonType.danger}>Danger</Button>
      <Button type={ButtonType.link}>Link</Button>
      <Button type={ButtonType.text}>Text</Button>
    </div>

    {/* Button Type: Icon Only */}
    <div className="flex items-center gap-2">
      <Button icon={<ChatOutlined />} type={ButtonType.highlight} />
      <Button icon={<ChatOutlined />} type={ButtonType.primary} />
      <Button icon={<ChatOutlined />} />
      <Button icon={<ChatOutlined />} type={ButtonType.secondary} />
      <Button icon={<ChatOutlined />} type={ButtonType.stroke} />
      <Button icon={<ChatOutlined />} type={ButtonType.danger} />
      <Button icon={<ChatOutlined />} type={ButtonType.link} />
      <Button icon={<ChatOutlined />} type={ButtonType.text} />
    </div>

    {/* Button Type: With Icon */}
    <div className="flex items-center gap-2">
      <Button icon={<ChatOutlined />} type={ButtonType.highlight}>
        Highlight
      </Button>
      <Button icon={<ChatOutlined />} type={ButtonType.primary}>
        Primary
      </Button>
      <Button icon={<ChatOutlined />}>Default</Button>
      <Button icon={<ChatOutlined />} type={ButtonType.secondary}>
        Secondary
      </Button>
      <Button icon={<ChatOutlined />} type={ButtonType.stroke}>
        Stroke
      </Button>
      <Button icon={<ChatOutlined />} type={ButtonType.danger}>
        Danger
      </Button>
      <Button icon={<ChatOutlined />} type={ButtonType.link}>
        Link
      </Button>
      <Button icon={<ChatOutlined />} type={ButtonType.text}>
        Text
      </Button>
    </div>

    <Toaster />
  </div>
);

export const Type = TypeTemplate.bind({});
Type.args = {};

const SizeTemplate: Story = () => (
  <div className="flex flex-col gap-2">
    {/* Button Size */}
    <div className="flex flex-col gap-2">
      {/* Button Size: Basic & Inline */}
      <div className="flex items-center gap-2">
        <Button size={ButtonSize.small}>Small</Button>
        <Button size={ButtonSize.middle}>Middle</Button>
        <Button size={ButtonSize.large}>Large</Button>
        <Button size={ButtonSize.xLarge}>XLarge</Button>
        <Button size={ButtonSize.small} type={ButtonType.link}>
          Small
        </Button>
        <Button size={ButtonSize.middle} type={ButtonType.link}>
          Middle
        </Button>
        <Button size={ButtonSize.large} type={ButtonType.link}>
          Large
        </Button>
        <Button size={ButtonSize.xLarge} type={ButtonType.link}>
          XLarge
        </Button>
      </div>
      {/* Button Size: Only Icon & With Icon & Inline With Icon */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Button icon={<ChatOutlined />} size={ButtonSize.small} />
          <Button icon={<ChatOutlined />} size={ButtonSize.middle} />
          <Button icon={<ChatOutlined />} size={ButtonSize.large} />
          <Button icon={<ChatOutlined />} size={ButtonSize.xLarge} />
        </div>
        <div className="flex items-center gap-2">
          <Button icon={<ChatOutlined />} size={ButtonSize.small}>
            Small
          </Button>
          <Button icon={<ChatOutlined />} size={ButtonSize.middle}>
            Middle
          </Button>
          <Button icon={<ChatOutlined />} size={ButtonSize.large}>
            Large
          </Button>
          <Button icon={<ChatOutlined />} size={ButtonSize.xLarge}>
            XLarge
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button
            icon={<ChatOutlined />}
            size={ButtonSize.small}
            type={ButtonType.link}
          >
            Small
          </Button>
          <Button
            icon={<ChatOutlined />}
            size={ButtonSize.middle}
            type={ButtonType.link}
          >
            Middle
          </Button>
          <Button
            icon={<ChatOutlined />}
            size={ButtonSize.large}
            type={ButtonType.link}
          >
            Large
          </Button>
          <Button
            icon={<ChatOutlined />}
            size={ButtonSize.xLarge}
            type={ButtonType.link}
          >
            XLarge
          </Button>
        </div>
      </div>
      <Button block>Block</Button>
    </div>

    <Toaster />
  </div>
);

export const Size = SizeTemplate.bind({});
Size.args = {};

const UXTemplate: Story = () => (
  <div className="flex flex-col gap-2">
    {/* UX */}
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Button>Normal</Button>
        <Button disabled>Disabled</Button>
        <Button loading>Loading</Button>
        <Button icon={<ChatOutlined />} loading>
          Loading with given icon
        </Button>
        <Button icon={<ChatOutlined />} loading />
        <Button
          onClick={(): void => {
            toast.success('Behave as Button(default)');
          }}
        >
          Behave as Button(default)
        </Button>
        <Button
          href="https://www.npmjs.com/package/@g123jp/g123-ui"
          target="_blank"
        >
          Behave as Link
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button type={ButtonType.highlight}>Normal</Button>
        <Button disabled type={ButtonType.highlight}>
          Disabled
        </Button>
        <Button loading type={ButtonType.highlight}>
          Loading
        </Button>
        <Button icon={<ChatOutlined />} loading type={ButtonType.highlight}>
          Loading with given icon
        </Button>
        <Button icon={<ChatOutlined />} loading type={ButtonType.highlight} />
      </div>
      <div className="flex items-center gap-2">
        <Button type={ButtonType.primary}>Normal</Button>
        <Button disabled type={ButtonType.primary}>
          Disabled
        </Button>
        <Button loading type={ButtonType.primary}>
          Loading
        </Button>
        <Button icon={<ChatOutlined />} loading type={ButtonType.primary}>
          Loading with given icon
        </Button>
        <Button icon={<ChatOutlined />} loading type={ButtonType.primary} />
      </div>
      <div className="flex items-center gap-2">
        <Button type={ButtonType.stroke}>Normal</Button>
        <Button disabled type={ButtonType.stroke}>
          Disabled
        </Button>
        <Button loading type={ButtonType.stroke}>
          Loading
        </Button>
        <Button icon={<ChatOutlined />} loading type={ButtonType.stroke}>
          Loading with given icon
        </Button>
        <Button icon={<ChatOutlined />} loading type={ButtonType.stroke} />
      </div>
      <div className="flex items-center gap-2">
        <Button type={ButtonType.danger}>Normal</Button>
        <Button disabled type={ButtonType.danger}>
          Disabled
        </Button>
        <Button loading type={ButtonType.danger}>
          Loading
        </Button>
        <Button icon={<ChatOutlined />} loading type={ButtonType.danger}>
          Loading with given icon
        </Button>
        <Button icon={<ChatOutlined />} loading type={ButtonType.danger} />
      </div>
      <div className="flex items-center gap-2">
        <Button type={ButtonType.link}>Normal</Button>
        <Button disabled type={ButtonType.link}>
          Disabled
        </Button>
        <Button loading type={ButtonType.link}>
          Loading
        </Button>
        <Button icon={<ChatOutlined />} loading type={ButtonType.link}>
          Loading with given icon
        </Button>
        <Button icon={<ChatOutlined />} loading type={ButtonType.link} />
      </div>
      <div className="flex items-center gap-2">
        <Button type={ButtonType.text}>Normal</Button>
        <Button disabled type={ButtonType.text}>
          Disabled
        </Button>
        <Button loading type={ButtonType.text}>
          Loading
        </Button>
        <Button icon={<ChatOutlined />} loading type={ButtonType.text}>
          Loading with given icon
        </Button>
        <Button icon={<ChatOutlined />} loading type={ButtonType.text} />
      </div>
    </div>
    <Toaster />
  </div>
);

export const UX = UXTemplate.bind({});
UX.args = {};
