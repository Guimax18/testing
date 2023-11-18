import '../jujutsu/jujutsu.scss';
import logo from '../assets/logo img/logo.animix.png'
import lupa from '../assets/icons/lupa-2.png'
import sacola from '../assets/icons/sacola-branca.png'
import perfil from '../assets/icons/perfil.png'
import { Link } from 'react-router-dom';


export default function Jujutsu() {


  return (
    <div className='pagina-jujutsu'>
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


    <section class="banner__principal">
        <div class="text__principal">
            <h1 class="texto1">Coleção Jujutsu Kaizen</h1> 
        </div>
    </section>


    <div class="logo__ilustration">
        <img src="/assets/logo img/logo jjk.jpg" alt="kny"/>
    </div>


    <section class="sessao__colecao">
        <div class="container__colecao">
        <div>
            <a href=""><img src="/Assets/roupas img/jjk/camiseta sukuna 2.jpg" alt="camisa_sukuna2" class="camisa_sukuna2"/></a>
            <p>Camiseta Sukuna Santuário</p>
            <p>R$50</p>
        </div>
        <div>
            <a href=""><img src="/Assets/roupas img/jjk/camiseta sukuta.jpg" alt="camiseta_sukuna" class="camiseta_sukuna"/></a>
            <p>Camiseta Sukuna</p>
            <p>R$45</p>
        </div>
        <div>
            <a href=""><img src="/Assets/roupas img/jjk/camiseta megume.jpg" alt="camiseta_megume" class="camiseta_megume"/></a>
            <p>Camiseta Megume Fushigurou</p>
            <p>R$50</p>
        </div>
        <div>
            <a href=""><img src="/Assets/roupas img/jjk/camiseta yuta.jfif" alt="camiseta_sukuna3" class="camiseta_sukuna3"/></a>
            <p>Camiseta Yuta e Rika</p>
            <p>R$50</p>
        </div>
        <div>
            <a href=""><img src="/Assets/roupas img/jjk/camiseta sukuna 3.jpg" alt="moletom_sukuna" class="moletom_sukuna"/></a>
            <p>Camiseta Itadori e Sukuna</p>
            <p>R$50</p>
        </div>
        <div>
            <a href=""><img src="/Assets/roupas img/jjk/moletom sukuna.jpg" alt="saia"/></a>
            <p>Moletom Sukuna</p>
            <p>R$80</p>
        </div>
        <div>
            <a href=""><img src="/Assets/roupas img/jjk/camiseta nobara.jpg" alt="camiseta_nobara" class="camiseta_nobara"/></a>
            <p>Camiseta Nobara</p>
            <p>R$50</p>
        </div>
        <div>
            <a href=""><img src="/Assets/roupas img/jjk/camiseta pai do megume.jpg" alt="camiseta_toji" class="camiseta_toji"/></a>
            <p>Camiseta Toji</p>
            <p>R$50</p>
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
    </div>
  )
  
}