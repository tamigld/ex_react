import './style.css'

import logo from "../../assets/img/homepage/logo.png"
import admIcon from "../../assets/img/adm-icon.png"

export default function Header(){
    return(
        <header id='header'>
            <img className='logoHeader' src={logo} alt="" />
            <nav>
                <a href="#">Home</a>
                <a href="#">Eventos</a>
                <a href="#">Usuários</a>
                <a href="#">Contatos</a>
                <div>
                    <a
                    style={{
                        display: "flex",
                        gap: "20px",
                        alignItems: "center"
                    }}
                    href="#"
                    >Administrador
                    <img 
                    style={{
                        width: "auto",
                        height: "15px"
                    }}
                    src={admIcon}
                    alt=""
                    />
                    </a>
                </div>
            </nav>
        </header>
    )
}