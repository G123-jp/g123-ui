import React, { Ref, forwardRef } from 'react';

import Icon, { IconProps } from '../G123Icon';
import SvgImage from '../svg-images/outlined/copy.svg';

const CopyOutlined = forwardRef(
  (props: IconProps, ref: Ref<HTMLDivElement>) => {
    return <Icon ref={ref} IconSvg={SvgImage} {...props} />;
  },
);

export default CopyOutlined;
