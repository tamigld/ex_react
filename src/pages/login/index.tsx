import './style.css'

function Login(){
    return(
        <>
            <main>
        <div className="container container_login">
            <div className="login_conteudo">
                <h1>Login</h1>
                <hr/>
                <form className="login_formulario" action="">
                    <div className="login_box_input">
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" id="email" placeholder="Digite aqui seu e-mail:"/>
                    </div>
                    <div className="login_box_input">
                        <label htmlFor="senha">Senha:</label>
                        <input type="password" id="senha" placeholder="Digite aqui sua senha:"/>
                    </div>
                    <input className="login_botao" type="button" value="Logar"/>
                </form>
            </div>
        </div>
    </main>

        </>
    )
}

export default Login