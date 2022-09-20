import { Suspense, lazy, version } from 'react';

const Counter = lazy(() => import('./counter'));

export default function App() {
  return (
    <html lang="en-US">
    <head>
      <title>SSR renderToPipeableStream Demo</title>
    </head>
    <body>
    <div id="app">
      <h1>React@{ version } renderToPipeableStream Demo</h1>
      <Suspense fallback={ <div>Loading...</div> }>
        <Counter/>
      </Suspense>
    </div>
    </body>
    </html>
  );
}
