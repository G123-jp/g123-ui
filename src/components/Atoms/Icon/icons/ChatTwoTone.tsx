import React from 'react';

import Icon, { IconProps } from '../G123Icon';
import GameSvg from '../svg-images/twotone/chat.svg';

const ChatTwoTone: React.VFC<IconProps> = (props) => {
  return <Icon IconSvg={GameSvg} {...props} />;
};

export default ChatTwoTone;
