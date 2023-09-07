// eslint-disable-next-line import/no-extraneous-dependencies
import tailwindScrollbarPlugin from 'tailwind-scrollbar';

import tailwindConfig from './tailwind.config.js';

const tailwindPlugins = [tailwindScrollbarPlugin];
export { tailwindConfig, tailwindPlugins };

export * from './utils';

// Ref: Atomic Design(https://atomicdesign.bradfrost.com/)
export * from './components/Atoms';
export * as Atoms from './components/Atoms';

export * from './components/Molecules';
export * as Molecules from './components/Molecules';

export * from './components/Organisms';
export * as Organisms from './components/Organisms';
