import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Create a namespace if it doesn't exist
window.MyApp = window.MyApp || {};

// Define MyReactWidget in the namespace
window.MyApp.MyReactWidget = {
  render: (containerId, props = {}) => {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`Container with id '${containerId}' not found.`);
      return;
    }
    const root = ReactDOM.createRoot(container);
    root.render(<App {...props} />);
  },
};

console.log('MyReactWidget initialized:', window.MyApp.MyReactWidget);

https://irp.cdn-website.com/00044894/files/uploaded/services_logo.riv