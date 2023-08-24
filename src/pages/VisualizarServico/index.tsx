//estilização
import "./style.css";


import {Link, useParams} from "react-router-dom"

import { useEffect, useState } from "react";

import api from "../../utils/api";

function VisualizarServico() {
    function parseSkill(){
        if(typeof listaSkills === "string"){
            return JSON.parse(listaSkills)
        } else {
            return listaSkills
        }
    }

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

    function apagarServicoPorID(event:any){
        // if(idServico === "1" && "2" && "3"){
        //     event.preventDefault()
        //     alert("Não é possível deletar este serviço!")
        // } else{
            const resposta = confirm("Tem certeza que deseja deletar este serviço?")

            if(resposta === true){
                api.delete(`servicos/${idServico}`).then((response:any) => {
                    alert("O serviço foi deletado com sucesso!")
                }).catch((error) => {
                    console.log(error)
                })
            } else {event.preventDefault()}
    }
    // código de estudo e teste - NÃO FOI PASSADO EM AULA
    // AJUSTAR PRIMEIROS SERVIÇOS

    useEffect(() => {
        buscarServicoPorID()
        document.title = "Serviço " + titulo + " - VSConnect"
    },[])


    return (
        <main id="main_visualizarservico">
            <div className="container">
                <h1>Serviço</h1>
                <div className="servico">
                    <div className="topo_servico">
                        <h2>{titulo}</h2>
                        <span>{valor}</span>
                    </div>
                    <p>{descricao}</p>
                    <div className="techs">
                        {
                            parseSkill().map((skill:any, index: number) => {
                                return <span key={index}>{skill}</span>
                            })
                        }
                    </div>
                    <footer>
                        <div>
                        <Link className="link" to={"../listaServicos"}>
                            <svg className="icon_voltar" xmlns="http://www.w3.org/2000/svg "
                                viewBox="0 0 512 512">{/*  Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                <path
                                    d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                            </svg>
                        </Link>
                        <Link onClick={apagarServicoPorID} className="link" to={"../listaServicos"}>
                            <svg className="icon_apagar" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z"/><path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z"/><path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"/>
                            </svg>
                        </Link>
                        </div>
                    </footer>

                </div>
            </div>

        </main>);
}

export default VisualizarServico;