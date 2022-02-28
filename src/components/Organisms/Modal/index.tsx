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
      className={`translate-height transition-all block w-full duration-300 ease-out ${
        drawerOpen ? 'h-full' : 'h-0'
      }`}
    >
      {children}
    </div>
  );
};

const Content: React.VFC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      aria-hidden="true"
      className="box-border block overflow-hidden fixed inset-x-0 -bottom-3 z-50 w-full bg-white rounded-t-xl rounded-b-none animate-slide-in-bottom"
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
