import React, { Ref, forwardRef } from 'react';

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
  IconSvg: React.VFC<React.SVGProps<SVGElement>>;
};

const G123Icon = forwardRef(
  (
    {
      IconSvg,
      width,
      height,
      viewBox,
      style,
      containerStyle,
      className = '',
      containerClassName = '',
    }: InternalProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    return (
      <div
        ref={ref}
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
  },
);

export default G123Icon;
