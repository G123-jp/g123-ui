import React from 'react';

export type IconProps = {
  className?: string;
  containerClassName?: string;
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
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
  containerStyle,
  className = '',
  containerClassName = '',
}) => {
  return (
    <div
      {...(containerClassName && { className: containerClassName })}
      {...(containerStyle && { style: containerStyle })}
    >
      <IconSvg
        {...(width && { width })}
        {...(height && { height })}
        {...(viewBox && { viewBox })}
        {...(className && { className })}
        {...(style && { style })}
      />
    </div>
  );
};

export default G123Icon;
