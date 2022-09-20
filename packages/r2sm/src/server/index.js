import * as path from 'path';

import express from 'express';
import { renderToStaticMarkup } from 'react-dom/server';

import App from './app';

const app = express();

app.use(express.static(path.resolve('dist')));

app.get('/', (req, res) => {
  const markup = renderToStaticMarkup(<App/>);

  res.status(200);
  res.contentType('text/html');

  return res.send(`
    <!DOCTYPE html>
    <html lang="en-US">
    <head>
        <title>SSR renderToStaticMarkup Demo</title>
    </head>
    <body>
        <div id="app">${ markup }</div>
        <script src="client.js"></script>
    </body>
  `);
});

app.listen('3000', () => {
  console.log('Express server started at http://localhost:3000');
});
