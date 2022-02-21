import { Logo, CloseButton } from '@/components/Atoms';
import { classnames } from '@/tailwindcss-classnames';
import React from 'react';

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

export type DialogMessage = React.ReactNode | string;

export type DialogOption = {
  events?: {
    onDialogClosing: () => Promise<void> | void;
  };
  icon?: 'exclamation' | 'tick' | false;
  logo?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

type Props = {
  buttons?: DialogButton[] | undefined;
  destroy: () => void;
  message: DialogMessage;
  options: DialogOption;
};

const Dialog: React.VFC<Props> = (props) => {
  const { buttons, message, options, destroy } = props;
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
        'fixed',
        'flex',
        'items-center',
        'justify-center',
        'min-h-screen',
        'top-0',
        'bottom-0',
        'left-0',
        'right-0',
        'z-50',
        {
          'animate-fade-in-bottom': !destroying,
          'animate-fade-out-bottom': destroying === true,
          'opacity-0': destroyed === true,
        },
      )}
      onAnimationEnd={events.handleDialogAnimationEnd}
    >
      <div
        aria-label="Close Dialog"
        className="backdrop-blur fixed top-0 w-full h-full bg-black bg-opacity-30 transition-opacity"
        role="button"
        tabIndex={0}
        onClick={events.handleBackdropClick}
        onKeyPress={events.handleBackdropKeyPress}
      />

      <div className="inline-block bg-white rounded-lg overflow-hidden shadow-lg max-w-xs w-full mx-8 z-50">
        <header className="relative flex items-center justify-center px-4 pt-4">
          <div className="flex-1" />

          {options.logo === true && <Logo />}

          <div className="flex flex-1 justify-end">
            <CloseButton onClose={events.handleCloseButtonClick} />
          </div>
        </header>

        {options.icon && (
          <div
            className={classnames(
              'flex',
              'items-center',
              'justify-center',
              'pb-2',
              {
                'pt-12': options.logo,
              },
            )}
          >
            {options.icon === 'exclamation' && <IconExclamation />}

            {options.icon === 'tick' && <IconTick />}
          </div>
        )}

        <div
          className={classnames(
            'text-center',
            'px-10',
            'pt-2',
            'pb-3',
            'break-words',
            {
              'pt-4': !!(options.logo && options.icon),
              'pb-16': !buttons || buttons.length === 0,
            },
          )}
        >
          {message}
        </div>

        {buttons && buttons.length > 0 && (
          <footer className="flex px-8 pb-5 pt-3">
            {buttons.map((button) => (
              <button
                className={classnames(
                  'border-0',
                  'flex-1',
                  'font-bold',
                  'mx-2',
                  'py-3.5',
                  'rounded-full',
                  'text-center',
                  'text-xs',
                  'first:ml-0',
                  'last:mr-0',
                  {
                    'bg-primary': button.color === 'primary',
                    'bg-secondary': button.color === 'secondary',
                    'text-primary': button.color === 'secondary',
                    'text-secondary': button.color === 'primary',
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
