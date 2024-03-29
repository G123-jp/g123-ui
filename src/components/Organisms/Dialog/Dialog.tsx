// FIXME(Akira): Legacy of Edward
import { Icon, Logo, Button, ButtonType } from '@/components/Atoms';
import classnames from '@/utils/classnames';
import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export type DialogAction = {
  destroy: () => void;
};

export type DialogButtonOnClickFunction = (
  e: React.SyntheticEvent,
  actions: DialogAction,
) => Promise<void> | void;

// FIXME(Akira): Legacy of Edward
// TODO(Akira): use G123 Button
export type DialogButton = {
  color: 'primary' | 'secondary';
  onClick?: DialogButtonOnClickFunction;
  text: string;
};

export type DialogTitle = ReactNode | string;
export type DialogMessage = ReactNode | string;

export type DialogOption = {
  events?: {
    onDialogClosing: () => Promise<void> | void;
  };
  icon?: 'exclamation' | 'tick' | false;
  logo?: boolean;
  // TODO(Akira): size implementation
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  maskClassName?: string;
  maskStyle?: React.CSSProperties;
  className?: string;
  style?: React.CSSProperties;
  contentClassName?: string;
  contentStyle?: React.CSSProperties;
  onConfirm?: () => Promise<void> | void;
  onClose?: () => Promise<void> | void;
  onCancle?: () => Promise<void> | void;
};

type Props = {
  destroy: () => void;
  message: DialogMessage;
  options: DialogOption;
  title?: DialogTitle;
  buttons?: DialogButton[];
};

const Dialog = ({
  destroy,
  message,
  options: {
    logo = false,
    icon = false,
    maskClassName,
    maskStyle,
    className,
    style,
    contentClassName,
    contentStyle,
    onClose,
  },
  title,
  buttons,
}: Props): JSX.Element => {
  const [destroyed, setDestroyed] = React.useState(false);
  const [destroying, setDestroying] = React.useState(false);

  const actions = {
    destroy: (): void => setDestroying(true),
  };

  const events = {
    handleBackdropClick: (): void => {
      setDestroying(true);
    },

    handleBackdropKeyPress: (e: React.KeyboardEvent): void => {
      e.preventDefault();

      if (e.key === 'Escape' || e.keyCode === 27 || e.which === 27) {
        setDestroying(true);
      }
    },

    handleButtonClick: (
      e: React.SyntheticEvent,
      callback?: DialogButtonOnClickFunction,
    ): Promise<void> | void => {
      e.preventDefault();

      if (callback) {
        return callback.call(null, e, actions);
      }

      return actions.destroy();
    },

    handleCloseButtonClick: (): void => {
      onClose && onClose();
      setDestroying(true);
    },

    handleDialogAnimationEnd: (): void => {
      if (destroying) {
        setDestroyed(true);
      }
    },
  };

  React.useEffect(() => {
    if (destroyed) {
      setTimeout(() => destroy(), 100);
    }
  }, [destroy, destroyed]);

  return (
    // Dialog Wrapper
    <div
      className={classnames(
        'fixed inset-0 z-50 flex min-h-screen items-center justify-center',
        {
          'animate-fade-out-bottom': destroying,
          'animate-fade-in-bottom': !destroying,
          'opacity-0': destroyed,
        },
      )}
      onAnimationEnd={events.handleDialogAnimationEnd}
    >
      {/* Dialog Background Mask */}
      <div
        aria-label="Close Dialog"
        className={twMerge(
          'fixed top-0 size-full bg-black/30 backdrop-blur transition-opacity',
          maskClassName,
        )}
        {...(maskStyle && { maskStyle })}
        role="button"
        tabIndex={0}
        onClick={events.handleBackdropClick}
        onKeyPress={events.handleBackdropKeyPress}
      />

      {/* Dialog */}
      <div
        className={twMerge(
          classnames(
            'z-50 inline-block overflow-hidden',
            'rounded-lg bg-surface-primary shadow-lg',
            // NOTE(Akira): -3rem stands for padding(24px * 2) on small screens
            'w-fit min-w-64 max-w-[calc(100%-3rem)]',
          ),
          className,
        )}
        {...(style && { style })}
      >
        {/* Dialog Header */}
        <header className="relative flex items-center justify-center">
          {/* Akira: placeholder */}
          <div className="size-10" />

          <div className="flex flex-1 items-center justify-center">
            {logo && <Logo />}
            {title && (
              <h2 className="flex flex-1 justify-center text-base font-semibold">
                {title}
              </h2>
            )}
          </div>

          <div className="flex justify-end">
            <Button
              icon={<Icon.CloseOutlined className="text-font-primary" />}
              type={ButtonType.link}
              onClick={events.handleCloseButtonClick}
            />
          </div>
        </header>

        {/* Dialog Icon */}
        {icon && (
          <div
            className={classnames('flex items-center justify-center pb-4', {
              'pt-4': !!logo,
            })}
          >
            {icon === 'exclamation' && (
              <Icon.ExclamationFilled className="scale-[2.5] text-error-default" />
            )}
            {icon === 'tick' && (
              <Icon.CheckFilled className="scale-[2.5] text-success-default" />
            )}
          </div>
        )}

        {/* Dialog Content */}
        <div
          className={twMerge(
            classnames(
              'break-words px-10 pb-3 pt-2 text-center font-semibold',
              {
                'pt-4': icon,
                'pb-6': !buttons || buttons.length === 0,
              },
            ),
            contentClassName,
          )}
          {...(contentStyle && { style: contentStyle })}
        >
          {message}
        </div>

        {/* Dialog Action Buttons */}
        {buttons && buttons.length > 0 && (
          <footer className="flex px-8 pb-5 pt-3">
            {buttons.map((button) => (
              <Button
                className="mx-2 flex-1 rounded-full border-0 py-3.5 text-center text-xs font-bold first:ml-0 last:mr-0"
                type={
                  {
                    primary: ButtonType.primary,
                    secondary: ButtonType.secondary,
                  }[button.color]
                }
                onClick={(e): Promise<void> | void =>
                  events.handleButtonClick(e, button.onClick)
                }
              >
                {button.text}
              </Button>
            ))}
          </footer>
        )}
      </div>
    </div>
  );
};

export default Dialog;
