import React from 'react';
import toast, {
  Renderable,
  Toast,
  ToastBar,
  ToastIcon,
  Toaster,
  ValueOrFunction,
} from 'react-hot-toast';
import type { ToastOptions, ToastType } from 'react-hot-toast';

import { Icon } from '../Atoms';

type Message = ValueOrFunction<Renderable, Toast>;

const customToast = {
  ...toast,

  default: (message: Message, options?: ToastOptions): string => {
    return toast(message, options);
  },

  success: (message: Message, options?: ToastOptions): string => {
    return toast.success(message, {
      icon: <Icon.CheckCircleOutlined className="text-success-default" />,
      ...options,
    });
  },

  error: (message: Message, options?: ToastOptions): string => {
    return toast.error(message, {
      icon: <Icon.CloseCircleOutlined className="text-error-default" />,
      ...options,
    });
  },

  warn: (message: Message, options?: ToastOptions): string => {
    return toast.error(message, {
      icon: <Icon.ExclamationOutlined className="text-info-default" />,
      ...options,
    });
  },

  loading: (message: Message, options?: ToastOptions): string => {
    return toast.loading(message, {
      icon: (
        <Icon.LoadingOutlined
          className="scale-75 text-font-secondary"
          containerClassName="animate-spin"
        />
      ),
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
    return toast.promise(promise, msgs, options);
  },
};

export { ToastBar, ToastIcon, Toaster };
export type { Toast, ToastOptions, ToastType };
export default Object.assign(customToast, { default: customToast.default });
