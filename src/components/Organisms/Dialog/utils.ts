// FIXME(Akira): Legacy of Edward
import type {
  DialogButton,
  DialogMessage,
  DialogOption,
  DialogTitle,
} from './Dialog';
import { DialogEvent } from './enum';
import EventManager from './EventManager';

const dialog = {
  keys: new Set(),

  alert(
    message: DialogMessage,
    options: DialogOption = { icon: 'exclamation' },
  ): void {
    const { onConfirm } = options;

    const buttons: DialogButton[] = [
      {
        color: 'primary',
        text: 'OK',
        onClick: (e, actions): void => {
          e.preventDefault();

          onConfirm && onConfirm();
          actions.destroy();
        },
      },
    ];

    this.show(message, null, buttons, {
      ...options,
      icon: options.icon ?? 'exclamation',
    });
  },

  confirm(
    message: DialogMessage,
    options: DialogOption = { icon: 'exclamation' },
  ): Promise<boolean> {
    const { onConfirm, onCancle } = options;
    return new Promise((resolve) => {
      const buttons: DialogButton[] = [
        {
          color: 'secondary',
          onClick: (e, actions): void => {
            e.preventDefault();

            onConfirm && onConfirm();
            resolve(true);
            actions.destroy();
          },
          text: 'Yes',
        },
        {
          color: 'primary',
          onClick: (e, actions): void => {
            e.preventDefault();

            onCancle && onCancle();
            resolve(false);
            actions.destroy();
          },
          text: 'No',
        },
      ];

      this.show(message, null, buttons, {
        ...options,
        icon: options.icon ?? 'exclamation',
      });
    });
  },

  // FIXME(Akira): simplify this ugly props definition!
  show(
    message: DialogMessage,
    title?: DialogTitle,
    buttons?: DialogButton[] | undefined | null,
    options?: DialogOption,
  ): void {
    let key = '';

    do {
      key = (Math.random() + 1).toString(36).substring(2);
    } while (this.keys.has(key));

    EventManager.emit(DialogEvent.Show, key, message, title, buttons, options);
  },
};

EventManager.on(DialogEvent.Destroy, (key) => dialog.keys.delete(key));

export default dialog;
