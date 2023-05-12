import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  show?: boolean;
  content?: ReactNode;
  // TODO: Akira: 2020/08/10:
  // status?: 'info' | 'success' | 'error' | 'warning';
  offsetTop?: number;
  offsetRight?: number;
};

const Badge: React.VFC<Props> = ({
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
    <div className="relative flex w-fit">
      {children}
      <div
        className="absolute whitespace-nowrap rounded-lg border-2 border-white bg-danger text-xxs font-extrabold text-white"
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
    <div className="relative flex w-fit">
      {children}
      <div
        className="absolute h-2 w-2 rounded-full bg-danger"
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
