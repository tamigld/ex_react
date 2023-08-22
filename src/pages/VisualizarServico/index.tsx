//estilização
import "./style.css";


import {Link, useParams} from "react-router-dom"

import { useEffect, useState } from "react";

import api from "../../utils/api";

function VisualizarServico() {

    const {idServico} = useParams()    

    const [titulo, setTitulo] = useState<string>("")
    const [valor, setValor] = useState<string>("")
    const [descricao, setDescricao] = useState<string>("")
    const [listaSkills, setListaSkills] = useState<string[]>([])

    function buscarServicoPorID(){
        api.get(`servicos/${idServico}`).then((response:any) => {
            setTitulo(response.data.nome)
            setValor(response.data.valor)
            setDescricao(response.data.descricao)
            setListaSkills(response.data.techs)
        }).catch((error) => {
            console.log("Erro ao buscar os dados", error)
        })
    }

    useEffect(() => {
        document.title = "Serviço " + titulo + " - VSConnect"
        buscarServicoPorID()
    },[])


    return (
        <main id="main_visualizarservico">
            <div className="container">
                <h1>Serviço</h1>
                <div className="servico">
                    <div className="topo_servico">
                        <h2>{titulo}</h2>
                        <span>R${valor}</span>
                    </div>
                    <p>{descricao}</p>
                    <div className="techs">
                        {
                            listaSkills.map((skill:any, index: number) => {
                                return <span key={index}>{skill}</span>
                            })
                        }
                    </div>
                    <footer>
                        <Link to={"../listaServicos"}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512">{/*  Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                <path
                                    d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                            </svg>
                        </Link>
                    </footer>

                </div>
            </div>

        </main>);
}

export default VisualizarServico;