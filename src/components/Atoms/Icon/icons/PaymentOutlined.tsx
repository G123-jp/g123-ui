import React from 'react';

import Icon, { IconProps } from '../G123Icon';
import SvgImage from '../svg-images/outlined/payment.svg';

const PaymentOutlined: React.VFC<IconProps> = (props) => {
  return <Icon IconSvg={SvgImage} {...props} />;
};

export default PaymentOutlined;
