import classnames from '@/utils/classnames';
import React, { Ref, forwardRef, useCallback } from 'react';

type Props = {
  checked: boolean;
  size?: 'small' | 'default';
  disabled?: boolean;
  onSwitch: (checked: boolean) => void | Promise<void>;
};

const Switch = forwardRef(
  (
    { checked, size = 'default', disabled = false, onSwitch }: Props,
    ref: Ref<HTMLDivElement>,
  ) => {
    const handleChange = useCallback(
      (value: boolean) => {
        onSwitch && onSwitch(value);
      },
      [onSwitch],
    );

    return (
      <div ref={ref} className="flex w-fit items-center justify-center">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className="flex cursor-pointer items-center" htmlFor="switch">
          <div className="relative">
            <input checked={checked} className="sr-only" type="checkbox" />
            <div
              className={classnames('block rounded-full', {
                'h-6 w-11': size === 'default',
                'h-4 w-7': size === 'small',
                'bg-brand-primary-base': checked,
                'bg-font-disabled': !checked,
                'opacity-50': disabled,
              })}
            />
            <div
              aria-hidden
              className={classnames(
                'absolute rounded-full bg-white transition',
                {
                  'top-[3px] h-[1.125rem] w-[1.125rem]': size === 'default',
                  'right-[3px]': size === 'default' && checked,
                  'left-[3px]': size === 'default' && !checked,
                  'top-0.5 h-3 w-3': size === 'small',
                  'right-0.5': size === 'small' && checked,
                  'left-0.5': size === 'small' && !checked,
                },
              )}
              role="button"
              onClick={(): void => {
                handleChange(!checked);
              }}
            />
          </div>
        </label>
      </div>
    );
  },
);

export default Switch;
