import { Logo, CloseButton } from '@/components/Atoms';
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
      className={`fixed flex items-center justify-center min-h-screen top-0 bottom-0 left-0 right-0 z-50
        ${destroying ? 'animate-fade-out-bottom' : 'animate-fade-in-bottom'}
        ${destroyed ? 'opacity-0' : ''}
      `}
      onAnimationEnd={events.handleDialogAnimationEnd}
    >
      <div
        aria-label="Close Dialog"
        className="fixed top-0 w-full h-full bg-black/30 backdrop-blur transition-opacity"
        role="button"
        tabIndex={0}
        onClick={events.handleBackdropClick}
        onKeyPress={events.handleBackdropKeyPress}
      />

      <div className="inline-block overflow-hidden z-50 mx-8 w-full max-w-xs bg-white rounded-lg shadow-lg">
        <header className="flex relative justify-center items-center px-4 pt-4">
          <div className="flex-1" />

          {options.logo === true && <Logo />}

          <div className="flex flex-1 justify-end">
            <CloseButton onClose={events.handleCloseButtonClick} />
          </div>
        </header>

        {options.icon && (
          <div
            className={`flex items-center justify-center pb-2
              ${options.logo ? 'pt-12' : ''}
            `}
          >
            {options.icon === 'exclamation' && <IconExclamation />}

            {options.icon === 'tick' && <IconTick />}
          </div>
        )}

        <div
          className={`text-center px-10 pt-2 pb-3 break-words
            ${options.logo && options.icon ? 'pt-4' : ''}
            ${!buttons || buttons.length === 0 ? 'pb-16' : ''}
          `}
        >
          {message}
        </div>

        {buttons && buttons.length > 0 && (
          <footer className="flex px-8 pt-3 pb-5">
            {buttons.map((button) => (
              <button
                className={`border-0 flex-1 font-bold mx-2 py-3.5 rounded-full text-center text-xs first:ml-0 last:mr-0
                  ${
                    button.color === 'primary'
                      ? 'bg-primary text-secondary'
                      : ''
                  }
                  ${
                    button.color === 'secondary'
                      ? 'bg-secondary text-primary'
                      : ''
                  }
                `}
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
