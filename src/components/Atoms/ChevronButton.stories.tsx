import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import ChevronButton from './ChevronButton';

import { ChevronButtonType } from '.';

export default {
  title: 'Atoms/ChevronButton(deprecated)',
  component: ChevronButton,
  argTypes: {
    type: {
      options: Object.values(ChevronButtonType),
      control: 'select',
      defaultValue: ChevronButtonType.forward,
    },
    color: { control: 'color', defaultValue: '' },
    disabled: { control: 'boolean', defaultValue: false },
  },
} as Meta<typeof ChevronButton>;

// DEPRECATED: Akira: use <Button type={ButtonType.link} icon={Chevron(Down/Up/Left/Right)Outlined} /> instead
const Template: StoryFn<typeof ChevronButton> = ({
  type,
  color,
  disabled,
  className,
  style,
}) => (
  <div className="flex flex-col gap-4">
    <h2 className="rounded-md bg-gray-100 px-4 py-2 text-gray-400">
      {`DEPRECATED: use <Button /> with icon <Chevron(Down/Up/Left/Right)Outlined /> instead`}
    </h2>
    <div className="flex gap-2">
      <ChevronButton type={ChevronButtonType.up} />
      <ChevronButton className="text-primary" type={ChevronButtonType.right} />
      <ChevronButton className="text-secondary" type={ChevronButtonType.down} />
      <ChevronButton className="text-danger" type={ChevronButtonType.left} />
      <ChevronButton
        className={className ?? ''}
        color={color ?? ''}
        disabled={disabled ?? false}
        style={style ?? {}}
        type={type ?? ChevronButtonType.forward}
      />
    </div>
  </div>
);

export const Default = Template.bind({});
