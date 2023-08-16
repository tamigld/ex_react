import "./style.css"


function CadastroServ(){

    function mascaraValor(event:any) {
        let valorDigitado = event.target.value; // Obtém o valor do elemento que acionou o evento, neste caso o valor digitado no input
    
        valorDigitado = valorDigitado.replace(/\D/g, ''); // Remove todos os caracteres não numéricos do valor (deixa apenas os dígitos)
        valorDigitado = (valorDigitado / 100).toFixed(2) + ""; // Divide o valorDigitado por 100, arredonda para duas casas decimais e converte em string
        valorDigitado = valorDigitado.replace(".", ","); // Substitui o ponto decimal por vírgula
        valorDigitado = valorDigitado.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,"); // Adiciona separadores de milhar e vírgula para valores acima de 1000
        valorDigitado = valorDigitado.replace(/(\d)(\d{3}),/g, "$1.$2,"); // Adiciona separadores de milhar e vírgula para valores abaixo de 1000
        event.target.value = `R$ ${valorDigitado}`; // Define o valor do elemento que disparou o evento como "R$ " seguido do valor formatado
    }
    
    return (

        <>
        <main id="cadastro_serv" className="main_cad_servico">
        <div className="container container_cad_serv">
            <div className="cad_serv_conteudo">
                <h1>Cadastro de Serviço</h1>
                <hr/>
                <form className="cad_serv_formulario" action="">
                    <div className="cad_serv_box_input">
                        <label htmlFor="titulo">Titulo do serviço:</label>
                        <input type="text" id="titulo" placeholder="Ex: E-commerce para pizzaria"/>
                    </div>
                    <div className="cad_serv_box_input">
                        <label htmlFor="descricao">Descrição do serviço:</label>
                        <textarea name="" id="descricao"
                            placeholder="Digite aqui a descrição resumida do que você precisa:"></textarea>
                    </div>
                    <div className="cad_serv_box_input">
                        <label htmlFor="proposta">Proposta:</label>
                        <input type="text" id="proposta" onKeyUp= {mascaraValor} maxLength={17} placeholder="Digite o valor que deseja pagar:"/>
                    </div>

                    <span>Tecnologias Desejadas</span>
                    <hr/>
                    <div className="cad_serv_box_skills">
                        <span>Selecione uma Skill para adicionar</span>
                        <div className="cad_linha_select">
                            <select name="" id="cad_select_skill">
                                <option value="" selected disabled>Selecione</option>
                            </select>
                            <input type="button" value="Inserir" id="cad_btn_inserir"/>
                        </div>
                        <div id="cad_lista_skills">

                        </div>
                    </div>

                    <input className="cad_botao" type="button" value="Cadastrar"/>
                </form>
            </div>
        </div>
    </main>
        
        </>
    )
}

export default CadastroServ

