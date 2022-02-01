import { classnames } from '@/tailwindcss-classnames';
import React, { ReactNode, useEffect, useState } from 'react';

type WrapperProps = {
  children: ReactNode;
  isOpen: boolean;
};

const Wrapper: React.VFC<WrapperProps> = ({ isOpen, children }) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  useEffect(() => {
    if (drawerOpen !== isOpen) {
      setTimeout(() => {
        setDrawerOpen(isOpen);
      }, 1000);
    }
  }, [drawerOpen, isOpen]);

  return (
    <div
      className={`translate-height ${classnames(
        'transition-all',
        'block',
        'w-full',
        {
          'h-full': drawerOpen,
          'h-0': !drawerOpen,
        },
        'duration-300',
        'ease-out',
      )}`}
    >
      {children}
    </div>
  );
};

const Content: React.VFC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      aria-hidden="true"
      className={classnames(
        'animate-slide-in-bottom',
        'block',
        'box-border',
        'bg-white',
        'fixed',
        'left-0',
        'right-0',
        '-bottom-3',
        'z-50',
        'w-full',
        'overflow-x-hidden',
        'overflow-y-hidden',
        'rounded-t-xl',
        'rounded-b-none',
      )}
      style={{ height: '36rem' }}
      onClick={(e: React.MouseEvent): void => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      {children}
    </div>
  );
};

type Props = {
  children: ReactNode;
  isOpen?: boolean;
};

// Akira refs: https://gist.github.com/raymondsiu/b565b629d84b7085d073934eee4da6ab
const Modal: React.VFC<Props> = ({ isOpen = false, children }) => {
  return (
    <Wrapper isOpen={isOpen}>
      <Content>{children}</Content>
    </Wrapper>
  );
};

Modal.defaultProps = {
  isOpen: false,
};

export default Modal;
