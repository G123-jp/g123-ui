<h1 align="center"> g123-ui </h1>
<div align="center">

  Reuseable UI based on [G123 Design System](https://www.figma.com/file/U4LsgpPqBkL5FX2UNUDm9o/G123-Design-System) and [Atomic Design](https://atomicdesign.bradfrost.com/)

  <img width="597" alt="image" src="https://user-images.githubusercontent.com/1228449/154029162-fcf1cd30-1e30-4e9f-8ecf-e7cf176e14a2.png">
  
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
  };
  ```

- ### use g123-ui's component:
  ```jsx
  import { Button, ButtonType, Logo } from '@g123jp/g123-ui';

  const App = () => (
    <>
      <Logo />
      <Button type={ButtonType.primay}>
        Submit
      </Button>
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
  <img width="422" alt="image" src="https://user-images.githubusercontent.com/1228449/154028955-b1e3e8ea-982f-4bb1-bc37-56ba8be74ff0.png">

