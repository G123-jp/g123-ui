import classnames from 'classnames';
import React from 'react';
import { twMerge } from 'tailwind-merge';

type CarouselItemProps = {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

const CarouselItem: React.VFC<CarouselItemProps> = ({
  style,
  className = '',
  children,
}) => {
  return (
    <div
      {...(style && { style })}
      className={twMerge('box-content flex-none snap-center', className)}
    >
      {children}
    </div>
  );
};

type Props = {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  id?: string;
  scrollbarClassName?: string;
};

const InternalCarousel: React.VFC<Props> = ({
  style,
  className = '',
  id,
  scrollbarClassName = 'scrollbar-none',
  children,
}) => {
  return (
    <div
      className={twMerge(
        'flex snap-x snap-mandatory overflow-x-auto scroll-smooth',
        scrollbarClassName,
        className,
      )}
      id={id}
      {...(style && { style })}
    >
      {children}
    </div>
  );
};

const Carousel = InternalCarousel as React.VFC<Props> & {
  Item: React.VFC<CarouselItemProps>;
};

Carousel.Item = CarouselItem;
export default Carousel;
