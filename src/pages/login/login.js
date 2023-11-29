import '../login/login.scss'
import { Link } from 'react-router-dom';



export default function login() {


    return (
        <div className='login'>
            <div class="main-login">
        <div class="left-login">
            <h1>Faça Login<br/>E entre para a <span>Think & Share</span></h1>
            <img src="/pages/assets/images/animaçãologin.svg" class="image"alt=" astronaut-animate"/>
        </div>
            <div class="right-login"> 
                <div class="card-login"> 
                    <img src="/pages/assets/icones/logo-removebg-preview.png" alt="logo Think Share" class="logo"/>
                    <div class="textfield">
                        <label for="usuario">Usuário</label>
                        <input type="text" name="usuario" placeholder="Usuário"/>
                    </div>
                    <div class="textfield"> 
                        <label for="senha">Senha</label>
                        <input type="password" name="senha" placeholder="Senha"/>
                    </div>
                    <button class="btn-login">Login</button> 
                    <div class="striped">
                        <p>____________________</p>
                        <p class="meio" >OU</p>
                        <p>____________________</p>          
                    </div>
                    <a class="cadastro__button" href="/cadastro">Cadastre-se</a>
                          
                    </div>
                </div>
                </div>
    </div>
    )
}