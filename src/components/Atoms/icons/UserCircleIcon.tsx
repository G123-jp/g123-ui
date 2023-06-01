import React from 'react';

import Icon, { IconProps } from './Icon';
import UserCircleSvg from './images/user-circle.svg';

const UserCircleIcon: React.VFC<IconProps> = (props) => {
  return <Icon IconSvg={UserCircleSvg} {...props} />;
};

export default UserCircleIcon;
