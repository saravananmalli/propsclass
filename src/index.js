import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounteContex } from './hooks/countContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CounteContex />
);

