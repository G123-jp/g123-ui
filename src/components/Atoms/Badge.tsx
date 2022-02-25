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
    <div className="flex relative w-fit">
      {children}
      <div
        className="absolute text-xxs font-extrabold text-white whitespace-nowrap bg-danger rounded-lg border-2 border-white"
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
    <div className="flex relative w-fit">
      {children}
      <div
        className="absolute w-2 h-2 bg-danger rounded-full"
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
