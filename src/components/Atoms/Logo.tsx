import React, { useMemo } from 'react';

import LogoSvg from './images/G123_logo.svg';

type Props = {
  className?: string;
  style?: React.CSSProperties;
};

const regexForTailwindWidth =
  /\b(w-(\d{1,2}|\d\.\d|\d{1,2}\/\d{1,2}|auto|px|full|screen|min|max|fit))\b/g;

const Logo: React.VFC<Props> = ({ style, className = '' }) => {
  const hasCustomizedWidth = useMemo(() => {
    const hasTailwindWidth = className && regexForTailwindWidth.test(className);
    const hasStyleWidth = style?.width;
    return hasTailwindWidth || hasStyleWidth;
  }, [className, style?.width]);

  return (
    <LogoSvg
      className={className || 'fill-current'}
      {...(!hasCustomizedWidth && {
        height: '14',
        width: '42',
      })}
      viewBox="0 0 68 24"
      {...(style && { style })}
    />
  );
};

export default Logo;
