import React from 'react';

import Icon, { IconProps } from '../G123Icon';
import GameSvg from '../svg-images/outlined/earth.svg';

const EarchOutlined: React.VFC<IconProps> = (props) => {
  return <Icon IconSvg={GameSvg} {...props} />;
};

export default EarchOutlined;
