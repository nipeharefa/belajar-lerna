import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
    external: ['react']
  },
  plugins: [
    del({ targets: ['dist/*'] }),
    typescript()
  ]
};