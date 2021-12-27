declare module '*.png';

declare module '*.svg';

declare module '*.jpg';

declare module '*.css' {
  interface CssModule {
    [className: string]: string;
  }
  const css: {
    locals: CssModule;
    use: () => void;
    unuse: () => void;
  };
  export default css;
}