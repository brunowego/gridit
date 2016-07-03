export default {
  dist: {
    files: [{
      expand: true,
      cwd: './dist/styles',
      src: '*.css',
      dest: './dist/styles'
    }]
  },
  server: {
    options: {
      map: true
    },
    files: [{
      expand: true,
      cwd: './tmp/styles',
      src: '*.css',
      dest: './tmp/styles'
    }]
  }
};
