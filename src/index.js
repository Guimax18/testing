import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Landing from './pages/landing/landing.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cadastro from './pages/cadastro/cadastro.js';
import Consulta from './pages/consulta/consulta.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/cadastro' element={<Cadastro/>} />
        <Route path='/consulta' element={<Consulta/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


