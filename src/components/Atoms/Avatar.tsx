import { isValidCssSize } from '@/utils';
import React from 'react';

import AvatarNormalSvg from './images/avatar_normal.svg';

type Props = {
  isGuest?: boolean;
  size?: number | string;
};

const Avatar: React.VFC<Props> = ({ size = 48 }) => {
  const validSize = isValidCssSize(size) ? size : 48;

  return <AvatarNormalSvg height={validSize} width={validSize} />;
};

export default Avatar;
