import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IsBigger } from './components/isBigger';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <IsBigger />
  </React.StrictMode>
);

