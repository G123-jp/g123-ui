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
      className={`box-border flex h-6 w-6 cursor-pointer content-center items-center border-0 p-0 ${className}`}
      {...(style && { style })}
      type="button"
      onClick={onClose}
    >
      <CloseSvg />
    </button>
  );
};

export default CloseButton;
