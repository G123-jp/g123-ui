import React from 'react';

import Icon, { IconProps } from '../G123Icon';
import GameSvg from '../svg-images/twotone/earth.svg';

const EarthTwoTone: React.VFC<IconProps> = (props) => {
  return <Icon IconSvg={GameSvg} {...props} />;
};

export default EarthTwoTone;