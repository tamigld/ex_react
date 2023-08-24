import "./style.css"

import Logo from "../../assets/img/logo.svg"
import ImgClientes from "../../assets/img/clientes.png"
import ImgMaosDev from "../../assets/img/maos_dev.png"
import ImgAlfinete from "../../assets/img/alfinete.png"

import Footer from '../../components/footer'


import {Link} from 'react-router-dom'
import { useEffect } from "react"


function Home() {
    // Paranaue de typescript

    function mostrarMenu(){
        let menu: any = document.getElementById("menu_links"); // Obtém o elemento do menu pelo ID
        let sombra: any = document.getElementById("sombra"); // Obtém o elemento da sombra pelo ID
        let menu_barras: any = document.getElementById("menu_barras"); // Obtém o elemento do botão do menu pelo ID

        let body: any = document.getElementsByTagName("body")[0]; // Obtém o elemento body (primeiro elemento)

        if (window.getComputedStyle(menu).left != "10px") { // Verifica se a propriedade 'left' do estilo computado do elemento do menu é diferente de 10px
            menu.style.left = "10px"; // Define a posição 'left' do menu como 10px movendo ele para direita
            sombra.style.right = "-10vw"; // Move a sombra para a direita
            menu_barras.setAttribute("aria-expanded", "true"); // Atualiza o atributo 'aria-expanded' para 'true'
            menu_barras.setAttribute("aria-label", "fechar menu"); // Atualiza o atributo 'aria-label' para 'fechar menu'
            body.style.overflow = "hidden"; // Define o overflow do body como "hidden" para evitar a rolagem da página
        } else {
            menu.style.left = "-300px"; // Esconde o menu deslocando-o para esquerda
            sombra.style.right = "110vw"; // Move a sombra para a esquerda para ocultá-la
            menu_barras.setAttribute("aria-expanded", "false"); // Atualiza o atributo 'aria-expanded' para 'false'
            menu_barras.setAttribute("aria-label", "abrir menu"); // Atualiza o atributo 'aria-label' para 'abrir menu'
            body.style.overflow = "auto"; // Restaura o overflow do body para o valor padrão (auto)
        }
        menu_barras.classList.toggle("ativo"); // Alterna a classe 'ativo' no botão do menu
    
    }

    useEffect(() => {
        document.title = "VSConnect - Home"
    })

    return (
        <>
            <div id="sombra" />
            <main id="main">
                <h1>página inicial VSconnect</h1>
                <section className="banner">
                    <div className="banner_conteudo">
                        <span className="banner_slogan_l1">VSConnect</span>
                        <p className="banner_slogan_l2">
                            Conectando os melhores desenvolvedores independentes às mais diversas
                            oportunidades.
                        </p>
                        <p className="banner_slogan_l3">
                            Conecte-se e comece a desvendar esse mundo!
                        </p>
                        <div className="banner_botoes">
                            <a className="botao banner_botao_dev" href="#">
                                desenvolvedor
                            </a>
                            <a className="botao banner_botao_cli" href="#">
                                cliente
                            </a>
                        </div>
                    </div>
                </section>
                <section className="container para_clientes">
                    <div className="span_cliente">
                        <p>
                            Desde 2015 unindo propósitos.
                            <br />
                            Uma nova forma de conectar pessoas.
                        </p>
                    </div>
                    <div className="clientes_conteudo">
                        <img src={ ImgClientes } alt="" />
                        <div className="clientes_texto">
                            <h2>para clientes</h2>
                            <ul>
                                <li>cadastrar serviços</li>
                                <li>procurar por desenvolvedores</li>
                            </ul>
                            <div>
                            <Link className="botao clientes_botao_cli" to="cadastroUsuario">Criar conta</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="conexao" />
                <section className="container para_devs">
                    <div className="devs_texto">
                        <h2>para desenvolvedores</h2>
                        <ul>
                            <li>encontrar serviços</li>
                            <li>divulgar suas hardskills</li>
                        </ul>
                        <div>
                        <Link className="botao clientes_botao_devs" to="cadastroUsuario">Criar conta</Link>
                        </div>
                    </div>
                    <img src={ ImgMaosDev } alt="" />
                </section>
                <section className="container servicos">
                    <h2>serviços</h2>
                    <div className="servicos_cards">
                        <div className="card card1">
                            <img src={ ImgAlfinete } alt="" />
                            <h3>Aplicativo para PetShop</h3>
                            <p>
                                Possuo um Petshop e gostaria de um aplicativo para que meus clientes
                                pudessem agendar serviços como: banho e tosa, taxi dog, hotelzinho e
                                etc.
                            </p>
                            <p>Proposta: A Combinar</p>
                        </div>
                        <div className="card card2">
                            <img src={ ImgAlfinete } alt="" />
                            <h3>Site para Pizzaria</h3>
                            <p>
                                Preciso de um site para divulgar o sabores das pizzas, o endereço,
                                os telefones de contato, nossas redes sociais.
                            </p>
                            <p>Proposta: R$750,00</p>
                        </div>
                    </div>
                    <Link to="listaServicos">Ver mais serviços</Link>
                </section>
            </main>
            <Footer/>
        </>

    )
}

export default Home