import * as path from 'path';

import express from 'express';
import { renderToPipeableStream } from 'react-dom/server';

import App from '../common/app';

const app = express();

app.use(express.static(path.resolve('dist')));

app.get('/', (req, res) => {
  const stream = renderToPipeableStream(<App/>, {
    bootstrapModules: ['client/index.js'],
    onShellReady() {
      res.status(200);
      res.contentType('text/html');
      stream.pipe(res);
    }
  });
});

app.listen('3000', () => {
  console.log('Express server started at http://localhost:3000');
});
