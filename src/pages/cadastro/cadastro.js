import '../cadastro/cadastro.scss'
import { Link } from 'react-router-dom';



export default function cadastro() {


    return (
        <div className='pagina__cadastro'>
        
<div class="main-login">
    <div class="left-login">
        <h1>Faça seu Cadastro</h1>
        <img />
    </div>
        <div class="right-login"> 
            <div class="card-login"> 
                <h1 class="titulo__cadastro">Cadastro</h1>

                <div class="img__usuario">
                    <label for="arquivo">
                        <input type="file" name="arquivo" class="img__user"/>
                        foto de perfil</label>
                </div>
                
                <div class="textfield"> 
                    <label for="nome">Nome</label>
                    <input type="text" name="nome" placeholder="Nome"/>
                </div>
                <div class="textfield"> 
                    <label for="Email ou telefone">Email ou telefone</label>
                    <input type="text" name="email" placeholder="Email ou telefone"/>
                </div>
                <div class="textfield"> 
                    <label for="senha">Senha</label>
                    <input type="password" name="senha" placeholder="Senha"/>
                </div>
                <div class="textfield"> 
                    <label for="senha">Confirmar Senha</label>
                    <input type="password" name="senha" placeholder="Senha"/>
                </div>
                <button class="btn-login">Cadastre-se</button> 
                <a class="cadastro__button" href="/pages/login/login.html">Já tem conta?</a>
                      
                </div>
            </div>
            </div>
</div>
    )
}