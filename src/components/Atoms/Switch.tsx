import React, { useCallback } from 'react';
import { classnames } from '@/tailwindcss-classnames';

type Props = {
  checked: boolean;
  disabled?: boolean;
  onSwitch: (checked: boolean) => void | Promise<void>;
};

const Switch: React.FC<Props> = ({ checked, onSwitch }) => {
  const handleChange = useCallback((value: boolean) => {
    onSwitch && onSwitch(value);
  }, []);

  return (
    <div
      className={classnames(
        'flex',
        'items-center',
        'justify-center',
        'w-full',
        'mb-12'
      )}
    >
      <label
        className={classnames('flex', 'items-center', 'cursor-pointer')}
        htmlFor="toggleB"
      >
        <div className="relative">
          <input checked={checked} className="sr-only" type="checkbox" />
          <div
            className={`${
              checked ? 'bg-secondary' : 'bg-gray-100'
            } ${classnames('block', 'w-10', 'h-6', 'rounded-full')}`}
          />
          <div
            aria-hidden={true}
            className={classnames('absolute', 'rounded-full', 'transition', {
              'bg-primary': checked,
              'bg-white': !checked,
            })}
            role="button"
            style={{
              width: '18px',
              height: '18px',
              top: '3px',
              ...(checked ? { right: '3px' } : { left: '3px' }),
            }}
            onClick={(): void => {
              handleChange(!checked);
            }}
          />
        </div>
      </label>
    </div>
  );
};

export default Switch;
