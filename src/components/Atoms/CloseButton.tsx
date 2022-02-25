import React from 'react';

import CloseSvg from './images/close.svg';

type Props = {
  className?: string;
  style?: React.CSSProperties;
  onClose: (e: React.MouseEvent) => void | Promise<void>;
};

const CloseButton: React.VFC<Props> = ({ style, className = '', onClose }) => {
  return (
    <button
      aria-label="Close Button"
      className={`cursor-pointer flex content-center items-center p-0 border-0 box-border w-6 h-6 ${className}`}
      {...(style && { style })}
      type="button"
      onClick={onClose}
    >
      <CloseSvg />
    </button>
  );
};

export default CloseButton;
