import imgDev from "../../assets/img/dev.png"
import logo from "../../assets/img/logo.svg"
import logoFacebook from "../../assets/img/facebook.svg"
import logoInstagram from "../../assets/img/instagram.svg"
import logoLinkedin from "../../assets/img/linkedin.svg"
import "./style.css"

function Footer() {
    
    return(
        <> 
            <footer>
                <div className="container rodape">
                    <div className="span_dicas">
                        <img src={imgDev} alt="" />
                        <div className="span_dicas_texto">
                            <p>
                                Temos algumas dicas para o seu serviço ou freela ser um sucesso,
                                acesse nossa página de recomendações para saber mais.
                            </p>
                            <a className="botao botao_dicas" href="#">
                                mais dicas
                            </a>
                        </div>
                    </div>
                    <div className="rodape_conteudo">
                        <div className="rodape_conteudo_paginas">
                            <h2>Páginas</h2>
                            <ul>
                                <li>Login</li>
                                <li>Home</li>
                                <li>Listar Serviços</li>
                                <li>Cadastrar Cliente</li>
                                <li>Cadastrar Desenvolvedor</li>
                            </ul>
                        </div>
                        <img src={logo} alt="" />
                        <div className="rodape_conteudo_contatos">
                            <h2>Contatos</h2>
                            <div>
                                <a href="#">
                                    <img src={logoFacebook} alt="" />
                                </a>
                                <a href="#">
                                    <img src={logoInstagram} alt="" />
                                </a>
                                <a href="#">
                                    <img src={logoLinkedin} alt="" />
                                </a>
                            </div>
                            <a href="mailto:">contato@vsconnect.com</a>
                        </div>
                    </div>
                    <p>todos os direitos reservados ©.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer