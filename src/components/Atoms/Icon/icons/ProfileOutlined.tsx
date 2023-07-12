import React from 'react';

import Icon, { IconProps } from '../G123Icon';
import GameSvg from '../svg-images/outlined/profile.svg';

const ProfileOutlined: React.VFC<IconProps> = (props) => {
  return <Icon IconSvg={GameSvg} {...props} />;
};

export default ProfileOutlined;
