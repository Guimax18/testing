import axios from 'axios'
import './consulta.scss';
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
            <h1>Consultar catalogo</h1>

        <button onClick={buscarRoupas}> Listar Roupas </button>

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
