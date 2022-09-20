const { build } = require('esbuild');

const common = {
  bundle: true,
  jsx: 'automatic',
  define: {
    'process.env.NODE_ENV': JSON.stringify('development')
  },
  loader: {
    '.js': 'jsx'
  }
};

module.exports = Promise.all([
  build({
    ...common,
    platform: 'browser',
    outfile: 'dist/client.js',
    entryPoints: ['src/client/index.js']
  }),
  build({
    ...common,
    platform: 'node',
    outfile: 'dist/server.js',
    external: [
      './node_modules/*',
      '../../node_modules/*'
    ],
    entryPoints: ['src/server/index.js']
  })
]);
