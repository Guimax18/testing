import '../post/post.scss'
import logo from '../assets/logo-removebg-preview.png'
import add from '../assets/aba.png'
import cancel from '../assets/cancelar.png'
import { Link } from 'react-router-dom';



export default function post() {


    return (
        <div className='pagina-post'>
            <header class="cabecalho">
        <a href="/home"><img src={logo} alt="" class="logo"/></a>
        <h1>Crie o seu Post</h1>
    </header>

    <div class="post">
        <div class="left-login">
            
        </div>
        <div class="box__post">
            <div class="post__nome">
                <input type="text" class="nome__post" 
                placeholder="Adicione o titulo aqui"/>
            </div>
            <div class="post__conteudo">
                <input type="text" class="conteudo__post" 
                placeholder="Adicione a descrição aqui"/>
            </div>
            <div class="post__img">
                <label for="">
                    <input type="file" name="arquivo" class="img__pub"/>
                    Upload de arquivos</label>
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