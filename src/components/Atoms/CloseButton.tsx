import { classnames } from '@/tailwindcss-classnames';
import React from 'react';

import CloseImg from './images/inner-close.png';

type Props = {
  onClose: () => void | Promise<void>;
};

const CloseButton: React.FC<Props> = ({ onClose }) => {
  return (
    <img
      alt=""
      aria-hidden="true"
      className={classnames('cursor-pointer', 'block')}
      src={CloseImg}
      style={{ width: '12px', height: '12px' }}
      onClick={onClose}
    />
  );
};

export default CloseButton;
