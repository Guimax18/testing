import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Landing from './pages/landing/landing.js';
import Jujutsu from './pages/jujutsu/jujutsu.js';
import Atack from './pages/atack/atack.js';
import Demon from './pages/demon/demon.js';
import Login from './pages/login/Login.js';
import Adm from './pages/adm/adm.js';
import Sobre from './pages/sobre/Sobre.js';
import Cadastro from './pages/cadastro/cadastro.js';
import Consulta from './pages/consulta/consulta.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/jujutsu' element={<Jujutsu/>}/>
        <Route path='/atack' element={<Atack/>}/>
        <Route path='/demon' element={<Demon/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/adm' element={<Adm/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
        <Route path='/cadastro' element={<Cadastro/>} />
        <Route path='/consulta' element={<Consulta/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


