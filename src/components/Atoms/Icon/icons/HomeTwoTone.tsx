import React from 'react';

import Icon, { IconProps } from '../G123Icon';
import HomeSvg from '../svg-images/twotone/home.svg';

const HomeTwoTone: React.VFC<IconProps> = (props) => {
  return <Icon IconSvg={HomeSvg} {...props} />;
};

export default HomeTwoTone;
