import classnames from 'classnames';
import React, { ReactElement, cloneElement, isValidElement } from 'react';
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

const Breadcrumb: React.VFC<Props> = ({ style, className = '', items }) => {
  return (
    <div
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
                    'rounded hover:bg-nutuarl-3',
                    {
                      'text-nutuarl-7': !isCurrent,
                      'text-nutuarl-9': isCurrent,
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
                  containerClassName="w-3 h-3"
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
                containerClassName="h-3 w-3"
              />
            )}
          </>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
