import React from 'react';

import Icon, { IconProps } from './Icon';

import HomeSvg from './images/home.svg';

const HomeIcon: React.VFC<IconProps> = (props) => {
  return <Icon IconSvg={HomeSvg} {...props} />;
};

export default HomeIcon;
