import React from 'react';

import Icon, { IconProps } from './Icon';
import NotificationSvg from './images/notification.svg';

const NotificationIcon: React.VFC<IconProps> = (props) => {
  return <Icon IconSvg={NotificationSvg} {...props} />;
};

export default NotificationIcon;
