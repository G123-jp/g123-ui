import React from 'react';

import LogoSvg from './images/G123_logo.svg';

type Props = {
  className?: string;
  style?: React.CSSProperties;
};

const Logo: React.VFC<Props> = ({ style, className = '' }) => {
  return (
    <LogoSvg
      className={className || 'fill-current'}
      height="14"
      viewBox="0 0 68 24"
      width="42"
      {...(style && { style })}
    />
  );
};

export default Logo;
