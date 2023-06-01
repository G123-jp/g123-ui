import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { twMerge } from 'tailwind-merge';

export type IconProps = {
  className?: string;
  style?: React.CSSProperties;
};

type InternalProps = IconProps & {
  IconSvg: React.VFC<React.SVGProps<SVGSVGElement>>;
};

const Icon: React.VFC<InternalProps> = ({ IconSvg, style, className = '' }) => {
  return (
    <IconSvg
      className={twMerge('fill-none stroke-current stroke-2', className)}
      {...(style && { style })}
    />
  );
};

export default Icon;
