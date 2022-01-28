import React from 'react';

import LogoImg from './images/G123_logo.svg';

type Props = {
  className?: string;
  style?: React.CSSProperties;
};

const Logo: React.VFC<Props> = ({ style, className = '' }) => {
  return (
    <img
      alt=""
      className={className}
      src={LogoImg}
      style={{ width: '42px', height: '14px', ...style }}
    />
  );
};

export default Logo;
