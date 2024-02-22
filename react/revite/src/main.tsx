import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Sample from '../src/components/Sample.tsx';
import './index.css';
import { CounterProvider } from './contexts/counter-context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
    <Sample />
  </React.StrictMode>
);