import { Button, ButtonType } from '@/components/Atoms';
import { ChevronLeftOutlined, CloseOutlined } from '@/components/Atoms/Icon';
import classnames from '@/utils/classnames';
import React, { ReactNode, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

type MaskProps = {
  children: ReactNode;
  open: boolean;
  className?: string;
  onClose?: () => void | Promise<void>;
  style?: React.CSSProperties;
};

const Mask: React.VFC<MaskProps> = ({
  open,
  onClose,
  children,
  className,
  style,
}) => {
  return (
    <div
      aria-hidden="true"
      {...(onClose && { onClick: onClose })}
      className={twMerge(
        classnames('fixed inset-0 z-50 bg-black/40', {
          hidden: !open,
        }),
        className,
      )}
      {...(style && { style })}
    >
      {children}
    </div>
  );
};

type ContentProps = {
  open: boolean;
  title?: ReactNode;
  isMobile?: boolean;
  onGoBack?: () => void | Promise<void>;
  onClose?: () => void | Promise<void>;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const Content: React.VFC<ContentProps> = ({
  open = false,
  isMobile = true,
  title,
  onGoBack,
  onClose,
  className = '',
  style,
  children,
}) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(open);

  const handleClose = (): void => {
    setDrawerOpen(false);
  };

  const handleTranstionEnd = (): void => {
    if (!drawerOpen) {
      onClose && onClose();
    }
  };

  useEffect(() => {
    if (open !== drawerOpen) {
      setDrawerOpen(open);
    }
    // Akira: for update drawerOpen
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <div
      aria-hidden="true"
      className={twMerge(
        classnames(
          'fixed inset-x-0 -bottom-3',
          'z-50 block w-full',
          'overflow-hidden',
          'box-border rounded-b-none rounded-t-xl bg-surface-primary',
          'transition-all duration-300 ease-out',
          {
            'translate-y-0': drawerOpen,
            'translate-y-full': !drawerOpen,
          },
        ),
        className,
      )}
      {...(style && { style })}
      onClick={(e: React.MouseEvent): void => {
        e.preventDefault();
        e.stopPropagation();
      }}
      onTransitionEnd={handleTranstionEnd}
    >
      {/* Header */}
      <div className="flex h-15 items-center px-xs">
        {isMobile && (
          <div className="absolute inset-x-0 top-2 h-fit">
            <div className="mx-auto h-1 w-11 rounded-sm bg-neutral-5/30" />
          </div>
        )}
        {onGoBack ? (
          <Button
            icon={<ChevronLeftOutlined className="text-font-primary" />}
            type={ButtonType.link}
          />
        ) : (
          // Akira: GoBackButton placeholder
          <div className="h-10 w-10" />
        )}
        <h2 className="flex flex-1 justify-center text-base font-semibold">
          {title}
        </h2>
        <Button
          icon={<CloseOutlined className="text-font-primary" />}
          type={ButtonType.link}
          onClick={handleClose}
        />
      </div>
      {/* Body */}
      <div className="px-lg pb-lg">{children}</div>
    </div>
  );
};

type Props = {
  children: ReactNode;
  title?: ReactNode;
  open?: boolean;
  isMobile?: boolean;
  onGoBack?: () => void | Promise<void>;
  onClose?: () => void | Promise<void>;
  className?: string;
  style?: React.CSSProperties;
  maskClassName?: string;
  maskStyle?: React.CSSProperties;
};

// Akira refs: https://gist.github.com/raymondsiu/b565b629d84b7085d073934eee4da6ab
const Drawer: React.VFC<Props> = ({
  open = false,
  isMobile = true,
  title,
  onGoBack,
  onClose,
  className,
  style,
  maskClassName,
  maskStyle,
  children,
}) => {
  return (
    <Mask
      className={maskClassName}
      open={open}
      style={maskStyle}
      onClose={onClose}
    >
      <Content
        className={className}
        isMobile={isMobile}
        open={open}
        style={style}
        title={title}
        onClose={onClose}
        onGoBack={onGoBack}
      >
        {children}
      </Content>
    </Mask>
  );
};

export default Drawer;
