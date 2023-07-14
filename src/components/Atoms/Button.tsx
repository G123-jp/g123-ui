/* eslint-disable react/button-has-type */
import classnames from 'classnames';
import React, { ReactNode, useCallback, useMemo } from 'react';

enum HtmlType {
  button = 'button',
  submit = 'submit',
  reset = 'reset',
}

enum Size {
  // Akira: for 1.x, Backward Compatibility
  large = 'large',
  middle = 'middle',
  small = 'small',

  // Akira: 2.x
  default = 'default', // default equals to middle
}

enum Type {
  // Akira: for 1.x, Backward Compatibility
  primary = 'primary',
  secondary = 'secondary',
  inactive = 'inactive', // 1.x: maybe DEPRECATED in the future
  danger = 'danger', // 2.x: TODO in Design System
  text = 'text',

  // Akira: 2.x
  default = 'default', // default equals to secondary
  highlight = 'highlight',
  stroke = 'stroke',
  link = 'link',
}

type Props = {
  type?: Type;
  size?: Size;
  disabled?: boolean;
  block?: boolean;
  htmlType?: HtmlType;
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (() => void | Promise<void>) | undefined;
};

const Button: React.VFC<Props> = ({
  type = Type.default,
  size = Size.default,
  disabled = false,
  block = false,
  htmlType = HtmlType.button,
  // icon,
  children,
  className = '',
  style,
  onClick,
}) => {
  const handleClick = useCallback(() => {
    onClick && onClick();
  }, [onClick]);

  // const buildColorClasses = useCallback((): string => {
  //   switch (type) {
  //     case Type.primary:
  //       return 'text-font-overlay bg-brand-tertiary-base border-transparent';
  //     case Type.inactive: // 1.x: maybe DEPRECATED in the future
  //       return 'text-zinc-500 bg-zinc-100';
  //     case Type.danger: // 2.x: TODO in Design System
  //       return 'text-white bg-danger';
  //     case Type.text:
  //       return 'text-font-primary bg-transparent border-transparent';
  //     case Type.highlight:
  //       return 'text-font-primary bg-brand-primary-base border-transparent';
  //     case Type.stroke:
  //       return 'text-font-primary bg-transparent border-2 border-solid border-brand-tertiary-base';
  //     case Type.link:
  //       return 'text-link-default bg-transparent border-transparent';

  //     // Akira: default equals to secondary
  //     case Type.secondary:
  //     case Type.default:
  //       return 'text-font-primary bg-brand-tertiary-container border-transparent';
  //     default:
  //       return 'text-font-primary bg-brand-tertiary-container border-transparent';
  //   }
  // }, [type]);

  // const buildBlockClasses = useCallback((): string => {
  //   return block ? 'w-full' : '';
  // }, [block]);

  // const buildSizeClasses = useCallback((): string => {
  //   return `
  //   ${
  //     {
  //       [Size.small]: 'h-6 py-1.5',
  //       [Size.middle]: 'h-8 py-2',
  //       [Size.default]: 'h-8 py-2',
  //       [Size.large]: 'h-12 py-3',
  //     }[size]
  //   }
  //   ${
  //     type === Type.text
  //       ? 'px-0'
  //       : {
  //           [Size.small]: 'px-3',
  //           [Size.middle]: 'px-5',
  //           [Size.default]: 'px-5',
  //           [Size.large]: 'px-7',
  //         }[size]
  //   }
  //   `;
  // }, [size, type]);

  // const buildFontClasses = useCallback((): string => {
  //   switch (type) {
  //     case Type.text:
  //     case Type.link:
  //       return 'text-link-default bg-transparent border-transparent';

  //     case Type.primary:
  //     case Type.secondary:
  //     case Type.inactive: // 1.x: maybe DEPRECATED in the future
  //     case Type.danger: // 2.x: TODO in Design System
  //     case Type.highlight:
  //     case Type.stroke:
  //     case Type.default:
  //     default:
  //       return 'text-font-primary bg-brand-tertiary-container border-transparent';
  //   }
  // }, [type]);

  // const buildUxClasses = useCallback((): string => {
  //   // TODO: some visual feedback for disabled buttons?
  //   return disabled ? 'cursor-not-allowed' : 'cursor-pointer';
  // }, [disabled]);

  const isInline = useMemo(
    () => type === Type.link || type === Type.text,
    [type],
  );

  return (
    <button
      className={classnames(
        'inline-flex items-center justify-center',
        // Color
        {
          // normal
          'border-transparent': true,
          'bg-brand-tertiary-base text-font-overlay': type === Type.primary,
          'bg-zinc-100 text-zinc-500': type === Type.inactive, // 1.x: maybe DEPRECATED in the future
          'bg-danger text-white': type === Type.danger, // 2.x: TODO in Design System
          'bg-transparent text-font-primary': type === Type.text,
          'bg-brand-primary-base text-font-primary': type === Type.highlight,
          'border-2 border-solid !border-brand-tertiary-base bg-transparent text-font-primary':
            type === Type.stroke,
          'bg-transparent text-link-default': type === Type.link,
          'bg-brand-tertiary-container text-font-primary':
            type === Type.secondary || type === Type.default, // Akira: default equals to secondary

          // hover
          'hover:bg-font-secondary': type === Type.primary,
          // '': type === Type.danger, // 2.x: TODO in Design System
          'hover:bg-brand-primary-container': type === Type.highlight,
          'hover:text-brand-secondary-secondary': type === Type.link,
          'hover:bg-surface-tertiary':
            type === Type.text ||
            type === Type.stroke ||
            type === Type.secondary ||
            type === Type.default, // Akira: default equals to secondary

          // active
          // FIXME: Akira: Missing this color variable
          'active:bg-[#595959]': type === Type.primary,
          // '': type === Type.danger, // 2.x: TODO in Design System
          'active:bg-brand-primary-secondary': type === Type.highlight,
          'active:bg-font-disabled':
            type === Type.secondary || type === Type.default, // Akira: default equals to secondary

          // disabled
          '!text-font-disabled': disabled,
        },
        // Size
        {
          'w-fit rounded-full px-sm': !isInline,
          'h-6 min-w-[4.25rem]': size === Size.small && !isInline,
          'h-10 min-w-[5rem]':
            (size === Size.middle || size === Size.default) && !isInline,
          'h-16 min-w-[6.25rem]': size === Size.large && !isInline,

          // inline: text & link
          'h-fit min-w-0': isInline,
          'rounded-sm px-xs py-xxs': size === Size.small && isInline,
          'rounded-sm p-xs':
            (size === Size.middle || size === Size.default) && isInline,
          'rounded px-sm py-xs': size === Size.large && isInline,
        },
        // Font
        {
          'text-center text-xs font-semibold': true,
          '!text-sm':
            isInline && (size === Size.middle || size === Size.default),
          '!text-base': isInline && size === Size.large,
        },
        // Block
        {
          '!w-full': block,
        },
        className,
      )}
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
