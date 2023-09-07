/* eslint-disable react/button-has-type */
import classnames from 'classnames';
import React, { ReactNode, useCallback, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

enum HtmlType {
  button = 'button',
  submit = 'submit',
  reset = 'reset',
}

enum Size {
  // Akira: for v1.x, Backward Compatibility
  large = 'large',
  middle = 'middle',
  small = 'small',

  // Akira: v2.x
  default = 'default', // default equals to middle
}

enum Type {
  // Akira: for v1.x, Backward Compatibility
  primary = 'primary',
  secondary = 'secondary',
  inactive = 'inactive', // v1.x: maybe DEPRECATED in the future
  danger = 'danger', // v2.x: TODO in Design System
  text = 'text',

  // Akira: v2.x
  default = 'default', // default equals to secondary
  highlight = 'highlight',
  stroke = 'stroke',
  link = 'link',
}

type MergedHTMLAttributes = Omit<
  React.HTMLAttributes<HTMLElement> &
    React.ButtonHTMLAttributes<HTMLElement> &
    React.AnchorHTMLAttributes<HTMLElement>,
  'type'
>;

type Props = {
  type?: Type;
  size?: Size;
  disabled?: boolean;
  block?: boolean;
  htmlType?: HtmlType; // React.ButtonHTMLAttributes<HTMLButtonElement>.type
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
} & MergedHTMLAttributes;

const Button: React.VFC<Props> = ({
  type = Type.default,
  size = Size.default,
  disabled = false,
  block = false,
  htmlType = HtmlType.button,
  icon,
  children,
  className = '',
  style,
  onClick,
  ...props
}) => {
  const isInline = useMemo(
    () => type === Type.link || type === Type.text,
    [type],
  );

  const isOnlyIcon = useMemo(() => !children && !!icon, [children, icon]);

  const isWithIcon = useMemo(() => !!children && !!icon, [children, icon]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick && onClick(e);
    },
    [onClick],
  );

  return (
    <button
      {...props}
      className={twMerge(
        classnames(
          'inline-flex items-center justify-center gap-x-1',
          // Color
          {
            // normal
            'border-transparent': true,
            'bg-brand-tertiary-base text-font-overlay': type === Type.primary,
            'bg-zinc-100 text-zinc-500': type === Type.inactive, // v1.x: maybe DEPRECATED in the future
            'bg-danger text-white': type === Type.danger, // v2.x: TODO in Design System
            'bg-transparent text-font-primary': type === Type.text,
            'bg-brand-primary-base text-font-primary': type === Type.highlight,
            'border-2 border-solid border-brand-tertiary-base bg-transparent text-font-primary':
              type === Type.stroke,
            'bg-transparent text-link-default': type === Type.link,
            'bg-brand-tertiary-container text-font-primary':
              type === Type.secondary || type === Type.default, // Akira: default equals to secondary

            // hover
            'hover:bg-font-secondary': type === Type.primary,
            // '': type === Type.danger, // v2.x: TODO in Design System
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
            // '': type === Type.danger, // v2.x: TODO in Design System
            'active:bg-brand-primary-secondary': type === Type.highlight,
            'active:bg-font-disabled':
              type === Type.secondary || type === Type.default, // Akira: default equals to secondary

            // disabled
            '!text-font-disabled': disabled,
          },

          // Size
          {
            // basic & with icon
            'w-fit rounded-full px-sm': !isInline && !isOnlyIcon,
            'h-6 min-w-[4.25rem] gap-x-0':
              size === Size.small && !isInline && !isOnlyIcon,
            'h-10 min-w-[5rem]':
              (size === Size.middle || size === Size.default) &&
              !isInline &&
              !isOnlyIcon,
            'h-16 min-w-[6.25rem]':
              size === Size.large && !isInline && !isOnlyIcon,

            // inline: text & link
            'h-fit w-fit': isInline,
            'rounded-sm px-xs py-xxs': size === Size.small && isInline,
            'rounded-sm p-xs':
              (size === Size.middle || size === Size.default) && isInline,
            'rounded px-sm py-xs': size === Size.large && isInline,

            // icon only
            'rounded-full': isOnlyIcon,
            // '!p-xxs': size === Size.small && isOnlyIcon,
            '!p-xs':
              (size === Size.middle || size === Size.default) && isOnlyIcon,
            '!p-5': size === Size.large && isOnlyIcon,
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

          // UX
          {
            'cursor-pointer': !disabled,
            'cursor-not-allowed': disabled,
          },
        ),
        className,
      )}
      disabled={disabled}
      type={htmlType}
      {...(!disabled && onClick && { onClick: handleClick })}
      {...(style && { style })}
    >
      <div>
        {icon &&
          icon &&
          React.isValidElement<{ className: string }>(icon) &&
          React.cloneElement(icon, {
            className: classnames(
              icon.props.className,
              {
                // ONLY icon
                'scale-[0.67]': size === Size.small && isOnlyIcon,
                'scale-100':
                  (size === Size.middle || size === Size.default) && isOnlyIcon,
                'scale-[1.8]': size === Size.large && isOnlyIcon,
              },
              {
                // WITH icon
                'scale-[0.67]': size === Size.small && isWithIcon,
                'scale-[0.75]':
                  (size === Size.middle || size === Size.default) && isWithIcon,
                'scale-100': size === Size.large && isWithIcon,
              },
            ),
          })}
      </div>
      {children}
    </button>
  );
};

export { Type as ButtonType, Size as ButtonSize, HtmlType as ButtonHtmlType };
export default Button;
