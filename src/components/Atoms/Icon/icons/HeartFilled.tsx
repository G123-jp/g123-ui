import React from 'react';

import Icon, { IconProps } from '../G123Icon';
import SvgImage from '../svg-images/filled/heart.svg';

const HeartFilled: React.VFC<IconProps> = (props) => {
  return <Icon IconSvg={SvgImage} {...props} />;
};

export default HeartFilled;