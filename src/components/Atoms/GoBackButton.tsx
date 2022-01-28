import { classnames } from '@/tailwindcss-classnames';
import React from 'react';

import ChevronLeftImg from './images/chevron-left.svg';

type Props = {
  className?: string;
  style?: React.CSSProperties;
  onGoBack?: (e: React.MouseEvent) => void | Promise<void>;
};

const GoBackButton: React.VFC<Props> = ({
  style,
  className = '',
  onGoBack,
}) => {
  return (
    <button
      aria-label="Go Back Button"
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
      {...(style && { style })}
      type="button"
      onClick={(e: React.MouseEvent): void => {
        onGoBack && onGoBack(e);
      }}
    >
      <img alt="Go Back Button" src={ChevronLeftImg} />
    </button>
  );
};

export default GoBackButton;
