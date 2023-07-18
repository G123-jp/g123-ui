import React from 'react';

import AvatarColorfulSmallSvg from './images/avatar-colorful-small.svg';
import AvatarColorfulSvg from './images/avatar-colorful.svg';
import AvatarCsSmallSvg from './images/avatar-cs-small.svg';
import AvatarCsSvg from './images/avatar-cs.svg';
import AvatarDefaultSmallSvg from './images/avatar-default-small.svg';
import AvatarDefaultSvg from './images/avatar-default.svg';

type Props = {
  type?: 'default' | 'colorful' | 'cs';
  size?: 'default' | 'small';
};

const Avatar: React.VFC<Props> = ({ type = 'default', size = 'default' }) => {
  if (type === 'colorful') {
    return size === 'small' ? (
      <AvatarColorfulSmallSvg />
    ) : (
      <AvatarColorfulSvg />
    );
  }

  if (type === 'cs') {
    return size === 'small' ? <AvatarCsSmallSvg /> : <AvatarCsSvg />;
  }

  return size === 'small' ? <AvatarDefaultSmallSvg /> : <AvatarDefaultSvg />;
};

export default Avatar;
