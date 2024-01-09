import classnames from '@/utils/classnames';
import React, { ReactNode, Ref, forwardRef, useCallback, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

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
  default = 'default', // NOTE(Akira): default === secondary
}

enum Type {
  primary = 'primary',
  secondary = 'secondary',
  danger = 'danger',
  text = 'text',
  default = 'default', // NOTE(Akira): default === secondary
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

const Button = forwardRef(
  (
    {
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
    }: Props,
    ref: Ref<any>,
  ) => {
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
        'scale-100':
          (size === Size.large || size === Size.xLarge) && isWithIcon,
      }),
      [isWithIcon, size],
    );

    return (
      <ButtonComponent
        ref={ref}
        {...props}
        className={twMerge(
          classnames(
            'flex items-center justify-center gap-x-0.5',
            // Color
            {
              // normal
              'border-transparent': true,
              'bg-brand-tertiary-base text-font-overlay dark:bg-neutral-0 dark:text-font-primary':
                type === Type.primary,
              'bg-error-default text-white': type === Type.danger,
              'bg-transparent text-font-primary dark:text-font-overlay':
                type === Type.text,
              'bg-brand-primary-base text-font-primary':
                type === Type.highlight,
              'border-2 border-solid border-brand-tertiary-base bg-transparent text-font-primary dark:border-font-overlay dark:text-font-overlay':
                type === Type.stroke,
              'bg-transparent text-link-default dark:text-brand-secondary-secondary':
                type === Type.link,
              'bg-brand-tertiary-container text-font-primary dark:bg-font-secondary dark:text-font-overlay':
                type === Type.secondary || type === Type.default, // NOTE(Akira): default === secondary

              // hover
              'hover:bg-font-secondary dark:hover:bg-neutral-3':
                type === Type.primary,
              'hover:bg-error-disabled': type === Type.danger,
              'hover:bg-brand-primary-container': type === Type.highlight,
              'hover:text-brand-secondary-secondary dark:hover:text-brand-secondary-container':
                type === Type.link,
              'dark:hover:border-neutral-3 dark:hover:bg-neutral-3':
                type === Type.stroke,
              'hover:bg-surface-tertiary dark:hover:bg-neutral-6':
                type === Type.text ||
                type === Type.stroke ||
                type === Type.secondary ||
                type === Type.default, // NOTE(Akira): default === secondary

              // active
              'active:bg-font-secondary dark:active:bg-neutral-5':
                type === Type.primary,
              'active:bg-error-disabled': type === Type.danger,
              'active:bg-surface-tertiary': type === Type.text,
              'active:bg-brand-primary-secondary': type === Type.highlight,
              'active:text-brand-secondary-base ': type === Type.link,
              'active:bg-font-disabled dark:active:bg-neutral-5':
                type === Type.secondary || type === Type.default, // NOTE(Akira): default === secondary

              // disabled
              '!text-font-disabled dark:!text-font-secondary': disabled,
              'bg-neutral-3 dark:!bg-neutral-8':
                (type === Type.default ||
                  type === Type.secondary ||
                  type === Type.danger ||
                  type === Type.highlight ||
                  type === Type.primary) &&
                disabled,
              '!border-font-disabled dark:!border-font-secondary':
                type === Type.stroke && disabled,

              // loading
              'opacity-100': !loading,
              'opacity-40': loading,
            },

            // Size
            {
              // basic & with icon
              'w-fit rounded-full px-sm': !isInline && !isOnlyIcon,
              'h-6 min-w-[4.25rem] gap-x-0':
                size === Size.small && !isInline && !isOnlyIcon,
              'h-10 min-w-20':
                (size === Size.middle || size === Size.default) &&
                !isInline &&
                !isOnlyIcon,
              'h-16 min-w-[6.25rem]':
                size === Size.large && !isInline && !isOnlyIcon,
              'h-20 min-w-[7.5rem] px-xl':
                size === Size.xLarge && !isInline && !isOnlyIcon,

              // inline: text & link
              'h-fit w-fit': isInline,
              'gap-x-0 rounded-sm px-xs py-xxs':
                size === Size.small && isInline,
              'gap-x-0 rounded-md p-xs':
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
        // NOTE(Akira): behave as link
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
  },
);

export { Type as ButtonType, Size as ButtonSize, HtmlType as ButtonHtmlType };
export default Button;
