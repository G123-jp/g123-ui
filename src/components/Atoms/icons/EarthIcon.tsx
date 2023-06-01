import React from 'react';

import Icon, { IconProps } from './Icon';
import EarthSvg from './images/earth-east.svg';

const EarthIcon: React.VFC<IconProps> = (props) => {
  return <Icon IconSvg={EarthSvg} {...props} />;
};

export default EarthIcon;
