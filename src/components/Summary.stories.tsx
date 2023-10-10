import {
  Avatar,
  Badge,
  Button,
  ButtonType,
  ButtonSize,
  Logo,
  Switch,
  Icon,
} from '@/components/Atoms';
import { Carousel, Toaster, VipBadge, toast } from '@/components/Molecules';
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
  ChevronUpOutlined,
  ChevronRightOutlined,
  ChevronDownOutlined,
  ChevronLeftOutlined,
  CloseOutlined,
  CopyFilled,
  CopyOutlined,
  CopyTwoTone,
  DocumentOutlined,
  DownloadOutlined,
  ExclamationFilled,
  ExclamationOutlined,
  ExclamationTwoTone,
  FileOutlined,
  LoadingOutlined,
  PaymentOutlined,
  SecurityOutlined,
  StarFilled,
  StarHalfFilled,
  StarHalfOutlined,
  StarHalfTwoTone,
  StarOutlined,
  StarTwoTone,
  SwitchOutlined,
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
      <Avatar type="colorful" />
      <Avatar type="cs" />
      <Avatar size="small" />
      <Avatar size="small" type="colorful" />
      <Avatar size="small" type="cs" />
    </div>

    <div className="h-full w-full">
      <Carousel className="w-96 gap-x-4 py-4">
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

      {/* UX */}
      <div className="flex items-center gap-2">
        <Button>Normal</Button>
        <Button disabled>Disabled</Button>
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
      <Toaster />
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
      <Badge content="G123 Badge" isOverlay={false} show>
        <Button>Badge Content without overlay</Button>
      </Badge>
      <Badge isOverlay={false} show>
        <Button>Badge Dot without overlay</Button>
      </Badge>
    </div>

    {/* ChevronButton (use Icon Button) */}
    <div className="flex gap-2">
      <Button
        icon={<ChevronUpOutlined className="text-font-primary" />}
        type={ButtonType.link}
      />
      <Button
        icon={<ChevronRightOutlined className="text-font-primary" />}
        type={ButtonType.link}
      />
      <Button
        icon={<ChevronDownOutlined className="text-font-primary" />}
        type={ButtonType.link}
      />
      <Button
        icon={<ChevronLeftOutlined className="text-font-primary" />}
        type={ButtonType.link}
      />
      <Button
        disabled
        icon={<ChevronRightOutlined className="text-font-primary" />}
        type={ButtonType.link}
      />
    </div>

    {/* CloseButton (use Icon Button)  */}
    <div className="flex gap-2">
      <Button
        icon={<CloseOutlined className="scale-[0.85] text-[#666]" />}
        size={ButtonSize.small}
        type={ButtonType.secondary}
        onClick={(): void => {}}
      />
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
    <div className="flex flex-col gap-4 text-neutral-800">
      <div className="flex gap-4 text-neutral-800">
        <ChatOutlined className="text-primary" />
        <CopyOutlined className="text-blue-500" />
        <EarthOutlined className="text-nutuarl-5" />
        <ExclamationOutlined />
        <GameOutlined />
        <HomeOutlined />
        <NotificationOutlined />
        <ProfileOutlined />
        <StarOutlined />
        <StarHalfOutlined />
        <ChevronUpOutlined />
        <ChevronDownOutlined />
        <ChevronLeftOutlined />
        <ChevronRightOutlined />
        <CloseOutlined />
        <DownloadOutlined
          className="text-highlight"
          style={{ color: 'orange' }}
        />
        <LoadingOutlined className="animate-spin" />
        <DocumentOutlined />
        <FileOutlined />
        <PaymentOutlined />
        <SecurityOutlined />
        <SwitchOutlined />
      </div>

      <div className="flex gap-4 text-neutral-800">
        <ChatFilled className="text-primary" />
        <CopyFilled className="text-blue-500" />
        <EarthFilled className="text-highlight" style={{ color: 'orange' }} />
        <ExclamationFilled />
        <GameFilled />
        <HomeFilled />
        <NotificationFilled />
        <ProfileFilled />
        <StarFilled />
        <StarHalfFilled />
      </div>

      <div className="flex gap-4 text-neutral-800">
        <ChatTwoTone className="text-primary" />
        <CopyTwoTone className="text-blue-500" />
        <EarthTwoTone className="text-highlight" style={{ color: 'orange' }} />
        <ExclamationTwoTone />
        <GameTwoTone />
        <HomeTwoTone />
        <NotificationTwoTone />
        <ProfileTwoTone />
        <StarTwoTone />
        <StarHalfTwoTone />
      </div>
    </div>

    {/* VIP Badge */}
    <div className="flex gap-4">
      <VipBadge rank={1} />
      <VipBadge rank={6} />
      <VipBadge rank={11} />
      <VipBadge rank={99} />
    </div>

    <Toaster />
  </div>
);

export const Default = Template.bind({});
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
