export default {
  dist: [
    'sass:dist',
    'autoprefixer:dist'
  ],
  server: [
    'sass:server',
    'autoprefixer:server',
    'browserSync:server'
  ],
  serve: [
    'server'
  ],
  default: ['server']
};
