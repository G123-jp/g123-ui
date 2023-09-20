import React from 'react';

export type IconProps = {
  className?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
  viewBox?: string;
};

type InternalProps = IconProps & {
  IconSvg: React.VFC<React.SVGProps<SVGSVGElement>>;
};

const G123Icon: React.VFC<InternalProps> = ({
  IconSvg,
  width,
  height,
  viewBox,
  style,
  className = '',
}) => {
  return (
    <IconSvg
      {...(width && { width })}
      {...(height && { height })}
      {...(viewBox && { viewBox })}
      {...(className && { className })}
      {...(style && { style })}
    />
  );
};

export default G123Icon;
