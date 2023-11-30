import '../user/user.scss'
import lupa from '../assets/icones/lupa.png'
import logo from '../assets/icones/logo-removebg-preview.png'
import perfil from '../assets/icones/do-utilizador.png'
import comu from '../assets/icones/comunidade.png'
import add from '../assets/icones/aba.png'
import explorar from '../assets/icones/explorar.png'
import game from '../assets/icones/controle-de-video-game.png'
import design from '../assets/icones/design-grafico.png'
import lab from '../assets/icones/laboratorio.png'
import tec from '../assets/icones/lasca.png'
import arte from '../assets/icones/estudos-de-arte.png'
import user1 from '../assets/images/user__sentido.png'
import { Link } from 'react-router-dom';
import user2 from '../assets/images/user_post.png'
import post1 from '../assets/images/post1.png'
import post4 from '../assets/images/imgPost4.png'
import seguir from '../assets/icones/seguir.png'
import cancel from '../assets/icones/cancelar.png'

export default function user() {


    return (
        <div className='pagina-user'>
            <header class="cabecalho">
        <div class="search-container">
            <input type="text" class="search-box"/>
            <div class="search-icon"><img src={lupa} alt="lupa"/></div>
          </div>
        <div class="social">
            <a href="/comunidade"><img src={comu} alt="comunidade" class="comunidades" /></a>
            <a href="/login"><img src={perfil} alt="user" class="user" /></a>
        </div>
    </header>

   <div class="slidebar">
        <ul class="menu">
            <a href="#"><img src={logo} alt="logo Think & Share" class="logo__principal" /></a>
            <a href="/criar comunidade"><button class="btn__criar">
                <img src={add} alt="icone de editar" class="icon__criar" />Criar comunidade
            </button></a>
            <li class="menu__div">
                <a href="#" class="menu__link">
                    <img src={explorar} alt="explorar" class="explorar" />Explorar
                </a>
            </li>

            <li class="menu__div">
                <a href="#" class="menu__link">
                    <img src={game} alt="games" class="games" />Games
                </a>
            </li>
            <li class="menu__div">
                <a href="#" class="menu__link">
                    <img src={design} alt="Design" class="design" />Design
                </a>
            </li>
            <li class="menu__div">
                <a href="#" class="menu__link">
                    <img src={lab} alt="ciencias" class="ciencias" />Ciências
                </a>
            </li>
            <li class="menu__div">
                <a href="#" class="menu__link">
                    <img src={tec} alt="tec" class="tec"/>Tecnologia
                </a>
            </li>
            <li class="menu__div">
                <a href="#" class="menu__link">
                    <img src={arte} alt="arte" class="arte"/>Artes
                </a>
            </li>
        </ul>
   </div>

   <div class="box__sentindo">
    <img src={user1} alt="user" class="img__user"/>
    <div class="seguir">
        <h2>Engineer from Team Fortress</h2>
        <div class="seguidores">
            <img src={seguir} alt="seguir" class="seguir2"/>
            <p>30 seguidores</p>
            <p>10 seguindo</p>
        </div>
        <div class="historia">
            <p>Dell Conagher, better known as the Engineer, is a major protagonist and 
                one of the nine playable classes in Team Fortress 2. 
                He is a soft-spoken and amiable Texan with an interest in all things mechanical.</p>
        </div>
    </div>
   </div>

   <div class="box__comunidade">
    <ul>
        <li class="comu__div">
            <h2>comunidades que você faz parte</h2>
            <a href="#" class="comu__link">
                <img src={game} alt="games" class="games"/>Games
            </a>
        </li>
        <li class="comu__div">
            <a href="#" class="comu__link">
                <img src={design} alt="Design" class="design"/>Design
            </a>
        </li>
    </ul>
   </div>

   <section class="post">
   <div class="posting">
        <div class="post__container">
            <div class="user__post">
                <img src={user2} class="img__user" />
                <a href="#">Heavy Weapons Guy</a>
            </div>
            <div class="descricao__post">
                <h2>Qual é a coisa mais aleatória sobre computadores
                     que você sabe e a maioria das pessoas não?</h2>
                <p>Quando eu era criança, alguém me disse que você poderia assistir 
                    toda a série Star Wars pelo terminal de comandos, apenas com caracteres do teclado. Para um computador Windows: 
                    Passo 1: Abra o terminal no seu PC, digite o comando abaixo e pressione ↵Enter. 
                    pkgmgr /iu:"TelnetClient" Se você ver uma...<button>Ver mais</button></p>
            </div>
        </div>
        <div class="img__post">
            <img src={post1} alt="terminal cmd" class="imgPost" />
        </div>
        <div class="container__icons">
            <a href="#"><i class="fa-regular fa-thumbs-up" ></i>Like</a>
            <a href="#"><i class="fa-regular fa-thumbs-down" ></i>Deslike</a>
            <a href="#"><i class="fa-regular fa-heart" ></i>Amei</a>
            <a href="#"><i class="fa-solid fa-share-nodes" ></i>Salvar</a>
        </div>
    

        <div class="acoes">
            <button class="btn__criar">
                <img src={add} alt="icone de editar" class="icon__criar"/>Editar
            </button>
            <button class="btn__cancelar">
                <img src={cancel} alt="icone de cancelar" class="icon__criar"/>Delete
            </button>
        </div>
    </div>
    
    <div class="posting">

        <div class="post__container">
            <div class="user__post">
                <img src={user2} alt="usuario" class="img__user" />
                <a href="#">Heavy Weapons Guy</a>
            </div>
            <div class="descricao__post">
                <h2>Por que alguns jogos e programas esquentam tanto o notebook?</h2>
                <p>Então, eu estava enfrentando aquele problema chato de superaquecimento no meu notebook. 
                Sabe como é, quando a gente passa horas jogando ou trabalhando, o bichinho esquenta que é uma loucura. 
                Aí pensei: "Preciso encontrar uma solução pra isso!"
                 E foi quando conheci esse cooler incrível. Primeiro de...<button>Ver mais</button></p>
            </div>
        </div>
        <div class="img__post">
            <img src={post4} alt="terminal cmd" class="imgPost" />
        </div>
        <div class="container__icons">
            <a href="#"><i class="fa-regular fa-thumbs-up" ></i>Like</a>
            <a href="#"><i class="fa-regular fa-thumbs-down" ></i>Deslike</a>
            <a href="#"><i class="fa-regular fa-heart" ></i>Amei</a>
            <a href="#"><i class="fa-solid fa-share-nodes" ></i>Salvar</a>
        </div>
        <div class="acoes">
            <button class="btn__criar">
                <img src={add} alt="icone de editar" class="icon__criar"/>Editar
            </button>
            <button class="btn__cancelar">
                <img src={cancel} alt="icone de cancelar" class="icon__criar"/>Delete
            </button>
        </div>
    </div>
</section>

   <script src="https://kit.fontawesome.com/367f16fb48.js" crossorigin="anonymous"></script>

        </div>
    );
}