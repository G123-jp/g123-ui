import React from 'react';

import Icon, { IconProps } from '../G123Icon';
import SvgImage from '../svg-images/twotone/link.svg';

const LinkTwoTone: React.VFC<IconProps> = (props) => {
  return <Icon IconSvg={SvgImage} {...props} />;
};

export default LinkTwoTone;
