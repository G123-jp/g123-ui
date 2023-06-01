import React from 'react';

import Icon, { IconProps } from './Icon';
import GameSvg from './images/game.svg';

const GameIcon: React.VFC<IconProps> = (props) => {
  return <Icon IconSvg={GameSvg} {...props} />;
};

export default GameIcon;
