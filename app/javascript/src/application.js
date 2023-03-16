import React from 'react';
import { createRoot } from 'react-dom/client';

import 'antd/dist/reset.css';

import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

document.addEventListener('DOMContentLoaded', () => {
  root.render(<App />);
});