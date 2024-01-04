import classnames from '@/utils/classnames';
import React, {
  Ref,
  ReactElement,
  cloneElement,
  forwardRef,
  isValidElement,
} from 'react';
import { twMerge } from 'tailwind-merge';

import { Icon } from '../Atoms';

type BreadcrumbItem = {
  title: string;
  key?: string;
  href?: string;
  onClick?: (
    evt?: React.MouseEvent<HTMLAnchorElement | ReactElement>,
  ) => void | Promise<void>;
  className?: string;
  style?: React.CSSProperties;
};

type Props = {
  className?: string;
  style?: React.CSSProperties;
  items: (
    | BreadcrumbItem
    | ReactElement<{ className: string | undefined; key?: string | number }>
  )[];
};

const Breadcrumb = forwardRef(
  ({ style, className = '', items }: Props, ref: Ref<HTMLDivElement>) => {
    return (
      <div
        ref={ref}
        className={twMerge('flex items-center text-sm font-light', className)}
        {...(style && { style })}
      >
        {items.map((item, idx) => {
          const isCurrent = idx === items.length - 1;

          if (!isValidElement(item)) {
            const {
              key,
              href,
              title,
              onClick,
              className: itemClassName,
              style: itemStyle,
            } = item;
            return (
              <>
                <a
                  key={key || idx}
                  className={twMerge(
                    classnames(
                      'flex items-center px-1',
                      'rounded hover:bg-neutral-3',
                      {
                        'text-neutral-7': !isCurrent,
                        'text-neutral-9': isCurrent,
                      },
                    ),
                    itemClassName,
                  )}
                  href={href ?? '#'}
                  {...(onClick && { onClick })}
                  {...{ itemStyle }}
                >
                  {title}
                </a>
                {!isCurrent && (
                  <Icon.ChevronRightOutlined
                    className="relative -left-1 top-[-5px] scale-50"
                    containerClassName="size-3"
                  />
                )}
              </>
            );
          }

          const { className: itemClassName, key, ...rest } = item.props;
          return (
            <>
              {cloneElement(item, {
                ...rest,
                className: twMerge('flex items-center', itemClassName),
                key: key || idx,
              })}
              {!isCurrent && (
                <Icon.ChevronRightOutlined
                  className="relative -left-1 top-[-5px] scale-50"
                  containerClassName="size-3"
                />
              )}
            </>
          );
        })}
      </div>
    );
  },
);

export default Breadcrumb;
