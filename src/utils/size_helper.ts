const sizeTest = /^(\d+\.?\d*)(px|rem|em|%)?$/;

export const isValidCssSize = (value: string | number): boolean => {
  return !!value && sizeTest.test(value.toString());
};
