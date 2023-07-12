import React from 'react';

import Icon, { IconProps } from '../G123Icon';
import NotificationSvg from '../svg-images/twotone/notification.svg';

const NotificationTwoTone: React.VFC<IconProps> = (props) => {
  return <Icon IconSvg={NotificationSvg} {...props} />;
};

export default NotificationTwoTone;
