<h1 align="center"> g123-ui </h1>
<div align="center">

Reuseable UI based on [G123 Design System](https://www.figma.com/file/U4LsgpPqBkL5FX2UNUDm9o/G123-Design-System) and [Atomic Design](https://atomicdesign.bradfrost.com/)

  <img width="733" alt="image" src="https://github.com/G123-jp/g123-ui/assets/1228449/8e6c7a60-1431-4a16-af22-d609f30b914d">

</div>

## 📦 Install

```bash
yarn add @g123jp/g123-ui
```

## 🔨 Usage

- ### make sure [tailwindcss](https://tailwindcss.com/) has [been installed correctly](https://tailwindcss.com/docs/installation).

- ### make sure tailwind's default style has been loaded correctly.

  <details><summary>expand details</summary>
  <p>

  ```css
  # in your root css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

  </p>
  </details>

- ### make sure [postcss](https://postcss.org/) has been [configured correctly](https://tailwindcss.com/docs/installation/using-postcss)(if you use TailwindCSS as a PostCSS plugin).

- ### import g123-ui's config as default(use tailwindcss's [presents](https://tailwindcss.com/docs/presets))

  ```js
  const g123UI = require('@g123jp/g123-ui');

  module.exports = {
    // use g123-ui's config as default
    presets: [g123UI.tailwindConfig],
    content: [
      // ... put your content here
      './node_modules/@g123jp/g123-ui/dist/*.js',
    ],
    plugins: [
      ...g123UI.tailwindPlugins,
      // ... put your plugins here
    ]
    // ... your other configs
  };
  ```

- ### use g123-ui's component:

  ```jsx
  import { Button, ButtonType, Logo } from '@g123jp/g123-ui';

  const App = () => (
    <>
      <Logo />
      <Button type={ButtonType.primay}>Submit</Button>
    </>
  );
  ```

## ⌨️ Development

- ### install

  ```bash
  yarn
  ```

- ### build

  > ⛑: **Make sure run build before publish it.**

  ```bash
  yarn build
  ```

- ### 🤹🏼 check with [storybook](https://storybook.js.org/)
  ```bash
  yarn storybook
  ```
  <img width="480" alt="image" src="https://github.com/G123-jp/g123-ui/assets/1228449/a9172088-4a66-49d7-ae54-ae02c3bcd9f8">
