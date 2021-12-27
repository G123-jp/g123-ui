import React from 'react';

import AvatarNormalImg from './images/avatar_normal.svg';

type Props = {
  isGuest?: boolean;
};

const Avatar: React.FC<Props> = () => {
  return <img alt="" src={AvatarNormalImg} />;
};

export default Avatar;
