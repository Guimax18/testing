import './adm.scss';
import { Link } from 'react-router-dom';


export default function Adm() {


  return (
    <div className='pagina-adm'>
    <header class="cabecalho">
        <a href="/"><img src="/Assets/logo img/logo.animix.png" alt="logo_principal" class="logo"/></a>
        <a href="/Login Page - ANIMIX/Login Page - ANIMIX/login.html"><img class="perfil" src="/Assets/icons/perfil.png" alt="icone de perfil"/></a>
    </header>

    <section class="banner__principal">
        <h1 class="texto1">Bem Vindo a àrea do Administrador</h1> 
    </section>

    <section class="sessao__colecao" id="colecao">
        <div class="container__colecao">
        <div class="roupa">
            <a href=""><img src="/Assets/roupas img/animes/camiseta aki 3.jpg" alt="chainsaw" class="chainsaw"/></a>
            <div class="text">
            <a href=""><img src="/assets/icons/botao-editar.png" alt="editar" class="edit"/></a>
            <p>Editar</p>
            </div>
        </div>
        
        <div class="roupa">
            <a href=""><img src="/Assets/roupas img/demon/camiseta usui 2.jpg" alt="usui" class="usui"/></a>
            <div class="text">
                <a href=""><img src="/assets/icons/botao-editar.png" alt="editar" class="edit"/></a>
                <p>Editar</p>
                </div>
        </div>
        
        <div class="roupa">
            <a href=""><img src="/Assets/roupas img/jjk/camiseta sukuna 3.jpg" alt="docinho" class="docinho"/></a>
            <div class="text">
                <a href=""><img src="/assets/icons/botao-editar.png" alt="editar" class="edit"/></a>
                <p>Editar</p>
                </div>
        </div>
        <div class="roupa">
            <a href=""><img src="/Assets/roupas img/animes/camiseta david.jpg" alt="cyber"/></a>
            <div class="text">
                <a href=""><img src="/assets/icons/botao-editar.png" alt="editar" class="edit"/></a>
                <p>Editar</p>
            </div>
        </div>
        <div class="roupa">
            <a href=""><img src="/Assets/roupas img/animes/camiseta lucy.jpg" alt="cyber"/></a>
            <div class="text">
                <a href=""><img src="/assets/icons/botao-editar.png" alt="editar" class="edit"/></a>
                <p>Editar</p>
            </div>
        </div>
        </div>
    </section>
    </div>
  );
  
}
