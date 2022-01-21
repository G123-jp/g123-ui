import { classnames } from '@/tailwindcss-classnames';
import React from 'react';

import CloseImg from './images/close.svg';

type Props = {
  onClose: (e: React.MouseEvent) => void | Promise<void>;
};

const CloseButton: React.VFC<Props> = ({ onClose }) => {
  return (
    <button
      aria-label="Close Button"
      className={classnames(
        'cursor-pointer',
        'flex',
        'content-center',
        'items-center',
        'p-0',
        'border-0',
        'box-border',
        'w-6',
        'h-6',
      )}
      type="button"
      onClick={onClose}
    >
      <img alt="Close Button" src={CloseImg} />
    </button>
  );
};

export default CloseButton;
