import React from 'react';

import Icon, { IconProps } from '../G123Icon';
import GameSvg from '../svg-images/filled/chat.svg';

const ChatFilled: React.VFC<IconProps> = (props) => {
  return <Icon IconSvg={GameSvg} {...props} />;
};

export default ChatFilled;
