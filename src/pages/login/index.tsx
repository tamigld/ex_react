//estilização
import "./style.css";

import { useEffect, useState } from "react";

import api from "../../utils/api";
import { useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";



function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState<String>("");
    const [senha, setSenha] = useState<String>("");


    function realizarAutenticacao(event: any) {

        event.preventDefault();

        const usuario = {
            email: email,
            password: senha
        };


        api.post("login", usuario).then((response: any) => {

                secureLocalStorage.setItem("user", response.data)
                console.log(response.data);

                navigate("/perfil/" + response.data.user.id);
                navigate(0);
            
            }).catch((error: any) => {
                alert("Não foi possível realizar o login.");
                console.log(error);
            })
    }


    useEffect(() => {
        document.title = "Login - VSConnect"
    })

    return (
        <main id="main_login">
            <div className="container container_login">
                <div className="login_conteudo">
                    <h1>Login</h1>
                    <hr />
                    <form onSubmit={realizarAutenticacao} className="login_formulario" method="POST">
                        <div className="login_box_input">
                            <label htmlFor="email">E-mail:</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Digite aqui seu e-mail:"
                                required
                                onChange={(e)=> setEmail((e.target.value))}
                            />
                        </div>
                        <div className="login_box_input">
                            <label htmlFor="senha">Senha:</label>
                            <input
                                type="password"
                                id="senha"
                                placeholder="Digite aqui sua senha:"
                                required
                                onChange={(e) => setSenha((e.target.value))}
                            />
                        </div>
                        <button className="login_botao" type="submit">Logar</button>
                    </form>
                </div>
            </div>
        </main>

    );
}

export default Login;