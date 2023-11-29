import '../comunidade/comunidade.scss'
import logo from '../assets/logo-removebg-preview.png'

import add from '../assets/aba.png'
import cancel from '../assets/cancelar.png'



import { Link } from 'react-router-dom';



export default function comunidade() {


    return (
        <div className='comunidade'>
             <header class="cabecalho">
        <a href="/home"><img src={logo} alt="" class="logo"/></a>
        <h1>Crie sua própria Comunidade</h1>
    </header>

    <div class="comunidade">
        <div class="left-comunidade">
            
        </div>
        <div class="box__comunidade">
            
                <div class="img__comunidade">
                    <label for="">
                        <input type="file" name="arquivo" class="img__pub"/>
                        foto da comunidade</label>
                </div>
                <div class="comu__nome">
                    <input type="text" class="nome__comu" 
                    placeholder="Adicione o nome da comunidade"/>
                </div>
            
            <div class="comu__descricao">
                <input type="text" class="comu__desc" 
                placeholder="Adicione a descrição aqui"/>
            </div>

            <div class="comu__topicos">
                <input type="text" class="comu__top" 
                placeholder="Adicione tópicos"/>
            </div>
            
            <div class="btn__post">
                <button class="btn__criar">
                    <img src={add} alt="icone de editar" class="icon__criar"/>Criar
                </button>
                <button class="btn__cancelar">
                    <img src={cancel} alt="icone de cancelar" class="icon__criar"/>Cancelar
                </button>
            </div>
        </div>
    </div>
        </div>
    )
}