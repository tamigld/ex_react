import "./style.css"
import CardDev from "../../components/cardDev"
import { useState } from "react"

export default function ListaDevs(){
    // variável p armazenar todos os devs que temos disponíveis
    const [devs, setDevs] = useState<any[]>([
        {
            img_perfil: "https://github.com/Thiago-Nascimento.png",
            nome: "Thiago Nascimento",
            email: "thiago@email.com",
            skills: ["HTML", "CSS", "REACT"]
        },
        {
            img_perfil: "https://github.com/JessicaSanto.png",
            nome: "Jessica Franzon",
            email: "jessica@email.com",
            skills: ["HTML", "CSS", "REACT"]
        },
        {
            img_perfil: "https://github.com/odirlei-assis.png",
            nome: "Odirlei Sabella",
            email: "odirlei@email.com",
            skills: ["HTML", "CSS", "ANGULAR"]
        },
        {
            img_perfil: "https://github.com/alexiamelhado18.png",
            nome: "Aléxia Vitória",
            email: "alexia@email.com",
            skills: ["PYTHON", "VUE", "REACT"]
        },
        {
            img_perfil:"https://avatars.githubusercontent.com/u/127408948?v=4",
            nome: "Thamires Galdino",
            email: "thami.galves@outlook.com",
            skills: ["HTML","CSS","FIGMA"]
        }
    ])

    const [skillDigitada, setSkillDigitada] = useState<string>("");
    // variável de skill que foi digitada

    const [listaDevsFiltrados, setListaDevsFiltrados] = useState<any[]>(devs);
    // variável de lista de devs que foram filtrados por skill

    function buscarPorSkill(event: any){
        event.preventDefault()

        const devsFiltrados = devs.filter((dev: any) => dev.skills.includes(skillDigitada.toLocaleUpperCase()));

        if(devsFiltrados.length === 0){
            alert("Nenhum desenvolvedor(a) com essa skill.")
        } else {
            setListaDevsFiltrados(devsFiltrados)
        }
    }

    function retornoDevsGeral(event: any){
        if(event.target.value === ""){
            setListaDevsFiltrados(devs)
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
                        {listaDevsFiltrados.map((dev:any, index:number) =>{
                            return <li>
                                <CardDev
                                foto={dev.img_perfil}
                                nome={dev.nome}
                                email={dev.email}
                                techs={dev.skills}
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

