import { classnames } from '@/tailwindcss-classnames';
import React, { ReactNode } from 'react';

type Props = {
  show?: boolean;
  content?: ReactNode;
  // TODO: Akira: 2020/08/10:
  // status?: 'info' | 'success' | 'error' | 'warning';
  offsetTop?: number;
  offsetRight?: number;
};

const Badge: React.FC<Props> = ({
  show = true,
  content,
  offsetTop = 0,
  offsetRight = 0,
  children,
}) => {
  if (!show) {
    return <>{children}</>;
  }

  return content ? (
    <div className={classnames('relative', 'flex')}>
      {children}
      <div
        className={classnames(
          'absolute',
          'border-2',
          'rounded-lg',
          'text-xxs',
          'font-extrabold',
          'whitespace-nowrap',
          // TODO: styling by status
          'text-white',
          'border-white',
          'bg-danger',
        )}
        style={{
          padding: '1px 3px',
          top: `${offsetTop}px`,
          right: `${offsetRight}px`,
        }}
      >
        {content}
      </div>
    </div>
  ) : (
    <div className={classnames('relative', 'flex')}>
      {children}
      <div
        className={classnames(
          'absolute',
          'w-2',
          'h-2',
          'rounded-full',
          'bg-danger',
        )}
        style={{ top: `${offsetTop}px`, right: `${offsetRight}px` }}
      />
    </div>
  );
};

Badge.defaultProps = {
  show: true,
  content: null,
  offsetRight: 0,
  offsetTop: 0,
};

export default Badge;
