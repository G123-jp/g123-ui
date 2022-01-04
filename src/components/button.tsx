import React from 'react';

export type ButtonProps = React.HTMLAttributes<HTMLDivElement>;

const Button = (props: ButtonProps) => {
  return <div {...props}>This is a button</div>;
};

export default Button;
