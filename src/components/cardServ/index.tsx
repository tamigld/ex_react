import "./style.css"
import { Link } from "react-router-dom"

export default function CardServ(props: any) {

    function parseTechs(){
        if(typeof props.techs === "string"){
            return(JSON.parse(props.techs))
        } else{
            return props.techs
        }
    }

    return (
        <div className="servico" id="card-serv">
            <div className="topo_servico">
                <h3>
                <Link className="Link" to={ "/listaServicos/" + props.id }>{props.titulo}</Link>
                </h3>
                <span>{props.valor}</span>
            </div>
            <p>{props.descricao}</p>
            <div className="techs">
                {
                    parseTechs().map((techs: string, index: number) => {
                        return <span key={index}>{techs}</span>
                    })
                }
            </div>
        </div>
    )
}