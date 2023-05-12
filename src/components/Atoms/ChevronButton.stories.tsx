import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import ChevronButton from './ChevronButton';

import { ChevronButtonType } from '.';

export default {
  title: 'Atoms/ChevronButton',
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

const Template: StoryFn<typeof ChevronButton> = ({
  type,
  color,
  disabled,
  className,
  style,
}) => (
  <>
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
  </>
);

export const Default = Template.bind({});
