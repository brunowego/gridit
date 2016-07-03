export default {
  dist: {
    expand: true,
    cwd: './src/styles',
    src: '*.scss',
    dest: './dist/styles',
    ext: '.css'
  },
  server: {
    expand: true,
    cwd: './src/styles',
    src: '*.scss',
    dest: './tmp/styles',
    ext: '.css'
  }
};
