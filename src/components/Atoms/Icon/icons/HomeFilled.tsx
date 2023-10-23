import React from 'react';

import Icon, { IconProps } from '../G123Icon';
import SvgImage from '../svg-images/filled/home.svg';

const HomeFilled: React.VFC<IconProps> = (props) => {
  return <Icon IconSvg={SvgImage} {...props} />;
};

export default HomeFilled;
