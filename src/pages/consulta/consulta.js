import axios from 'axios'
import './consulta.scss';
import logo from '../assets/logo img/logo.animix.png'
import perfil from '../assets/icons/perfil.png'
import { useEffect, useState } from 'react';





export default function Consulta() {
    const [listaRoupas, setListaRoupas] = useState([]);

    async function buscarRoupas() {
        let r = await axios.get('http://localhost:8400/roupa');
        let roupas = r.data;

        setListaRoupas(roupas);
    }

    useEffect(() => {
        buscarRoupas();
    }, []);


    return (
        <div className="page-consulta">
      <div className='header'>
      <a href="/"><img src={logo} alt="logo_principal" class="logo"/></a>
      <h1>Consulta de Roupas</h1>
      <a href="/Login Page - ANIMIX/Login Page - ANIMIX/login.html"><img class="perfil" src={perfil} alt="icone de perfil"/></a>
      </div>

        <table>
            <thead>
            </thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Categoria</th>
                    <th>Tamanho</th>
                    <th>Valor</th>
                    <th>Cor</th>
                    <th>Anime</th>
                </tr>
            <tbody>
                {listaRoupas.map(item =>        
            <tr>
                <th>{item.id_roupa}</th>
                <th>{item.nm_roupa}</th>
                <th>{item.categoria}</th>
                <th>{item.tamanho}</th>
                <th>{item.valor}</th>
                <th>{item.cor}</th>
                <th>{item.anime}</th>
                </tr>
                )}
            </tbody>
        </table>
        </div>
    );
}
