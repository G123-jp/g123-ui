import React from 'react';

import Icon, { IconProps } from '../G123Icon';
import GameSvg from '../svg-images/outlined/earth.svg';

const EarthOutlined: React.VFC<IconProps> = (props) => {
  return <Icon IconSvg={GameSvg} {...props} />;
};

export default EarthOutlined;
