import './Login.scss';
import { Link } from 'react-router-dom';


export default function Login() {


  return (
    <div className='pagina-login'>
    <main class="main">
        <div class="container">
            <section class="wrapper">
                <div class="heading">
                    <h1 class="text text-large">Login ADM</h1>
                </div>
                <form action="" name="login" class="form">
                    <div class="input-control">
                        <p class="email">E-mail</p>
                <input type="text"/>
            </div>
            <div class="input">
                <p class="senha">Senha</p>
                <input type="password" />
            </div>
                    <div class="input-control">
                        <a href="#" class="text text-links">Esqueceu a senha?</a>
                    </div>
                   <button type="submit"><a href="/Administrador/adm.html">Entrar</a></button>   
                </form>
                <div class="striped">
                    <p>______________________</p>
                    <p>OU</p>
                    <p>______________________</p>
                    
                </div>
                <div class="method">
                    <div class="login-form-footer">
                        <a href="#">
                          <img src="/assets/icons/simbolo-de-aplicativo-do-facebook.png" alt="Facebook" class="face"/></a>
                        <a href="#">
                          <img src="/assets/icons/google.png" alt="Google" class="google"/></a>
                      </div>
                </div>
            </section>
        </div>
    </main>
    </div>
  );
  
}
