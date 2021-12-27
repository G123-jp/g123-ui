// Akira: 用于拓展tailwindcss-classnames的类型规则检查（导入咱们自己的定制化规则）
// 通过命令 generate-tailwindcss-types 进行生成

// 生成后使用：
//   import { classnames } from '@/tailwindcss-classnames';
// 替代
//   import { classnames } from 'tailwindcss-classnames';

export default MyCustomType;

type MyCustomType =
  | 'text-primary'
  | 'text-secondary'
  | 'bg-primary'
  | 'bg-secondary';
