import "./style.css"
import CardDev from "../../components/cardDev"
import { useEffect, useState } from "react"

import api from "../../utils/api"
// CONSUMINDO UMA API - aula 16/08
// por aqui que fazemos requisições para a api deste arquivo



export default function ListaDevs(){
    // variável p armazenar todos os devs que temos disponíveis
    const [devs, setDevs] = useState<any[]>([])
    // devs: lista, setDevs: função para definir os devs
    // aqui está VAZIO, definimos os devs puxando no json server, função linha 23

    const [skillDigitada, setSkillDigitada] = useState<string>("");
    // variável de skill que foi digitada

    const [listaDevsFiltrados, setListaDevsFiltrados] = useState<any[]>(devs);
    // variável de lista de devs que foram filtrados por skill

    useEffect(() => {
        document.title = "VSConnect - Lista de Devs"
        // muda o título da página
        listarDesenvolvedores()
        // função de listar desenvolvedores que está escrito na linha 50
    }, [])
    // FUNÇÃO | assim que carregar o componente, ele vai realizar uma tarefa (é um hook)

    function listarDesenvolvedores(){
        // ao pegar os usuarios da api (get) então quando (then) ele tiver resposta (response:any) irá fazer => {o que está aqui dentro}
        api.get("users").then((response: any) => {
            console.log(response.data)
            setDevs(response.data)
            // define os devs como a resposta que veio da api (localhost:3000/users)
        }).catch(error => console.log("Erro ao obter os dados dos desenvolvedores.", error));
    }

    
    function buscarPorSkill(event: any){
        event.preventDefault()

        const devsFiltrados = devs.filter((dev: any) => dev.hardSkills.includes(skillDigitada.toLocaleUpperCase()));

        if(devsFiltrados.length === 0){
            alert("Nenhum desenvolvedor(a) com essa skill.")
        } else {
            // setListaDevsFiltrados(devsFiltrados)
            setDevs(devsFiltrados)
        }
    }

    function retornoDevsGeral(event: any){
        if(event.target.value === ""){
            listarDesenvolvedores()
        }
        setSkillDigitada(event.target.value)
        // é o alvo da função
    }

    return(
        <main id="lista-devs" onSubmit={buscarPorSkill}>
        <div className="container container_lista_devs">
            <div className="lista_devs_conteudo">
                <h1>Lista de Devs</h1>
                <hr/>
                <form method="post">
                    <div className="wrapper_form">
                        <label htmlFor="busca">Procurar desenvolvedores</label>
                        <div className="campo-label">
                            <input type="search" name="campo-busca" id="busca" placeholder="Buscar desenvolvedores por tecnologias..." onChange={retornoDevsGeral}/>
                            <button type="submit">Buscar</button>
                        </div>
                    </div>
                </form>
                <div className="wrapper_lista">
                    <ul>
                        {devs.map((dev:any, index:number) =>{
                            return <li key={index}>
                                <CardDev
                                id={dev.id}
                                foto={dev.user_img}
                                nome={dev.nome}
                                email={dev.email}
                                techs={dev.hardSkills}
                                />
                            </li>
                        }
                        )}
                    </ul>
                </div>
            </div>
        </div>
    </main>

    )
}

