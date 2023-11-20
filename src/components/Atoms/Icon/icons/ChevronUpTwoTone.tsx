import React from 'react';

import Icon, { IconProps } from '../G123Icon';
import SvgImage from '../svg-images/twotone/chevron-up.svg';

const ChevronUpTwoTone: React.VFC<IconProps> = (props) => {
  return <Icon IconSvg={SvgImage} {...props} />;
};

export default ChevronUpTwoTone;
