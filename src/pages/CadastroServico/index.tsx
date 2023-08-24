//estilização
import "./style.css";

//Hook
import { useEffect, useState } from "react";

import api from "../../utils/api";

export default function CadastroServico() {
 
    const [nome, setNome] = useState<string>("")
    const [valor, setValor] = useState<string>("")
    const [descricao, setDescricao] = useState<string>("")
    const [techs, setTechs] = useState<string[]>([
        "HTML",
        "CSS",
        "JAVASCRIPT"
    ])
    // state com as tecnlogias definidas

    const [skillsSelecionadas, setSkillsSelecionadas] = useState<string[]>([])
    // Array (lista) para armazenar as skills selecionadas

    const [select, setSelect] = useState<string>("")
    // state que contém a opção de skill selecionada pelo usuário
 

    function cadastrarServico(event:any){
        event.preventDefault()

        const formdata = new FormData()

        formdata.append("nome", nome)
        formdata.append("valor", valor)
        formdata.append("descricao", descricao)
        formdata.append("techs", JSON.stringify(techs))

        api.post("servicos", formdata).then((response:any) => {
            console.log(response)
            alert("Serviço cadastrado com sucesso!😊")
        }).catch((error) => {
            console.log(error)
        })

        api.post

    }

    function mascaraValor(event:any) {
        let valorDigitado = event.target.value; // Obtém o valor do elemento que acionou o evento, neste caso o valor digitado no input
    
        valorDigitado = valorDigitado.replace(/\D/g, ''); // Remove todos os caracteres não numéricos do valor (deixa apenas os dígitos)
        valorDigitado = (valorDigitado / 100).toFixed(2) + ""; // Divide o valorDigitado por 100, arredonda para duas casas decimais e converte em string
        valorDigitado = valorDigitado.replace(".", ","); // Substitui o ponto decimal por vírgula
        valorDigitado = valorDigitado.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,"); // Adiciona separadores de milhar e vírgula para valores acima de 1000
        valorDigitado = valorDigitado.replace(/(\d)(\d{3}),/g, "$1.$2,"); // Adiciona separadores de milhar e vírgula para valores abaixo de 1000
        event.target.value = `R$ ${valorDigitado}`; // Define o valor do elemento que disparou o evento como "R$ " seguido do valor formatado
    }


    function adicionarSkill() {
        //verifica o valor do state select
        if (select === "") {
            //se for igual a string vazia, exibe uma mensagem
            alert("Selecione uma skill para adicionar");
        } else {
            //se não, verifica se no state skillsSelecionadas existe a skill que o usuario selecionou
            if (skillsSelecionadas.includes(select)) {
                //se existir, exibe uma mensagem
                alert("Essa skill já foi selecionada");
            }
            else {
                //se não existir, a variavel novaListaSkillsSelecionadas cria uma cópia do valor do state skillsSelecionadas
                let novaListaSkillsSelecionadas = [...skillsSelecionadas];

                //E adiciona a skill, que foi selecionada pelo usuário
                novaListaSkillsSelecionadas.push(select);

                //Atualiza o valor do state skillsSelecionadas
                setSkillsSelecionadas(novaListaSkillsSelecionadas);
            }
        }
    }

    function excluirSkill(skill: string) {

        //A variavel novaListaSkillsSelecionadas armazena skills diferente da skill que o usuário clicou para ser excluida.
        const novaListaSkillsSelecionadas = skillsSelecionadas.filter(item => item !== skill);

        //Atualiza o valor do state skillsSelecionadas, com o valor da variavel novaListaSkillsSelecionadas 
        setSkillsSelecionadas(novaListaSkillsSelecionadas);
    };


    useEffect(() => {
        //Inserindo o título da guia de endereço da página atual.
        document.title = "VSConnect - Lista de Serviços";
    }, []);

    return (
        <main className="main_cad_servico">
            <div className="container container_cad_serv">
                <div className="cad_serv_conteudo">
                    <h1>Cadastro de Serviço</h1>
                    <hr />
                    <form onSubmit={cadastrarServico} className="cad_serv_formulario" action="">
                        <div className="cad_serv_box_input">
                            <label htmlFor="titulo">Titulo do serviço:</label>
                            <input
                                type="text"
                                id="titulo"
                                placeholder="Ex: E-commerce para pizzaria"
                                onChange={(event) =>{setNome(event.target.value)}}
                                required
                            />
                        </div>
                        <div className="cad_serv_box_input">
                            <label htmlFor="descricao">Descrição do serviço:</label>
                            <textarea
                                name=""
                                id="descricao"
                                placeholder="Digite aqui a descrição resumida do que você precisa:"
                                onChange={(event) =>{setDescricao(event.target.value)}}
                                required
                            ></textarea>
                        </div>
                        <div className="cad_serv_box_input">
                            <label htmlFor="proposta">Proposta:</label>
                            <input
                                type="text"
                                id="proposta"
                                maxLength={17}
                                placeholder="Digite o valor que deseja pagar:"
                                onChange={(event) =>{setValor(event.target.value)}}
                                onKeyUp={mascaraValor}
                                required
                            />
                        </div>

                        <span>Tecnologias Desejadas</span>
                        <hr />
                        <div className="cad_serv_box_skills">
                            <span>Selecione uma Skill para adicionar</span>
                            <div className="cad_linha_select">
                                <select 
                                defaultValue={"DEFAULT"} 
                                name="" 
                                id="cad_select_skill"
                                onChange={(e) => setSelect(e.target.value)}
                                required>
                                    <option value="DEFAULT" disabled>Selecione</option>
                                    {
                                        techs.map((tech: any, index: number) => {
                                            return <option key={index} value={tech}>{tech}</option>
                                        })
                                    }
                                </select>
                                <input
                                    type="button"
                                    value="Inserir"
                                    id="cad_btn_inserir"
                                    onClick={adicionarSkill}
                                />
                            </div>
                            <div id="cad_lista_skills">
                            {
                                                skillsSelecionadas.length > 0 ? skillsSelecionadas.map((el: any, index: number) => {
                                                    return <div key={index} className="cad_item_skill">
                                                        <span className="cad_span_skill">{el}</span>
                                                        <button
                                                            type="button"
                                                            id="cad_item_excluir"
                                                            onClick={() => excluirSkill(el)}
                                                            className="cad_item_excluir">
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                height="1em"
                                                                viewBox="0 0 384 512">
                                                                <path
                                                                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                }) : <span className="cad_span_skill">Nenhuma skill cadastrada</span>
                                            }
                            </div>
                        </div>
                        <button type="submit" className="cad_botao">Cadastrar</button>
                    </form>
                </div>
            </div>
        </main>
    );
}

