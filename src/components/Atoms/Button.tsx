'use client';

import classnames from '@/utils/classnames';
import { twMerge } from '@/utils/tailwind-merge';
import React, { ReactNode, useCallback, useMemo } from 'react';

import { LoadingOutlined } from './Icon';

enum HtmlType {
  button = 'button',
  submit = 'submit',
  reset = 'reset',
}

enum Size {
  small = 'small',
  middle = 'middle',
  large = 'large',
  xLarge = 'xLarge',
  default = 'default', // default equals to middle
}

enum Type {
  primary = 'primary',
  secondary = 'secondary',
  danger = 'danger',
  text = 'text',
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
  loading?: boolean;
  block?: boolean;
  htmlType?: HtmlType; // React.ButtonHTMLAttributes<HTMLButtonElement>.type
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top'; // React.AnchorHTMLAttributes<HTMLAnchorElement>.target
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void | Promise<void>;
} & MergedHTMLAttributes;

const Button: React.VFC<Props> = ({
  type = Type.default,
  size = Size.default,
  disabled = false,
  loading = false,
  block = false,
  htmlType = HtmlType.button,
  href,
  target = '_self',
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
    (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      onClick && onClick(e);
    },
    [onClick],
  );

  const ButtonComponent = href ? 'a' : 'button';

  const DEFAULT_ICON_CLASSNAMES = useMemo(
    () => ({
      'scale-[0.67]': size === Size.small,
      'scale-[0.75]': size === Size.middle || size === Size.default,
      'scale-100': size === Size.large || size === Size.xLarge,
    }),
    [size],
  );

  const ONLY_ICON_CLASSNAMES = useMemo(
    () => ({
      'scale-[0.67]': size === Size.small && isOnlyIcon,
      'scale-100':
        (size === Size.middle || size === Size.default) && isOnlyIcon,
      'scale-[1.8]': size === Size.large && isOnlyIcon,
      'scale-[2]': size === Size.xLarge && isOnlyIcon,
    }),
    [isOnlyIcon, size],
  );

  const WITH_ICON_CLASSNAMES = useMemo(
    () => ({
      'scale-[0.67]': size === Size.small && isWithIcon,
      'scale-[0.75]':
        (size === Size.middle || size === Size.default) && isWithIcon,
      'scale-100': (size === Size.large || size === Size.xLarge) && isWithIcon,
    }),
    [isWithIcon, size],
  );

  return (
    <ButtonComponent
      {...props}
      className={twMerge(
        classnames(
          'flex items-center justify-center gap-x-0.5',
          // Color
          {
            // normal
            'border-transparent': true,
            'bg-brand-tertiary-base text-font-overlay': type === Type.primary,
            'bg-error-default text-white': type === Type.danger, // v2.x: TODO in Design System
            'bg-transparent text-font-primary': type === Type.text,
            'bg-brand-primary-base text-font-primary': type === Type.highlight,
            'border-2 border-solid border-brand-tertiary-base bg-transparent text-font-primary':
              type === Type.stroke,
            'bg-transparent text-link-default': type === Type.link,
            'bg-brand-tertiary-container text-font-primary':
              type === Type.secondary || type === Type.default, // Akira: default equals to secondary

            // hover
            'hover:bg-font-secondary': type === Type.primary,
            'hover:bg-error-disabled': type === Type.danger, // v2.x: TODO in Design System
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
            '!text-font-disabled': disabled || loading,
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
            'h-20 min-w-[7.5rem] px-xl':
              size === Size.xLarge && !isInline && !isOnlyIcon,

            // inline: text & link
            'h-fit w-fit': isInline,
            'gap-x-0 rounded-sm px-xs py-xxs': size === Size.small && isInline,
            'gap-x-0 rounded-sm p-xs':
              (size === Size.middle || size === Size.default) && isInline,
            'rounded px-sm py-xs': size === Size.large && isInline,
            'rounded px-xl py-xxs': size === Size.xLarge && isInline,

            // icon only
            'rounded-full': isOnlyIcon,
            'p-xs':
              (size === Size.middle || size === Size.default) && isOnlyIcon,
            'p-5': size === Size.large && isOnlyIcon,
            'p-6': size === Size.xLarge && isOnlyIcon,
          },

          // Font
          {
            'text-center text-xs font-semibold': true,
            '!text-sm': size === Size.middle || size === Size.default,
            '!text-base': size === Size.large,
            '!text-xl': size === Size.xLarge,
          },

          // Block
          {
            '!w-full': block,
          },

          // UX
          {
            'cursor-pointer': !disabled && !loading,
            'cursor-not-allowed': disabled,
            'cursor-wait': loading,
          },
        ),
        className,
      )}
      disabled={disabled}
      type={htmlType}
      // behave as link
      {...(!!href && { href, target })}
      {...(!disabled && onClick && { onClick: handleClick })}
      {...(style && { style })}
    >
      {/* Loading Spinner */}
      {loading && (
        <div className="animate-spin">
          <LoadingOutlined
            className={twMerge(
              classnames(
                DEFAULT_ICON_CLASSNAMES,
                ONLY_ICON_CLASSNAMES,
                WITH_ICON_CLASSNAMES,
                icon && React.isValidElement<{ className: string }>(icon)
                  ? icon.props.className
                  : '',
              ),
            )}
          />
        </div>
      )}

      {/* Given Icon */}
      {icon &&
        React.isValidElement<{ className: string }>(icon) &&
        !loading &&
        React.cloneElement(icon, {
          className: twMerge(
            classnames(
              ONLY_ICON_CLASSNAMES,
              WITH_ICON_CLASSNAMES,
              icon.props.className,
            ),
          ),
        })}

      {/* Content */}
      {children && <span className="truncate">{children}</span>}
    </ButtonComponent>
  );
};

export { Type as ButtonType, Size as ButtonSize, HtmlType as ButtonHtmlType };
export default Button;
