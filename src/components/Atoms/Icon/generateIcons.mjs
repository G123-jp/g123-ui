import * as changeCase from 'change-case';
import * as fs from 'fs';
import * as path from 'path';

const __filename = new URL(import.meta.url).pathname;
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
  iconCategories.forEach((category) => {
    const categoryDir = path.join(svgImagesDir, category);
    fs.readdirSync(categoryDir, { withFileTypes: true }).forEach((file) => {
      if (file.isFile() && path.extname(file.name) === '.svg') {
        const svgFileName = path.basename(file.name, '.svg');
        const iconFileName = changeCase.pascalCase(
          `${svgFileName}-${iconCategoriesNameMap[category]}`,
        );

        const iconComponentContent = [
          "import React from 'react';",
          '',
          "import Icon, { IconProps } from '../G123Icon';",
          `import SvgImage from '../svg-images/${category}/${svgFileName}.svg';`,
          '',
          `const ${iconFileName}: React.VFC<IconProps> = (props) => {`,
          '  return <Icon IconSvg={SvgImage} {...props} />;',
          '};',
          '',
          `export default ${iconFileName};`,
          '',
        ].join('\n');

        const iconFilePath = path.join(iconsDir, `${iconFileName}.tsx`);
        fs.writeFileSync(iconFilePath, iconComponentContent);
      }
    });
  });
};

main();
