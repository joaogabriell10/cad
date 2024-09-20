const Formulario = () => {

    const handleClick = () => {
        // Aqui você pode implementar a lógica do botão
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const cep = document.getElementById('cep').value;
        const numero = document.getElementById('numero').value;
        const complemento = document.getElementById('complemento').value;
        
        // Exemplo de saída
        const output = `Nome: ${nome}, E-mail: ${email}, Telefone: ${telefone}, CEP: ${cep}, Número: ${numero}, Complemento: ${complemento}`;
        document.getElementById('saida-de-dados').innerText = output;
    };

    return (
        <div className="container-fluid">
            <h1>Projeto Inicial</h1>
            <div>
                <h4>Aula de DSA2</h4>
                <form>
                    <div className="mb-1">
                        <label htmlFor="nome">Digite seu nome:</label>
                        <input type="text" id="nome" name="nome" placeholder="Digite seu nome..." />
                    </div>
                    <div className="mb-1">
                        <label htmlFor="email">E-mail:</label>
                        <input type="text" id="email" name="email" placeholder="Digite seu e-mail..." />
                    </div>
                    <div className="mb-1">
                        <label htmlFor="telefone">Telefone:</label>
                        <input type="text" id="telefone" name="telefone" placeholder="(11) 99999-9999" />
                    </div>
                    <div className="mb-1">
                        <label htmlFor="cep">CEP:</label>
                        <input type="text" id="cep" name="cep" placeholder="00000-000" maxLength="8" />
                    </div>
                    <div className="mb-1">
                        <label htmlFor="logradouro">Logradouro:</label>
                        <input type="text" id="logradouro" name="logradouro" disabled />
                    </div>
                    <div className="mb-1">
                        <label htmlFor="numero">Número:</label>
                        <input type="text" id="numero" name="numero" placeholder="" />
                    </div>
                    <div className="mb-1">
                        <label htmlFor="complemento">Complemento:</label>
                        <input type="text" id="complemento" name="complemento" placeholder="" />
                    </div>
                    <div className="mb-1">
                        <label htmlFor="bairro">Bairro:</label>
                        <input type="text" id="bairro" name="bairro" disabled />
                    </div>
                    <div className="mb-1">
                        <label htmlFor="cidade">Cidade:</label>
                        <input type="text" id="cidade" name="cidade" disabled />
                    </div>
                    <div className="mb-1">
                        <label htmlFor="estado">Estado:</label>
                        <input type="text" id="estado" name="estado" disabled />
                    </div>
                    <input type="button" value="Clique aqui..." className="btn btn-primary" id="botao" onClick={handleClick} />
                </form>
                <div className="m-2 p-1 text-center" id="saida-de-dados"></div>
            </div>
        </div>
    );
}

export default Formulario