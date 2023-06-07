import vue from 'rollup-plugin-vue';
import css from 'rollup-plugin-css-only';
import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { name } from '../package.json';
const file = (type) => `dist/${name}.${type}.js`;
// 开启 ts 的类型声明文件打包
const overrides = {
  compilerOptions: {
    declaration: true
  },
  exclude: ['tests/**/*.ts', 'tests/**/*.tsx']
};
export { name, file };

export default {
  input: 'src/index.ts',
  plugins: [
    nodeResolve(),
    typescript({ tsconfigOverride: overrides }),
    vue(),
    css({ output: 'bundle.css' })
  ],
  external: ['vue', 'lodash-es']
};
