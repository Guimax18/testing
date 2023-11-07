import '../landing/landing.scss';
import bgPrincipal from '../assets/images/background_anime3.png'
import mulherBanner from '../assets/images/moça do banner.png'
import logo from '../assets/logo img/logo.animix.png'
import lupa from '../assets/icons/lupa-2.png'
import sacola from '../assets/icons/sacola-branca.png'
import perfil from '../assets/icons/perfil.png'
import caminhao from '../assets/icons/caminhao-de-entrega.png'
import pix from '../assets/icons/pix.png'
import cartao from '../assets/icons/cartoes-de-credito.png'
import jujutsuLogo from '../assets/logo img/logo jjk.jpg'
import atackLogo from '../assets/logo img/logo-atack2.png'
import demonLogo from '../assets/logo img/logo kny.jpg'
import React from 'react';

import { Link } from 'react-router-dom';


export default function landing() {


  return (
    <section className='landing__page'>
    <header Class="cabecalho">
        <a href="/"><img src={logo} alt="logo_principal" class="logo"/></a>
            <nav>
                <ul class="navbar">
                    <li><a href="#Categoria">Categoria</a></li>
                    <li><a href="#colecao">Coleção</a></li>
                    <li><a href="../pages/sobre/Sobre.js">Sobre</a></li>
                    <div class="search-container">
                        <input type="text" class="search-box"/>
                        <div class="search-icon"><img src={lupa} alt="lupa"/></div>
                      </div>
                </ul>
            </nav>
        <div class="menumb">
        <div class="icons__header">    
            <a href=""><img class="sacola" src={sacola} alt="sacola de compras"/></a>
            <a href="/Login Page - ANIMIX/Login Page - ANIMIX/login.html"><img class="perfil" src={perfil} alt="icone de perfil"/></a>
        </div>  
        <div class="bx bx-menu" id="menu-icon">
            <img src="/assets/icons/menu-aberto.png" alt="menumb" class="menu-icon"/>
        </div>  
        </div>
    </header>

    <img src={bgPrincipal} className="bg__principal"/>
    <section class="banner__principal">
        <div class="text__principal">
        <h1 class="texto1">Estamos abrindo</h1> 
        <h1 class="texto2">caminho para uma</h1>  
        <h1 class="texto3">nova era da moda</h1>
        </div>
       <img src={mulherBanner} alt="moça do banner" class="mulher__banner"/>
    </section>

    <section class="icons_principais">
        <img src={caminhao} alt="caminhao-de-entrega" class="icon__frete"/>
        <div class="text__icons">
        <h2 class="frete">Frete Grátis</h2>
        <p>em todo o brasil</p>
        </div>
        <img src={pix} alt="pix" class="icon__pix"/>
        <div class="text__icons">
        <h2 class="pix">5% de Desconto</h2>
        <p>para pagamentos com Pix</p>
        </div>
        <img src={cartao} alt="cartao" class="icon__cartao"/>
        <div class="text__icons">
        <h2 class="cartao">Até 10X sem juros</h2>
        <p>Acima de R$299</p>
        </div>
    </section>

    <section class="animes__card">
        <div class="container__animes">
        <div class="figures">
        <a href="/pages/jujutsu/jujutsu.html"><img src={jujutsuLogo} alt="jujustu" class="jujutsu"/></a>
        </div>  
        <div class="figures">
        <a href="/pages/atack/atack.html"><img src={atackLogo} alt="atackontitans" class="atackontitans"/></a>
        </div>
        <div class="figures">
        <a href="/pages/demon/demon.html"><img src={demonLogo} alt="ds" class="demon"/></a>
        </div>
        </div>
    </section>

    <section class="sessao__categorias" id="Categoria">
        <div class="container__images">
        <div class="img">
            <a href=""><img src="./Assets/roupas img/snk/jaqueta modelox.webp" alt="jaqueta" class="jaquetas"/></a>
            <h3>jaquetas</h3>
        </div>  
        <div class="img">
            <a href=""><img src="./Assets/roupas img/demon/moletom kukoshibo.webp" alt="moletom" class="moletons"/></a>
            <h3>Moletons</h3>
        </div>
        <div class="img">
            <a href=""><img src="./Assets/roupas img/jjk/camiseta gojo modelo.png" alt="masculino" class="masculino"/></a>
            <h3>Masculino</h3>
        </div>
        <div class="img">     
            <a href=""><img src="./Assets/roupas img/feminina/camiseta/camiseta modelo docinho.jpg" alt="feminino" class="feminino"/></a>
            <h3>feminino</h3>
        </div>
        <div class="img">     
            <a href=""><img src="./Assets/roupas img/jjk/chaveiro gojo e geto.jfif" alt="acessorios" class="acessorios"/></a>
            <h3>Acessórios</h3>
        </div>
        <div class="img">     
            <a href=""><img src="./Assets/roupas img/feminina/saia/saia preta com corrente.jpg" alt="saia" class="saias"/></a>
            <h3>Saias</h3>
        </div>   
        </div> 
    </section>
    
    <section class="images__ilustration">
        <div class="hokage">
            <img src="./Assets/images/hokage.jpg" alt="hokage" class="hokage"/>
            </div>
        <div class="jiraya">
        <img src="./Assets/images/blusa.webp" alt="blusa__jiraya" class="blusa__jiraya"/>
        </div>
        <div class="otaku">
        <img src="./Assets/images/banner otaku.webp" alt="imagem_otaku" class="otaku"/>
        </div>
    </section>


    <section class="sessao__colecao" id="colecao">
        <div class="container__colecao">
        <div>
            <a href=""><img src="/Assets/roupas img/animes/camiseta aki 3.jpg" alt="chainsaw" class="chainsaw"/></a>
            <p>Chainsaw-Man</p>
        </div>
        <div>
            <a href=""><img src="/Assets/roupas img/demon/camiseta usui 2.jpg" alt="usui" class="usui"/></a>
            <p>Demon Slayer</p>
        </div>
        <div>
            <a href=""><img src="/Assets/roupas img/feminina/camiseta/camiseta modelo docinho.jpg" alt="docinho" class="docinho"/></a>
            <p>Meninas Super-Poderosas</p>
        </div>
        <div>
            <a href=""><img src="/Assets/roupas img/animes/camiseta david.jpg" alt="cyber"/></a>
            <p>Cyberpunk Edge Runners</p>
        </div>
        <div>
            <a href=""><img src="/Assets/roupas img/snk/camiseta preta.jpg" alt="snk"/></a>
            <p>Atack on Titans</p>
        </div>
        <div>
            <a href=""><img src="/Assets/roupas img/feminina/saia/saia preta com corrente.jpg" alt="saia"/></a>
            <p>Korean</p>
        </div>
        <div>
            <a href=""><img src="/Assets/roupas img/feminina/camiseta/camiseta menina verde.jpg" alt="feminina"/></a>
            <p>Feminino</p>
        </div>
        <div>
            <a href=""><img src="/Assets/roupas img/jjk/camiseta sukuna 2.jpg" alt="jjk"/></a>
            <p>Jujutsu Kaizen</p>
        </div>
    </div>
    </section>



    <section class="sessao__instagram">
        <div class="container__instagram">
        <div class="insta_all">
            <a href="https://www.instagram.com/animix.set/"><img src="/Assets/icons/instagram.png" alt="icon insta"/></a>
        <div class="insta">
            <h3>Siga nosso</h3>
            <h4>Instagram</h4>
        </div>
        </div>
        <div class="img__insta">
            <img src="/Assets/images/chain.jpg" alt="chain" class="chain"/>
            <img src="/Assets/images/pexels-justin-l-u-c-k-5707180.jpg" alt="homi" class="modelo1"/>
            <img src="/Assets/images/pexels-th-team-7516447.jpg" alt="muie" class="muie"/>
            <img src="/Assets/images/modelo rosa 2.webp" alt="rosa" class="rosa"/>
        </div>
        </div>
    </section>


    <footer class="sessao__footer">
        <div class="footer__content">
            <div class="row-footer">
                <div class="footer-col">
                    <h4>Institucional</h4>
                 <ul>
                    <li><a href="">Sobre a Empresa</a></li>
                 </ul>      
                </div>
                <div class="footer-col">
                    <h4>Duvidas</h4>
                 <ul>
                    <li><a href="">Ajuda</a></li>
                    <li><a href="">Política e Privacidade</a></li>
                    <li><a href="">Política de troca e devolução</a></li>
                    <li><a href="">Pagamento e envio</a></li>
                 </ul>      
                </div>
                <div class="footer-col">
                    <h4>Institucional</h4>
                 <ul>
                    <li><a href="">Atendimento</a></li>
                    <li><a href="">Dúvidas?</a></li>
                    <li><a href="">Fale Conosco</a></li>
                 </ul>      
                </div>
                <div class="footer-col">
                    <h4>Quer ficar por dentro das novidades?</h4>
                 <div class="form-sub">
                    <form>
                        <input type="email" placeholder="Digite o seu e-mail" required class="email"/>
                        <button>Inscreva-se</button>
                    </form>
                 </div>    
                </div>
            </div>
        </div>
    </footer>
</section>
  );
}