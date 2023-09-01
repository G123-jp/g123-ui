import React from 'react';

import Icon, { IconProps } from '../G123Icon';
import PaymentSvg from '../svg-images/outlined/payment.svg';

const PaymentOutlined: React.VFC<IconProps> = (props) => {
  return <Icon IconSvg={PaymentSvg} {...props} />;
};

export default PaymentOutlined;
