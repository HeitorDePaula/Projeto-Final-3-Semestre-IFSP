import React from "react"
import '../Style/login.css'

function Login() {
    return (
        <div className='content-sob'>
           <form action="processar_formulario.php" method="post" enctype="multipart/form-data">
            <div className="container">
                <h2 className="etpapa1">1</h2>
                <label for="nome_completo">Nome Completo:</label>
                <input type="text" id="nome_completo" name="nome_completo" required/>
            
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required/>
            
                <label for="cpf">CPF:</label>
                <input type="text" id="cpf" name="cpf" required/>
            
                <label for="nome_usuario">Nome de Usuário:</label>
                <input type="text" id="nome_usuario" name="nome_usuario" required/>
            
                <label for="whatsapp">Whatsapp:</label>
                <input type="text" id="whatsapp" name="whatsapp" required/>
            
                <label for="senha">Senha:</label>
                <input type="password" id="senha" name="senha" required/>
            
                <label for="confirmar_senha">Confirmar Senha:</label>
                <input type="password" id="confirmar_senha" name="confirmar_senha" required/>
            </div>
            
        </form>
        </div>

    );
}

export default Login;