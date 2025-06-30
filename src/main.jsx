import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import InstallPWAButton from './InstallPWAButton.jsx';

import * as serviceWorkerRegistration from './serviceWorkerRegistration.js'

import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
  onNeedRefresh() {
    // Optional: show a "refresh" button or reload automatically
    if (confirm("New version available. Refresh?")) {
      updateSW(true);
    }
  },
  onOfflineReady() {
    console.log('App is ready to work offline');
  },
});




createRoot(document.getElementById('root')).render(

  <React.StrictMode>
  
    <BrowserRouter>
      <App />
    </BrowserRouter>
  
  </React.StrictMode>


  // <StrictMode>
  //   <App />
  // </StrictMode>,
  //hi
  
)
serviceWorkerRegistration.register();
registerSW();