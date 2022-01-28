import { classnames } from '@/tailwindcss-classnames';
import React from 'react';

import ChevronRightImg from './images/chevron-right.svg';

type Props = {
  className?: string;
  style?: React.CSSProperties;
  onGoForward?: (e: React.MouseEvent) => void | Promise<void>;
};

const GoForwardButton: React.VFC<Props> = ({
  style,
  className = '',
  onGoForward,
}) => {
  return (
    <button
      aria-label="Go Forward Button"
      className={`${classnames(
        'cursor-pointer',
        'flex',
        'content-center',
        'items-center',
        'p-0',
        'border-0',
        'box-border',
        'w-6',
        'h-6',
      )} ${className}`}
      type="button"
      {...(style && { style })}
      onClick={(e: React.MouseEvent): void => {
        onGoForward && onGoForward(e);
      }}
    >
      <img alt="Go Forward Button" src={ChevronRightImg} />
    </button>
  );
};

export default GoForwardButton;
