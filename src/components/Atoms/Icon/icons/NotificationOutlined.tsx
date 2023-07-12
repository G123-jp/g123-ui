import React from 'react';

import Icon, { IconProps } from '../G123Icon';
import NotificationSvg from '../svg-images/outlined/notification.svg';

const NotificationOutlined: React.VFC<IconProps> = (props) => {
  return <Icon IconSvg={NotificationSvg} {...props} />;
};

export default NotificationOutlined;
