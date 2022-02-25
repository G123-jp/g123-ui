import { isValidHexColor, isValidHtmlColor } from '@/utils';
import React, { useCallback } from 'react';

import ChevronDownSvg from './images/chevron-down.svg';
import ChevronLeftSvg from './images/chevron-left.svg';
import ChevronRightSvg from './images/chevron-right.svg';
import ChevronUpSvg from './images/chevron-up.svg';

enum Type {
  left = 'left',
  right = 'right',
  up = 'up',
  down = 'down',
  back = 'back',
  forward = 'forward',
}

const IconMap = {
  [Type.left]: ChevronLeftSvg,
  [Type.right]: ChevronRightSvg,
  [Type.up]: ChevronUpSvg,
  [Type.down]: ChevronDownSvg,
  [Type.back]: ChevronLeftSvg,
  [Type.forward]: ChevronRightSvg,
};

type Props = {
  type: Type;
  color?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e?: React.MouseEvent) => void | Promise<void>;
};

const ChevronButton: React.VFC<Props> = ({
  type,
  color,
  disabled = false,
  style,
  className = '',
  onClick,
}) => {
  const handleClick = useCallback(() => {
    onClick && onClick();
  }, [onClick]);

  const ChevronComponent = IconMap[type];

  return (
    <button
      aria-label={`chevron-${type}-button`}
      className={`flex content-center items-center p-0 border-0 box-border w-6 h-6 ${
        disabled ? 'cursor-not-allowed select-none' : 'cursor-pointer'
      } ${className}`}
      type="button"
      {...(style && { style })}
      {...(!disabled && onClick && { onClick: handleClick })}
    >
      {/* <img alt={`chevron-${type}-button`} src={IconMap[type]} /> */}
      <ChevronComponent
        style={{
          color:
            isValidHexColor(color) || isValidHtmlColor(color)
              ? color
              : 'inherit',
        }}
      />
    </button>
  );
};

export { Type as ChevronButtonType };
export default ChevronButton;
