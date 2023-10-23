import React from 'react';

import Icon, { IconProps } from '../G123Icon';
import SvgImage from '../svg-images/outlined/home.svg';

const HomeOutlined: React.VFC<IconProps> = (props) => {
  return <Icon IconSvg={SvgImage} {...props} />;
};

export default HomeOutlined;
