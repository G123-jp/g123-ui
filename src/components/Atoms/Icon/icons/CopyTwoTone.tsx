import React, { Ref, forwardRef } from 'react';

import Icon, { IconProps } from '../G123Icon';
import SvgImage from '../svg-images/twotone/copy.svg';

const CopyTwoTone = forwardRef((props: IconProps, ref: Ref<HTMLDivElement>) => {
  return <Icon ref={ref} IconSvg={SvgImage} {...props} />;
});

export default CopyTwoTone;
