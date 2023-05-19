import React from "react"
import '../Style/login.css'

function Login() {
    return (
        <div className='content-sob'>
           <form action="processar_formulario.php" method="post" enctype="multipart/form-data">
            <h2>3</h2>
            <label for="cor_primaria">Cor Primária:</label>
            <input type="color" id="cor_primaria" name="cor_primaria" required/>
        
            <label for="cor_fundo">Cor de Fundo:</label>
            <input type="color" id="cor_fundo" name="cor_fundo" required/>
        
            <label for="cor_secundaria">Cor Secundária:</label>
            <input type="color" id="cor_secundaria" name="cor_secundaria" required/>
        
            <label for="cor_texto">Cor do Texto:</label>
            <input type="color" id="cor_texto" name="cor_texto" required/>
        
            <h2>Carrossel de Imagens</h2>
            <input type="file" id="carrossel_imagens" name="carrossel_imagens[]" accept="image/*" multiple required/>
        
            <input type="submit" value="Enviar"/>
        </form>
        </div>

    );
}

export default Login;