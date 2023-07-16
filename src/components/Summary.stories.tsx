import {
  Avatar,
  Badge,
  Button,
  ButtonType,
  ButtonSize,
  ChevronButton,
  ChevronButtonType,
  CloseButton,
  Logo,
  Switch,
  Icon,
} from '@/components/Atoms';
import { Carousel } from '@/components/Molecules';
import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import {
  NotificationOutlined,
  HomeOutlined,
  GameOutlined,
  ChatOutlined,
  EarthOutlined,
  ProfileOutlined,
  NotificationFilled,
  HomeFilled,
  GameFilled,
  ChatFilled,
  EarthFilled,
  ProfileFilled,
  ChatTwoTone,
  EarthTwoTone,
} from './Atoms/Icon';

const { ProfileTwoTone, NotificationTwoTone, HomeTwoTone, GameTwoTone } = Icon;
export default {
  title: 'Summary',
} as Meta;

const Template: StoryFn = () => (
  <div className="flex flex-col gap-4">
    {/* Avatar & Logo */}
    <div className="flex items-center gap-2">
      <Logo />
      <Avatar />
    </div>

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

    {/* Button */}
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
          <Button size={ButtonSize.small} type={ButtonType.link}>
            Small
          </Button>
          <Button size={ButtonSize.middle} type={ButtonType.link}>
            Middle
          </Button>
          <Button size={ButtonSize.large} type={ButtonType.link}>
            Large
          </Button>
        </div>
        {/* Button Size: Only Icon & With Icon & Inline With Icon */}
        <div className="flex items-center gap-2">
          <Button icon={<ChatOutlined />} size={ButtonSize.small} />
          <Button icon={<ChatOutlined />} size={ButtonSize.middle} />
          <Button icon={<ChatOutlined />} size={ButtonSize.large} />
          <Button icon={<ChatOutlined />} size={ButtonSize.small}>
            Small
          </Button>
          <Button icon={<ChatOutlined />} size={ButtonSize.middle}>
            Middle
          </Button>
          <Button icon={<ChatOutlined />} size={ButtonSize.large}>
            Large
          </Button>
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
        </div>
        <Button block>Block</Button>
      </div>
      {/* UX */}
      <div className="flex items-center gap-2">
        <Button>Normal</Button>
        <Button disabled>Disabled</Button>
      </div>
    </div>

    {/* Badge */}
    <div className="flex gap-2">
      <Badge content="G123 Badge" show>
        <Button>Badge Content</Button>
      </Badge>
      <Badge show>
        <Button>Badge Dot</Button>
      </Badge>
      <Badge offsetRight={-3} offsetTop={28} show>
        <Button>Badge Offsets</Button>
      </Badge>
    </div>

    {/* ChevronButton */}
    <div className="flex gap-2">
      <ChevronButton type={ChevronButtonType.up} />
      <ChevronButton className="text-primary" type={ChevronButtonType.right} />
      <ChevronButton className="text-secondary" type={ChevronButtonType.down} />
      <ChevronButton className="text-danger" type={ChevronButtonType.left} />
      <ChevronButton color="#6bff8c" type={ChevronButtonType.forward} />
      <ChevronButton disabled type={ChevronButtonType.back} />
    </div>

    {/* CloseButton */}
    <div className="flex gap-2">
      <CloseButton onClose={(): void => {}} />
    </div>

    {/* Switch */}
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <Switch
          checked
          onSwitch={(checked: boolean): void => {
            console.info(`G123 Switch ${checked}`);
          }}
        />
        <Switch
          checked
          disabled
          onSwitch={(checked: boolean): void => {
            console.info(`G123 Switch ${checked}`);
          }}
        />
      </div>
      <div className="flex gap-2">
        <Switch
          checked
          size="small"
          onSwitch={(checked: boolean): void => {
            console.info(`G123 Switch ${checked}`);
          }}
        />
        <Switch
          checked
          disabled
          size="small"
          onSwitch={(checked: boolean): void => {
            console.info(`G123 Switch ${checked}`);
          }}
        />
      </div>
      <div className="flex gap-2">
        <Switch
          checked={false}
          onSwitch={(checked: boolean): void => {
            console.info(`G123 Switch ${checked}`);
          }}
        />
        <Switch
          checked={false}
          disabled
          onSwitch={(checked: boolean): void => {
            console.info(`G123 Switch ${checked}`);
          }}
        />
      </div>
      <div className="flex gap-2">
        <Switch
          checked={false}
          size="small"
          onSwitch={(checked: boolean): void => {
            console.info(`G123 Switch ${checked}`);
          }}
        />
        <Switch
          checked={false}
          disabled
          size="small"
          onSwitch={(checked: boolean): void => {
            console.info(`G123 Switch ${checked}`);
          }}
        />
      </div>
    </div>

    {/* Icons */}
    <div className="flex flex-col gap-2">
      <div className="flex gap-4 text-neutral-800">
        <NotificationOutlined />
        <HomeOutlined className="text-blue-500" />
        <GameOutlined className="text-highlight" style={{ color: 'orange' }} />
        <ChatOutlined />
        <EarthOutlined />
        <ProfileOutlined />
      </div>

      <div className="flex gap-4 text-neutral-800">
        <NotificationFilled />
        <HomeFilled className="text-blue-500" />
        <GameFilled className="text-highlight" style={{ color: 'orange' }} />
        <ChatFilled />
        <EarthFilled />
        <ProfileFilled />
      </div>

      <div className="flex gap-4 text-neutral-800">
        <NotificationTwoTone />
        <HomeTwoTone className="text-blue-500" />
        <GameTwoTone className="text-highlight" style={{ color: 'orange' }} />
        <ChatTwoTone />
        <EarthTwoTone />
        <ProfileTwoTone />
      </div>
    </div>
  </div>
);

export const Default = Template.bind({});
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
