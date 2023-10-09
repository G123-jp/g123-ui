<h1 align="center"> g123-ui </h1>
<div align="center">

Reuseable UI based on [G123 Design System](https://www.figma.com/file/jbFjQ7abHxF8WybpmMBiGn/G123-Design-system) and [Atomic Design](https://atomicdesign.bradfrost.com/)

  <img width="733" alt="image" src="https://github.com/G123-jp/g123-ui/assets/1228449/df2128bd-dbad-48f3-9354-676c906a8bb4">

</div>

## 📦 Install

```bash
yarn add @g123jp/g123-ui
```

## 🔨 Usage

- ### make sure [tailwindcss](https://tailwindcss.com/) has [been installed correctly](https://tailwindcss.com/docs/installation).

- ### make sure Tailwind's default style has been loaded correctly.

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

  ```typescript
  import { g123TailwindPresets } from '@g123jp/g123-ui';

  const TailindConfig = {
    // use g123-ui's presets as default
    presets: [g123TailwindPresets],
    content: [
      // ... put your content here
      './node_modules/@g123jp/g123-ui/dist/*.js',
    ],
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
  <img width="480" alt="image" src="https://github.com/G123-jp/g123-ui/assets/1228449/ce44fb3a-5403-4f64-b27e-e332841ac85b">
