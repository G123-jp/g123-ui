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
} from '@/components/Atoms';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

export default {
  title: 'Summary',
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = () => (
  <div className="flex flex-col gap-4">
    {/* Avatar & Logo */}
    <div className="flex gap-2 items-center">
      <Logo />
      <Avatar />
    </div>

    {/* Button */}
    <div className="flex flex-col gap-2">
      {/* Button Type */}
      <div className="flex gap-2">
        <Button>Default</Button>
        <Button type={ButtonType.primary}>Primary</Button>
        <Button type={ButtonType.danger}>Danger</Button>
        <Button type={ButtonType.secondary}>Secondary</Button>
        <Button type={ButtonType.inactive}>Inactive</Button>
        <Button type={ButtonType.text}>Text</Button>
      </div>
      {/* Button Size */}
      <div className="flex gap-2 items-center">
        <Button size={ButtonSize.small}>Small</Button>
        <Button size={ButtonSize.middle}>Middle</Button>
        <Button size={ButtonSize.large}>Large</Button>
        <Button block>Block</Button>
      </div>
      {/* UX */}
      <div className="flex gap-2 items-center">
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
      <Badge offsetRight={110} offsetTop={25} show>
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
    <div className="flex gap-2">
      <Switch
        checked
        onSwitch={(checked: boolean): void => {
          console.info(`G123 Switch ${checked}`);
        }}
      />
      <Switch
        checked={false}
        onSwitch={(checked: boolean): void => {
          console.info(`G123 Switch ${checked}`);
        }}
      />
    </div>
  </div>
);

export const Default = Template.bind({});
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
