import { useLayoutEffect } from 'react';
import styles from './global.css';

export const Provider: React.VFC = () => {
  useLayoutEffect(() => {
    styles.use();
    // Load Google Font
    // const link = document.createElement('link');
    // link.rel = 'stylesheet';
    // link.href =
    //   'https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@100;300;400;500;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap';
    // document.head.appendChild(link);
  }, []);

  return null;
};
