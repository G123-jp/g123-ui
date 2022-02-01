import React from 'react';

import LogoSvg from './images/G123_logo.svg';

type Props = {
  className?: string;
  style?: React.CSSProperties;
};

const Logo: React.VFC<Props> = ({ style, className = '' }) => {
  return (
    <LogoSvg
      className={className}
      height="14"
      style={{ ...style }}
      viewBox="0 0 68 24"
      width="42"
    />
  );
};

export default Logo;
