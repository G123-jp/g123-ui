import React from 'react';

import Icon, { IconProps } from '../G123Icon';
import NotificationSvg from '../svg-images/filled/notification.svg';

const NotificationFilled: React.VFC<IconProps> = (props) => {
  return <Icon IconSvg={NotificationSvg} {...props} />;
};

export default NotificationFilled;
