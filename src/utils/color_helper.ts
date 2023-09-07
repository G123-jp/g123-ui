const NutuarlDerivative = {
  'nutuarl-0': '#ffffff',
  'nutuarl-1': '#fafafa',
  'nutuarl-2': '#f5f5f5',
  'nutuarl-3': '#f0f0f0',
  'nutuarl-4': '#d9d9d9',
  'nutuarl-5': '#bfbfbf',
  'nutuarl-6': '#8c8c8c',
  'nutuarl-7': '#595959',
  'nutuarl-8': '#434343',
  'nutuarl-9': '#262626',
  'nutuarl-10': '#1f1f1f',
  'nutuarl-11': '#141414',
  'nutuarl-12': '#000000',
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
  'brand-tertiary-base': NutuarlDerivative['nutuarl-9'],
  'brand-tertiary-container': NutuarlDerivative['nutuarl-3'],
  // Font
  'font-primary': NutuarlDerivative['nutuarl-9'],
  'font-secondary': NutuarlDerivative['nutuarl-7'],
  'font-disabled': NutuarlDerivative['nutuarl-4'],
  'font-overlay': NutuarlDerivative['nutuarl-0'],
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
  'surface-primary': NutuarlDerivative['nutuarl-0'],
  'surface-secondary': NutuarlDerivative['nutuarl-1'],
  'surface-tertiary': NutuarlDerivative['nutuarl-2'],
  'surface-quaternary': NutuarlDerivative['nutuarl-3'],
  // Line
  'line-border': NutuarlDerivative['nutuarl-9'],
  'line-divider': NutuarlDerivative['nutuarl-3'],
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
