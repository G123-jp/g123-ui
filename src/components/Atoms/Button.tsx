/* eslint-disable react/button-has-type */
import React, { ReactNode, useCallback } from 'react';

enum HtmlType {
  button = 'button',
  submit = 'submit',
  reset = 'reset',
}

enum Size {
  large = 'large',
  middle = 'middle',
  small = 'small',
}

enum Type {
  default = 'default',
  primary = 'primary',
  secondary = 'secondary',
  danger = 'danger',
  text = 'text',
}

type Props = {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  size?: Size;
  disabled?: boolean;
  type?: Type;
  block?: boolean;
  htmlType?: HtmlType;
  onClick?: (() => void | Promise<void>) | undefined;
};

const Button: React.VFC<Props> = ({
  type = Type.default,
  style,
  className = '',
  size = Size.middle,
  disabled = false,
  block = false,
  htmlType = HtmlType.button,
  onClick,
  children,
}) => {
  const handleClick = useCallback(() => {
    onClick && onClick();
  }, [onClick]);

  const buildColorClasses = useCallback((): string => {
    switch (type) {
      case Type.primary:
        return 'text-primary bg-highlight border-transparent';
      case Type.secondary:
        return 'text-primary bg-secondary';
      case Type.danger:
        return 'text-white bg-danger';
      case Type.text:
        return 'text-primary bg-transparent';
      case Type.default:
        return 'text-white bg-primary border-transparent';
      default:
        return 'text-white bg-primary border-transparent';
    }
  }, [type]);

  const buildBlockClasses = useCallback((): string => {
    return block ? 'w-full' : '';
  }, [block]);

  const buildSizeClasses = useCallback((): string => {
    return `
    ${
      {
        [Size.small]: 'h-6 py-1.5',
        [Size.middle]: 'h-8 py-2',
        [Size.large]: 'h-12 py-3',
      }[size]
    }
    ${
      type === Type.text
        ? 'px-0'
        : { [Size.small]: 'px-3', [Size.middle]: 'px-5', [Size.large]: 'px-7' }[
            size
          ]
    }
    `;
  }, [size, type]);

  const buildFontClasses = useCallback((): string => {
    switch (size) {
      case Size.small:
        return 'text-xxs leading-3';
      case Size.middle:
        return 'text-xs leading-4';
      default:
        return '';
    }
  }, [size]);

  const buildUxClasses = useCallback((): string => {
    return disabled ? 'cursor-not-allowed' : 'cursor-pointer';
  }, [disabled]);

  return (
    <button
      className={`rounded-full text-center font-normal
        ${buildColorClasses()}
        ${buildBlockClasses()}
        ${buildSizeClasses()}
        ${buildFontClasses()}
        ${buildUxClasses()}
        ${className}
      `}
      disabled={disabled}
      type={htmlType}
      {...(!disabled && onClick && { onClick: handleClick })}
      {...(style && { style })}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: Type.default,
  style: undefined,
  className: '',
  size: Size.middle,
  disabled: false,
  block: false,
  htmlType: HtmlType.button,
  onClick: undefined,
};

export { Type as ButtonType, Size as ButtonSize, HtmlType as ButtonHtmlType };
export default Button;
