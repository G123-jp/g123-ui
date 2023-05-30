export const palette = {
  primary: '#136c72',
  secondary: '#d9ede2',
  highlight: '#e3ff34',
  danger: '#ff385c',
};

export const isValidPaletteColor = (color?: string): boolean => {
  if (!color || typeof color !== 'string') return false;

  return ['primary', 'secondary', 'highlight', 'danger'].includes(color);
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
