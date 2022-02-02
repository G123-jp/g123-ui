import React, { useEffect, useState } from 'react';

import Dialog from './Dialog';
import type { DialogButton, DialogMessage, DialogOption } from './Dialog';
import { DialogEvent } from './enum';
import EventManager from './EventManager';

type Option = {
  buttons: DialogButton[];
  message: React.ReactNode | string;
  key: string;
  options: DialogOption;
};

const Container: React.VFC = () => {
  const [dialogs, setDialogs] = useState<Record<string, Option>>({});

  useEffect(() => {
    EventManager.on(DialogEvent.Destroy, (key) => {
      if (dialogs[key]) {
        const copied = { ...dialogs };

        delete copied[key];

        setDialogs(copied);
      }
    });

    EventManager.on(
      DialogEvent.Show,
      (
        key: string,
        message: DialogMessage,
        buttons: DialogButton[],
        options: DialogOption = {},
      ) => {
        const copied = {
          ...dialogs,
          [key]: { buttons, key, message, options },
        };

        setDialogs(copied);
      },
    );

    return (): void => {
      EventManager.off(DialogEvent.Destroy);
      EventManager.off(DialogEvent.Show);
    };
  });

  const destroy = (key: string): void => {
    if (dialogs[key]) {
      EventManager.emit(DialogEvent.Destroy, key);
    }
  };

  return (
    <div className="dialog-container">
      {Object.keys(dialogs).map((key) => {
        const options = dialogs[key];

        return (
          <Dialog
            key={key}
            buttons={options.buttons}
            destroy={(): void => destroy(key)}
            message={options.message}
            options={options.options}
          />
        );
      })}
    </div>
  );
};

export default Container;
