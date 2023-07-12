import React from 'react';

import Icon, { IconProps } from '../G123Icon';
import GameSvg from '../svg-images/twotone/profile.svg';

const ProfileTwoTone: React.VFC<IconProps> = (props) => {
  return <Icon IconSvg={GameSvg} {...props} />;
};

export default ProfileTwoTone;
