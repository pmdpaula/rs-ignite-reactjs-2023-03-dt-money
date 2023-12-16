/* eslint-disable import/default */
import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App.tsx';

// eslint-disable-next-line import/no-named-as-default-member
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
