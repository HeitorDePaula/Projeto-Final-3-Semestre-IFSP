import '../Style/Contato.css'

const Contato = () => {
    return (
        <div className='contato-container'> 
        <section>
            <h1>Contate-nos</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an</p>
            <form>
                <label>Nome</label>
                <input type='text' name='name' />
                <label>Email</label>
                <input type='email' name='email' />
                <label>Mensagem</label>
                <textarea name='mensagem' cols='35' rows='10'></textarea>
            
                <div className='botao'>
                <button type='submit'>Enviar</button>
                </div>
            </form>
        </section>
        </div>
    );
  }
  
export default Contato;