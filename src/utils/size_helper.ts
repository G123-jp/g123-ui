const sizeTest = /^(\d+\.?\d*)(px|rem|em|%)?$/;

// eslint-disable-next-line import/prefer-default-export
export const isValidCssSize = (value: string | number): boolean => {
  return !!value && sizeTest.test(value.toString());
};
