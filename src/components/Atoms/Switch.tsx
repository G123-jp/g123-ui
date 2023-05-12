import React, { useCallback } from 'react';

type Props = {
  checked: boolean;
  // TODO: Akira
  // disabled?: boolean;
  onSwitch: (checked: boolean) => void | Promise<void>;
};

const Switch: React.VFC<Props> = ({ checked, onSwitch }) => {
  const handleChange = useCallback(
    (value: boolean) => {
      onSwitch && onSwitch(value);
    },
    [onSwitch],
  );

  return (
    <div className="flex w-fit items-center justify-center">
      <label className="flex cursor-pointer items-center" htmlFor="toggleB">
        <div className="relative">
          <input checked={checked} className="sr-only" type="checkbox" />
          <div
            className={`${
              checked ? 'bg-secondary' : 'bg-gray-100'
            } block h-6 w-10 rounded-full`}
          />
          <div
            aria-hidden
            className={`absolute rounded-full transition ${
              checked ? 'bg-primary' : 'bg-white'
            }`}
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
