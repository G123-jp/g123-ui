import React from 'react';

import Icon, { IconProps } from '../G123Icon';
import HomeSvg from '../svg-images/outlined/home.svg';

const HomeOutlined: React.VFC<IconProps> = (props) => {
  return <Icon IconSvg={HomeSvg} {...props} />;
};

export default HomeOutlined;
