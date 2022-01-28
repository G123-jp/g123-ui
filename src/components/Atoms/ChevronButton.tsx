import { classnames } from '@/tailwindcss-classnames';
import React, { useCallback } from 'react';

import ChevronDownImg from './images/chevron-down.svg';
import ChevronLeftImg from './images/chevron-left.svg';
import ChevronRightImg from './images/chevron-right.svg';
import ChevronUpImg from './images/chevron-up.svg';

enum Type {
  left = 'left',
  right = 'right',
  up = 'up',
  down = 'down',
  back = 'back',
  forward = 'forward',
}

const IconMap = {
  [Type.left]: ChevronLeftImg,
  [Type.right]: ChevronRightImg,
  [Type.up]: ChevronUpImg,
  [Type.down]: ChevronDownImg,
  [Type.back]: ChevronLeftImg,
  [Type.forward]: ChevronRightImg,
};

type Props = {
  type: Type;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e?: React.MouseEvent) => void | Promise<void>;
};

const ChevronButton: React.VFC<Props> = ({
  type,
  disabled = false,
  style,
  className = '',
  onClick,
}) => {
  const handleClick = useCallback(() => {
    onClick && onClick();
  }, [onClick]);

  return (
    <button
      aria-label={`chevron-${type}-button`}
      className={`${classnames(
        'flex',
        'content-center',
        'items-center',
        'p-0',
        'border-0',
        'box-border',
        'w-6',
        'h-6',
        {
          'cursor-pointer': !disabled,
          'cursor-not-allowed': disabled,
          'select-none': disabled,
        },
      )} ${className}`}
      type="button"
      {...(style && { style })}
      {...(!disabled && onClick && { onClick: handleClick })}
    >
      <img alt={`chevron-${type}-button`} src={IconMap[type]} />
    </button>
  );
};

export { Type as ChevronButtonType };
export default ChevronButton;
