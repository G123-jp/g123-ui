import React from 'react';

import Icon, { IconProps } from './Icon';
import ChatBubbleSvg from './images/chat-bubble.svg';

const ChatBubbleIcon: React.VFC<IconProps> = (props) => {
  return <Icon IconSvg={ChatBubbleSvg} {...props} />;
};

export default ChatBubbleIcon;
