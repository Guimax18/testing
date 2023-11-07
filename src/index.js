import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Landing from './pages/landing/landing.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


