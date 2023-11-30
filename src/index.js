import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Landing from './pages/landing/landing.js';
import Login from './pages/login/login.js';
import Cadastro from './pages/cadastro/cadastro.js';
import ComunidadeSoc from './pages/comunidade_soc/comunidade_soc.js';
import Comunidade from './pages/components/comunidade/comunidade.js';
import Post from './pages/components/post/post.js';
import User from './pages/user/user.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/cadastro' element={<Cadastro/>} />
        <Route path='/comunidade' element={<ComunidadeSoc/>} />
        <Route path='/criar comunidade' element={<Comunidade/>} />
        <Route path='/criar post' element={<Post/>} />
        <Route path='/user' element={<User/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


