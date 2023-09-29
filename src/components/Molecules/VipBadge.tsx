import classnames from 'classnames';
import React from 'react';

type Props = {
  rank?: number;
};

const VipBadge: React.VFC<Props> = ({ rank = 0 }) => {
  if (rank === 0) {
    return null;
  }

  return (
    <div className={classnames('flex items-center justify-center')}>{rank}</div>
  );
};

export default VipBadge;
