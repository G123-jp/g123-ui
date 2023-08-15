// FIXME: Akira: Legacy of Edward
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
    const buttons: DialogButton[] = [
      {
        color: 'primary',
        text: 'OK',
      },
    ];

    this.show(message, null, buttons, options);
  },

  confirm(
    message: DialogMessage,
    options: DialogOption = { icon: 'exclamation' },
  ): Promise<boolean> {
    return new Promise((resolve) => {
      const buttons: DialogButton[] = [
        {
          color: 'secondary',
          onClick: (e, actions): void => {
            e.preventDefault();

            resolve(true);
            actions.destroy();
          },
          text: 'Yes',
        },
        {
          color: 'primary',
          onClick: (e, actions): void => {
            e.preventDefault();

            resolve(false);
            actions.destroy();
          },
          text: 'No',
        },
      ];

      this.show(message, null, buttons, options);
    });
  },

  // FIXME: Akira: simplify this ugly props definition!
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
