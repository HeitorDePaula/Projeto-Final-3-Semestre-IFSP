import React from "react"
import '../Style/login.css'

function Login() {
    return (
        <div className='content-sob'>
           <form action="processar_formulario.php" method="post" enctype="multipart/form-data">
            <h2>2</h2>
            <label for="nome_barbearia">Nome da Barbearia:</label>
            <input type="text" id="nome_barbearia" name="nome_barbearia" required/>
        
            <label for="logo">Logo:</label>
            <input type="file" id="logo" name="logo" accept="image/*" required/>
        
            <label for="sobre">Sobre:</label>
            <textarea id="sobre" name="sobre" rows="4" required></textarea>
        
        </form>
        </div>

    );
}

export default Login;