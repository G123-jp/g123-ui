const sizeTest = /^(\d*)?(px|rem|em|%)?$/g;

export const isValidCssSize = (value: string | number): boolean => {
  return !!value && sizeTest.test(value.toString());
};
