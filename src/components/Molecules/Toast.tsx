'use client';

import { Button, ButtonType, Icon } from '@/components/Atoms';
import toast, {
  Renderable,
  Toast,
  ToastBar,
  ToastIcon,
  Toaster,
  ValueOrFunction,
} from '@/lib/react-hot-toast';
import type {
  ToastOptions as RawToastOptions,
  ToastType,
} from '@/lib/react-hot-toast';
import classnames from '@/utils/classnames';
import React, { useCallback, useEffect, useRef, useState } from 'react';

type Message = ValueOrFunction<Renderable, Toast>;

type ToastOptions = RawToastOptions & {
  extraContent?: React.ReactNode;
};

type ExpandableToastProps = {
  message: Message;
  currToast: Toast;
  options?: ToastOptions;
};

const ExpandableToast: React.VFC<ExpandableToastProps> = ({
  message,
  currToast,
  options,
}) => {
  const { icon, extraContent, duration = 2000 } = options || {};

  const [expanded, setExpanded] = useState<boolean>(false);
  const timerRef = useRef<number | null>(null);

  const hanldeExpand = useCallback<React.MouseEventHandler<HTMLDivElement>>(
    (e): void => {
      e.stopPropagation();
      e.preventDefault();

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      if (expanded) {
        return;
      }
      setExpanded(true);
    },
    [expanded],
  );

  useEffect(() => {
    timerRef.current = window.setTimeout(() => {
      toast.dismiss(currToast.id);
    }, duration);

    return (): void => {
      timerRef.current && clearTimeout(timerRef.current);
    };
  }, [currToast.id, duration]);

  return (
    <div
      className={classnames('w-fit', {
        'cursor-default': expanded,
        'cursor-pointer': !expanded,
      })}
      role="button"
      tabIndex={0}
      onClick={hanldeExpand}
    >
      <div className="flex items-center gap-x-2">
        {icon}
        <span className="flex-1">{message}</span>

        {expanded ? (
          <Button
            className="!p-0"
            icon={<Icon.CloseOutlined className="text-brand-tertiary-base" />}
            type={ButtonType.link}
            onClick={(): void => toast.dismiss(currToast.id)}
          />
        ) : (
          <Button
            className="!p-0"
            icon={
              <Icon.ChevronDownOutlined className="text-brand-tertiary-base" />
            }
            type={ButtonType.link}
          />
        )}
      </div>

      <div
        className={classnames({
          'mt-4': expanded,
          'invisible h-0': !expanded,
        })}
      >
        {extraContent}
      </div>
    </div>
  );
};

type TriggerExpandableToastProps = {
  icon?: React.ReactNode;
  message: Message;
  extraContent: React.ReactNode;
  originalOptions?: ToastOptions;
};
const triggerExpandableToast = ({
  icon,
  message,
  extraContent,
  originalOptions,
}: TriggerExpandableToastProps): string => {
  return toast(
    (currToast: Toast) => (
      <ExpandableToast
        currToast={currToast}
        message={message}
        options={{
          icon: icon as Renderable,
          extraContent,
          ...originalOptions,
        }}
      />
    ),
    {
      // Akira: hack the padding of toast, to offset the maring of its child
      className: '!py-2.5 !px-1.5',
      ...originalOptions,
      duration: Infinity,
    },
  );
};

const customToast = {
  ...toast,

  default: (message: Message, options?: ToastOptions): string => {
    const { extraContent } = options || {};

    return extraContent
      ? triggerExpandableToast({
          message,
          extraContent,
          originalOptions: options,
        })
      : toast(message, { className: '!py-3 !px-1.5', ...options });
  },

  success: (message: Message, options?: ToastOptions): string => {
    const icon = <Icon.CheckCircleOutlined className="text-success-default" />;
    const { extraContent } = options || {};

    return extraContent
      ? triggerExpandableToast({
          icon,
          message,
          extraContent,
          originalOptions: options,
        })
      : toast.success(message, {
          icon,
          className: '!py-3 !px-4',
          ...options,
        });
  },

  error: (message: Message, options?: ToastOptions): string => {
    const icon = <Icon.CloseCircleOutlined className="text-error-default" />;
    const { extraContent } = options || {};

    return extraContent
      ? triggerExpandableToast({
          icon,
          message,
          extraContent,
          originalOptions: options,
        })
      : toast.error(message, {
          icon,
          className: '!py-3 !px-4',
          ...options,
        });
  },

  warn: (message: Message, options?: ToastOptions): string => {
    const icon = <Icon.ExclamationOutlined className="text-info-default" />;
    const { extraContent } = options || {};

    return extraContent
      ? triggerExpandableToast({
          icon,
          message,
          extraContent,
          originalOptions: options,
        })
      : toast.error(message, {
          icon,
          className: '!py-3 !px-4',
          ...options,
        });
  },

  loading: (message: Message, options?: ToastOptions): string => {
    const icon = (
      <Icon.LoadingOutlined
        className="scale-75 text-font-secondary"
        containerClassName="animate-spin"
      />
    );
    const { extraContent } = options || {};

    return extraContent
      ? triggerExpandableToast({
          icon,
          message,
          extraContent,
          originalOptions: options,
        })
      : toast.loading(message, {
          icon,
          className: '!py-3 !px-4',
          ...options,
        });
  },

  dismiss: (toastId?: string): void => {
    return toast.dismiss(toastId);
  },

  remove: (toastId?: string): void => {
    return toast.remove(toastId);
  },

  promise: (
    promise: Promise<unknown>,
    msgs: {
      loading: Renderable;
      success: ValueOrFunction<Renderable, unknown>;
      error: ValueOrFunction<Renderable, any>;
    },
    options?: ToastOptions,
  ): Promise<unknown> => {
    return toast.promise(promise, msgs, {
      className: '!py-3 !px-4',
      ...options,
    });
  },
};

export { ToastBar, ToastIcon, Toaster };
export type { Toast, ToastOptions, ToastType };
export default Object.assign(customToast, { default: customToast.default });
