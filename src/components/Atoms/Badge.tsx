import classnames from '@/utils/classnames';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  show?: boolean;
  content?: ReactNode;
  offsetTop?: number;
  offsetRight?: number;
  isOverlay?: boolean;
};

const Badge: React.VFC<Props> = ({
  show = true,
  content,
  offsetTop = 0,
  offsetRight = 0,
  isOverlay = true,
  children,
}) => {
  if (!show) {
    return <>{children}</>;
  }

  if (content) {
    return (
      <div className="relative flex w-fit">
        {children}
        <div
          className={classnames(
            'absolute',
            'px-[3px] py-px',
            'box-content rounded-lg',
            'text-xxs text-font-overlay',
            'whitespace-nowrap bg-error-default font-extrabold',
            {
              'border-[1.5px] border-surface-primary': isOverlay,
            },
          )}
          style={{
            top: `${offsetTop}px`,
            right: `${offsetRight}px`,
          }}
        >
          {content}
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex w-fit">
      {children}
      <div
        className={classnames(
          'absolute',
          'h-[0.4375rem] w-[0.4375rem]',
          'box-content rounded-full',
          'bg-error-default',
          {
            'border-[1.5px] border-surface-primary': isOverlay,
          },
        )}
        style={{ top: `${offsetTop}px`, right: `${offsetRight}px` }}
      />
    </div>
  );
};

export default Badge;
