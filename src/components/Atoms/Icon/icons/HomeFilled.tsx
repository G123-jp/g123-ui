import React from 'react';

import Icon, { IconProps } from '../G123Icon';
import HomeSvg from '../svg-images/filled/home.svg';

const HomeFilled: React.VFC<IconProps> = (props) => {
  return <Icon IconSvg={HomeSvg} {...props} />;
};

export default HomeFilled;
