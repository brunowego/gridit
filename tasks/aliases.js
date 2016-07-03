export default {
  dist: [
    'sass:dist'
  ],
  server: [
    'sass:server',
    'browserSync:server'
  ],
  serve: [
    'server'
  ],
  default: ['server']
};
