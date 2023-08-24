import { useEffect, useState } from "react"
import "./style.css"
import api from "../../utils/api"
import CardServ from "../../components/cardServ"
import { Link } from "react-router-dom"


function ListaServ(){

    const [servicos, setServicos] = useState<any[]>([])
    //variável para definir a lista de seriços, que está vazia
    
    const [techDigitada, setTechDigitada] = useState<string>("");
    // variável de skill que foi digitada
    
    // const [listaServicosFiltrados, setListaServicosFiltrados] = useState<any[]>([]);
    // variável de lista de serviços que foram filtrados por skill
    
    useEffect(() =>{
        document.title = "VSConnect - Lista de Serviços"
        listarServicos()
    }, [])

    function listarServicos(){
        api.get("servicos").then((response:any) => {
            // console.log(response.data)
            setServicos(response.data)
        }).catch(error => console.log("Erro ao obter os dados de serviço.", error));
    }

    function buscarPorSkill(event: any){
        event.preventDefault()

        const servicosFiltrados = servicos.filter((servico: any) => servico.techs.includes(techDigitada.toLocaleUpperCase()));

        if(servicosFiltrados.length === 0){
            alert("Nenhum serviço com essa skill.")
        } else {
            // console.log(servicosFiltrados)
            setServicos(servicosFiltrados)
            // define os serviços com os que foram filtrados
            // ANTES (NÃO FUNCIONAVA MAIS): setListaServicosFiltrados(servicosFiltrados)
        }
    }

    function retornoServicosGeral(event: any){
        if(event.target.value === ""){
            listarServicos()
        }
        setTechDigitada(event.target.value)
        // é o alvo da função
        // se o alvo estiver vazio, a função irá carregar a lista de serviços com a function listarServicos()
    }



    return (
    <>
        <div id="sombra"/>

        <main id="lista-servicos" onSubmit={buscarPorSkill}>
            <div className="container container_lista_servicos">
                <div className="lista_servicos_conteudo">
                    <h1>Lista de Serviços</h1>
                    <hr/>
                    <form method="post">
                        <div id="wrapper_form" className="wrapper_form">
                            <label htmlFor="busca">Procurar serviços</label>
                            <div className="campo-label">
                                <input type="search" name="campo-busca" id="busca" placeholder="Buscar serviços por tecnologias..." onChange={retornoServicosGeral}/>
                                <button type="submit">Buscar</button>
                            </div>
                        <div className="link_cadastrar">
                        <Link className="link" to="/cadastroServico">Cadastrar um serviço</Link>
                        </div>
                        </div>
                    </form>
                    <div className="wrapper_lista">
                    <ul>
                        {servicos.map((servico:any, index:number) =>{
                            return <li key={index}>
                                <CardServ
                                id={servico.id}
                                titulo={servico.nome}
                                valor={servico.valor}
                                descricao={servico.descricao}
                                techs={servico.techs}
                                />
                            </li>
                        }
                        )}
                    </ul>

                    </div>
                </div>
            </div>
        </main>
    
    </>
    )
}

export default ListaServ