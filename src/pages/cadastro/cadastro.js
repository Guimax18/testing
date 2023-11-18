import { useState } from 'react';
import './cadastro.scss';
import axios from 'axios'
import { Link } from 'react-router-dom';


export default function Cadastro() {
  const [nome, setNome] = useState ('');
  const [categoria, setCategoria] = useState ('');
  const [tamanho, setTamanho] = useState ('');
  const [valor, setValor] = useState ('');
  const [cor, setCor] = useState ('');
  const [anime, setAnime] = useState ('');


  async function salvarRoupa() {
    let body = {
        nome: nome,
        categoria: categoria,
        tamanho: tamanho,
        valor: valor,
        cor: cor,
        anime: anime
    }

   let r = await axios.post('http://localhost:8400/roupa/', body);
   let id = r.data.id;
   
   alert('Roupa cadastrada. id' + id);

  }


  return (
    <div className='pagina-cadastro'>
      <h1>Cadastro de Roupas</h1>

      <div className='form'>
        <div>
          <label>Nome: </label>
          <input type='text' value={nome} onChange={e => setNome(e.target.value)}/>
        </div>

        <div>
          <label>Categoria: </label>
          <input type='text' value={categoria} onChange={e => setCategoria(e.target.value)}/>
        </div>

        <div>
          <label>Tamanho: </label>
          <input type='text' value={tamanho} onChange={e => setTamanho(e.target.value)}/>
        </div>

        <div>
          <label>Valor: </label>
          <input type='text' value={valor} onChange={e => setValor(e.target.value)}/>
        </div>

        <div>
          <label>Cor: </label>
          <input type='text' value={cor} onChange={e => setCor(e.target.value)}/>
        </div>

        <div>
          <label>Anime: </label>
          <input type='text' value={anime} onChange={e => setAnime(e.target.value)}/>
        </div>

        <div>
          <button onClick={salvarRoupa}> Cadastrar </button>
        </div>
      </div>

    </div>
  )
  
}
