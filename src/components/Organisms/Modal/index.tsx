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
      className={`block w-full transition-all duration-300 ease-out ${
        drawerOpen ? 'h-full' : 'h-0'
      }`}
    >
      {children}
    </div>
  );
};

type ContentProps = {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const Content: React.VFC<ContentProps> = ({
  className = '',
  style,
  children,
}) => {
  return (
    <div
      aria-hidden="true"
      className={`
        fixed
        inset-x-0
        -bottom-3
        z-50
        box-border
        block
        w-full
        animate-slide-in-bottom
        overflow-hidden
        rounded-b-none
        rounded-t-xl
        bg-white
        ${className}
      `}
      style={{ height: '38rem', ...(style && { style }) }}
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
  className?: string;
  style?: React.CSSProperties;
};

// DEPRECATED: Akira: for v1.x, support game&psp
// use Drawer instead for general purpose
// Akira refs: https://gist.github.com/raymondsiu/b565b629d84b7085d073934eee4da6ab
const Modal: React.VFC<Props> = ({
  isOpen = false,
  className,
  style,
  children,
}) => {
  return (
    <Wrapper isOpen={isOpen}>
      <Content className={className} style={style}>
        {children}
      </Content>
    </Wrapper>
  );
};

export default Modal;
