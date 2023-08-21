import "./style.css"
import { Link } from "react-router-dom"


export default function CardDev(props: any) {
    return (
        <>
            <div className="dev">
                <div className="grupo_contato">
                    <img src={"http://localhost:3000/static/"+props.foto} alt="" />
                    <div className="contato_dev">
                        <h3>{props.nome}</h3>
                        <p>{props.email}</p>
                        <Link className="linkPerfil" to={ "/perfil/" + props.id }>{ "Acessar perfil" }</Link>
                    </div>
                </div>
                <div className="techs">
                    {
                        props.techs.map((tech: string, index: number) => {
                            return <span key={index}>{tech}</span>
                        })
                    }
                </div>
            </div>
        </>
    )
}