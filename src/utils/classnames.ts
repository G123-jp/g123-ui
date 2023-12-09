const hasOwn = {}.hasOwnProperty;

function classnames(...args: any[]): string {
  const classes: string[] = [];

  args.forEach((arg) => {
    if (!arg) return;

    const argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      classes.push(arg.toString());
    } else if (Array.isArray(arg)) {
      const innerClassnames = classnames(...arg);
      innerClassnames && classes.push(innerClassnames);
    } else if (argType === 'object') {
      if (
        arg.toString !== Object.prototype.toString &&
        !arg.toString.toString().includes('[native code]')
      ) {
        classes.push(arg.toString());
        return;
      }

      Object.keys(arg).forEach((key) => {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes.push(key);
        }
      });
    }
  });

  return Array.from(new Set(classes)).join(' ');
}

export default classnames;
