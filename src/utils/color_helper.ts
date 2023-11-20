const NutuarlDerivative = {
  'neutral-0': '#ffffff',
  'neutral-1': '#fafafa',
  'neutral-2': '#f5f5f5',
  'neutral-3': '#f0f0f0',
  'neutral-4': '#d9d9d9',
  'neutral-5': '#bfbfbf',
  'neutral-6': '#8c8c8c',
  'neutral-7': '#595959',
  'neutral-8': '#434343',
  'neutral-9': '#262626',
  'neutral-10': '#1f1f1f',
  'neutral-11': '#141414',
  'neutral-12': '#000000',
};

export const Palette = {
  // Akira: v1.x Palette, maybe DEPRECATED in the future
  primary: '#136c72',
  secondary: '#d9ede2',
  highlight: '#e3ff34',
  danger: '#ff385c',

  // Akira: v2.x Palette, Backward Compatibility
  // Brand
  'brand-primary-base': '#e3ff34',
  'brand-primary-secondary': '#d2ef1c',
  'brand-primary-container': '#f1ff99',
  'brand-primary-bg': '#fafede',
  'brand-secondary-base': '#136c72',
  'brand-secondary-secondary': '#89b5b8',
  'brand-secondary-container': '#d9ede2',
  'brand-secondary-bg': '#eef6ef',
  'brand-tertiary-base': NutuarlDerivative['neutral-9'],
  'brand-tertiary-container': NutuarlDerivative['neutral-3'],
  // Font
  'font-primary': NutuarlDerivative['neutral-9'],
  'font-secondary': NutuarlDerivative['neutral-7'],
  'font-disabled': NutuarlDerivative['neutral-4'],
  'font-overlay': NutuarlDerivative['neutral-0'],
  // Link
  'link-default': '#136c72',
  'link-disabled': '#89b5b8',
  // Semantic - error
  'error-default': '#f6375a',
  'error-disabled': '#faaebb',
  'error-bg': '#fef2f5',
  // Semantic - info
  'info-default': '#fad511',
  'info-disabled': '#f9e681',
  'info-bg': '#fefbe9',
  // Semantic - success
  'success-default': '#61c630',
  'success-disabled': '#b7e2a1',
  'success-bg': '#f3faf0',
  // Surface
  'surface-primary': NutuarlDerivative['neutral-0'],
  'surface-secondary': NutuarlDerivative['neutral-1'],
  'surface-tertiary': NutuarlDerivative['neutral-2'],
  'surface-quaternary': NutuarlDerivative['neutral-3'],
  // Line
  'line-border': NutuarlDerivative['neutral-9'],
  'line-divider': NutuarlDerivative['neutral-3'],
  // Nutuarl
  ...NutuarlDerivative,
};

export const isValidPaletteColor = (color?: string): boolean => {
  if (!color || typeof color !== 'string') return false;

  return Object.keys(Palette).includes(color);
};

export const isValidHtmlColor = (color?: string): boolean => {
  if (!color || typeof color !== 'string') return false;

  const s = new Option().style;
  s.color = color;
  return s.color !== '';
};

export const isValidHexColor = (color?: string): boolean => {
  if (!color || typeof color !== 'string') return false;

  return /^#([a-fA-F0-9]){3}$|[a-fA-F0-9]{6}$/.test(color);
};
