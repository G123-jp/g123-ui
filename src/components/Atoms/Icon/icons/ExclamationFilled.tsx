import React from 'react';

import Icon, { IconProps } from '../G123Icon';
import SvgImage from '../svg-images/filled/exclamation.svg';

const ExclamationFilled: React.VFC<IconProps> = (props) => {
  return <Icon IconSvg={SvgImage} {...props} />;
};

export default ExclamationFilled;
