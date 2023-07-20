import { Logo, Button, ButtonType } from '@/components/Atoms';
import { CloseOutlined } from '@/components/Atoms/Icon';
import classnames from 'classnames';
import React, { ReactNode } from 'react';

import IconExclamation from './icons/exclamation.svg';
import IconTick from './icons/tick.svg';

export type DialogAction = {
  destroy: () => void;
};

export type DialogButtonOnClickFunction = (
  e: React.SyntheticEvent,
  actions: DialogAction,
) => Promise<void> | void;

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
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

type Props = {
  title?: DialogTitle;
  buttons?: DialogButton[] | undefined;
  destroy: () => void;
  message: DialogMessage;
  options: DialogOption;
};

const Dialog: React.VFC<Props> = (props) => {
  const { title, buttons, message, options, destroy } = props;
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
      <div
        aria-label="Close Dialog"
        className="fixed top-0 h-full w-full bg-black/30 backdrop-blur transition-opacity"
        role="button"
        tabIndex={0}
        onClick={events.handleBackdropClick}
        onKeyPress={events.handleBackdropKeyPress}
      />

      <div className="z-50 mx-8 inline-block w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-lg">
        <header className="relative flex items-center justify-center">
          {/* Akira: placeholder */}
          <div className="h-10 w-10" />

          <div className="flex flex-1 items-center justify-center">
            {options.logo && <Logo />}
            {title && (
              <h2 className="flex flex-1 justify-center text-base font-semibold">
                {title}
              </h2>
            )}
          </div>

          <div className="flex justify-end">
            <Button
              icon={<CloseOutlined className="text-font-primary" />}
              type={ButtonType.link}
              onClick={events.handleCloseButtonClick}
            />
          </div>
        </header>

        {options.icon && (
          <div
            className={classnames('flex items-center justify-center pb-2', {
              'pt-4': !!options.logo,
            })}
          >
            {options.icon === 'exclamation' && <IconExclamation />}

            {options.icon === 'tick' && <IconTick />}
          </div>
        )}

        <div
          className={classnames('break-words px-10 pb-3 pt-2 text-center', {
            'pt-4': options.logo && options.icon,
            'pb-16': !buttons || buttons.length === 0,
          })}
        >
          {message}
        </div>

        {buttons && buttons.length > 0 && (
          <footer className="flex px-8 pb-5 pt-3">
            {buttons.map((button) => (
              <button
                className={classnames(
                  'mx-2 flex-1 rounded-full border-0 py-3.5 text-center text-xs font-bold first:ml-0 last:mr-0',
                  {
                    'bg-primary text-secondary': button.color === 'primary',
                    'bg-secondary text-primary': button.color === 'secondary',
                  },
                )}
                type="button"
                onClick={(e): Promise<void> | void =>
                  events.handleButtonClick(e, button.onClick)
                }
              >
                {button.text}
              </button>
            ))}
          </footer>
        )}
      </div>
    </div>
  );
};

Dialog.defaultProps = {
  buttons: undefined,
};

export default Dialog;
