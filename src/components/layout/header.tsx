import React from 'react';

export type HeaderProps = React.HTMLAttributes<HTMLDivElement>;

const Header = (props: HeaderProps) => {
  return <div {...props}>This is a header</div>;
};

export default Header;
