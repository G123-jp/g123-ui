/* eslint-disable react/button-has-type */
import { classnames } from '@/tailwindcss-classnames';
import React, { useCallback } from 'react';

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
  danger = 'danger',
  text = 'text',
}

type Props = {
  size?: Size;
  disabled?: boolean;
  type?: Type;
  block?: boolean;
  htmlType?: HtmlType;
  onClick?: (() => void | Promise<void>) | undefined;
};

const Button: React.FC<Props> = ({
  type = Type.default,
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

  return (
    <button
      className={classnames('rounded-full', 'text-center', 'font-normal', {
        // Color
        'text-white': type === Type.default,
        'bg-primary': type === Type.default,
        'bg-transparent': type === Type.text,

        'bg-highlight': type === Type.primary,
        'text-primary': type === Type.primary || type === Type.text,

        'border-transparent': type === Type.default || type === Type.primary,

        // Size
        'w-full': block,
        'h-6': size === Size.small,
        'py-1.5': size === Size.small,
        'h-8': size === Size.middle,
        'py-2': size === Size.middle,
        'px-0': type === Type.text,
        'px-3': type !== Type.text && size === Size.small,
        'px-5': type !== Type.text && size === Size.middle,

        // Font
        'text-xxs': size === Size.small,
        'leading-3': size === Size.small,
        'text-xs': size === Size.middle,
        'leading-4': size === Size.middle,

        // UX
        'cursor-pointer': !disabled,
        'cursor-not-allowed': disabled,
      })}
      disabled={disabled}
      type={htmlType}
      {...(!disabled && onClick && { onClick: handleClick })}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: Type.default,
  size: Size.middle,
  disabled: false,
  block: false,
  htmlType: HtmlType.button,
  onClick: undefined,
};

export { Type as ButtonType, Size as ButtonSize };
export default Button;
