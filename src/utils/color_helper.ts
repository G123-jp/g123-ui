export const palette = {
  // Akira: 1.x palette, maybe DEPRECATED in the future
  primary: '#136c72',
  secondary: '#d9ede2',
  highlight: '#e3ff34',
  danger: '#ff385c',

  // Akira: 2.x palette, Backward Compatibility
  // Brand
  'brand-primary-base': '#e3ff34',
  'brand-primary-secondary': '#d2ef1c',
  'brand-primary-container': '#f1ff99',
  'brand-primary-bg': '#fafede',
  'brand-secondary-base': '#136c72',
  'brand-secondary-secondary': '#89b5b8',
  'brand-secondary-container': '#d9ede2',
  'brand-secondary-bg': '#eef6ef',
  'brand-tertiary-base': '#262626',
  'brand-tertiary-container': '#f0f0f0',
  // Font
  'font-primary': '#262626',
  'font-secondary': '#8c8c8c',
  'font-disabled': '#d9d9d9',
  'font-overlay': '#ffffff',
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
  'surface-primary': '#ffffff',
  'surface-secondary': '#fafafa',
  'surface-tertiary': '#f5f5f5',
  'surface-quaternary': '#f0f0f0',
  // Line
  'line-border': '#262626',
  'line-divider': '#f0f0f0',
};

export const isValidPaletteColor = (color?: string): boolean => {
  if (!color || typeof color !== 'string') return false;

  return Object.keys(palette).includes(color);
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
