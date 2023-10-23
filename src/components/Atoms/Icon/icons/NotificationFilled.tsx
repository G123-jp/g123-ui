import React from 'react';

import Icon, { IconProps } from '../G123Icon';
import SvgImage from '../svg-images/filled/notification.svg';

const NotificationFilled: React.VFC<IconProps> = (props) => {
  return <Icon IconSvg={SvgImage} {...props} />;
};

export default NotificationFilled;
