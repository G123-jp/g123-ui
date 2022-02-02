import React from 'react';

import AvatarNormalSvg from './images/avatar_normal.svg';

type Props = {
  isGuest?: boolean;
};

const Avatar: React.VFC<Props> = () => {
  return <AvatarNormalSvg />;
};

export default Avatar;
