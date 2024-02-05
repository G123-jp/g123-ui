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
  mode?: 'desktop' | 'mobile';
  className?: string;
  style?: React.CSSProperties;
  items: (
    | BreadcrumbItem
    | ReactElement<{ className: string | undefined; key?: string | number }>
  )[];
};

const Breadcrumb = forwardRef(
  (
    { mode = 'desktop', style, className = '', items }: Props,
    ref: Ref<HTMLDivElement>,
  ) => {
    return (
      <div
        ref={ref}
        className={twMerge(
          classnames('flex items-center text-sm', {
            'font-light': mode === 'desktop',
            'font-semibold': mode === 'mobile',
          }),
          className,
        )}
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
                        'text-font-primary': isCurrent,
                        'text-font-secondary': !isCurrent && mode === 'desktop',
                        'text-neutral-6': !isCurrent && mode === 'mobile',
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
                    className={classnames('relative', {
                      '-left-1 top-[-5px] scale-50 text-font-secondary':
                        mode === 'desktop',
                      'scale-100 text-neutral-6': mode === 'mobile',
                    })}
                    containerClassName={classnames({
                      'size-3': mode === 'desktop',
                      'size-6': mode === 'mobile',
                    })}
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
                  className={classnames('relative', {
                    '-left-1 top-[-5px] scale-50 text-font-secondary':
                      mode === 'desktop',
                    'scale-100 text-neutral-6': mode === 'mobile',
                  })}
                  containerClassName={classnames({
                    'size-3': mode === 'desktop',
                    'size-6': mode === 'mobile',
                  })}
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
