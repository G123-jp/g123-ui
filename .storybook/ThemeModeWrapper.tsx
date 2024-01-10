// eslint-disable-next-line import/no-extraneous-dependencies
import { addons } from '@storybook/preview-api';
import React, { PropsWithChildren, useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { DARK_MODE_EVENT_NAME, useDarkMode } from 'storybook-dark-mode';

const channel = addons.getChannel();

// NOTE(Akira): This Wrapper connect our customized dark mode flat('g123-dark') with storybook-dark-mode
const ThemeModeWrapper: React.VFC<PropsWithChildren<any>> = ({ children }) => {
  const [isDark, setDark] = useState(useDarkMode());

  useEffect(() => {
    // listen to DARK_MODE event
    channel.on(DARK_MODE_EVENT_NAME, setDark);
    return () => channel.off(DARK_MODE_EVENT_NAME, setDark);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute('data-mode', 'g123-dark');
      document.documentElement.classList.remove('bg-white');
      document.documentElement.classList.add('bg-[#303136]');
      // NOTE(Akira): handle theme's background color in 'Docs' Sections
      document.querySelector('.docs-story')?.classList.remove('bg-white');
      document.querySelector('.docs-story')?.classList.add('bg-[#303136]');
    } else {
      document.documentElement.removeAttribute('data-mode');
      document.documentElement.classList.remove('bg-[#303136]');
      document.documentElement.classList.add('bg-white');
      document.querySelector('.docs-story')?.classList.remove('bg-[#303136]');
      document.querySelector('.docs-story')?.classList.add('bg-white');
    }
  }, [isDark]);

  return <div>{children}</div>;
};

export default ThemeModeWrapper;
