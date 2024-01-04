import React, { Ref, forwardRef } from 'react';

import Icon, { IconProps } from '../G123Icon';
import SvgImage from '../svg-images/outlined/check.svg';

const CheckOutlined = forwardRef(
  (props: IconProps, ref: Ref<HTMLDivElement>) => {
    return <Icon ref={ref} IconSvg={SvgImage} {...props} />;
  },
);

export default CheckOutlined;
