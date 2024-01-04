import * as changeCase from 'change-case';
import * as fs from 'fs';
import * as path from 'path';

// eslint-disable-next-line no-underscore-dangle
const __filename = new URL(import.meta.url).pathname;
// eslint-disable-next-line no-underscore-dangle
const __dirname = path.dirname(__filename);

const svgImagesDir = path.join(__dirname, 'svg-images');
const iconsDir = path.join(__dirname, 'icons');

const iconCategories = ['outlined', 'filled', 'twotone'];
const iconCategoriesNameMap = {
  outlined: 'Outlined',
  filled: 'Filled',
  twotone: 'TwoTone',
};

const main = () => {
  const iconIndexFilePath = path.join(__dirname, 'index.ts');
  fs.writeFileSync(iconIndexFilePath, '// G123 Icons:\n');

  iconCategories.forEach((category, idx) => {
    const categoryDir = path.join(svgImagesDir, category);
    const categoryName = iconCategoriesNameMap[category];
    fs.appendFileSync(iconIndexFilePath, `// ${categoryName}:\n`);

    fs.readdirSync(categoryDir, { withFileTypes: true }).forEach((file) => {
      if (file.isFile() && path.extname(file.name) === '.svg') {
        const svgFileName = path.basename(file.name, '.svg');
        const iconFileName = changeCase.pascalCase(
          `${svgFileName}-${categoryName}`,
        );

        const iconComponentContent = [
          "import React, { Ref, forwardRef } from 'react';",
          '',
          "import Icon, { IconProps } from '../G123Icon';",
          `import SvgImage from '../svg-images/${category}/${svgFileName}.svg';`,
          '',
          `const ${iconFileName} = forwardRef(`,
          '  (props: IconProps, ref: Ref<HTMLDivElement>) => {',
          '    return <Icon ref={ref} IconSvg={SvgImage} {...props} />;',
          '  },',
          ');',
          '',
          `export default ${iconFileName};`,
          '',
        ].join('\n');

        const iconFilePath = path.join(iconsDir, `${iconFileName}.tsx`);
        fs.writeFileSync(iconFilePath, iconComponentContent);

        const iconComponentInIndexContent = `export { default as ${iconFileName} } from './icons/${iconFileName}';\n`;
        fs.appendFileSync(iconIndexFilePath, iconComponentInIndexContent);
      }
    });

    idx < iconCategories.length - 1 &&
      fs.appendFileSync(iconIndexFilePath, '\n');
  });
};

main();
