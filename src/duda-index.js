import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

let root = null; // To store the React root instance

export function init({ container, props }) {
  root = ReactDOM.createRoot(container); // Create a root instance
  root.render(<App {...props} />);
}

export function clean({ container }) {
  if (root) {
    root.unmount(); // Clean up the React app
    root = null;
  }
}
