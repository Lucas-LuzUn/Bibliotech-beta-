function cadastrarPessoa(event) {
    event.preventDefault(); // Evita o envio tradicional do formulário

    // Obtendo os valores dos campos do formulário
    var RA = document.getElementById("RA").value;
    var nome = document.getElementById("nome").value;
    var senha = document.getElementById("senha").value;

    // Corpo da requisição com os dados da pessoa
    var pessoaData = {
        RA: RA,
        nome: nome,
        senha: senha
    };
    //Daqui pra cima eu apenas armazenei os dados dos inputs em variaveis e montei como que o arquivo será enviado.  

    // Fazendo a requisição POST para o endpoint de cadastro da API
    fetch('http://localhost:8080/alunos/cadastrar', { // Salve hebão, aqui você pode substuir o endpoint de acordo com a sua API...essa que eu coloquei é generica.
        method: 'POST', //você estava certo...o método continua sendo post kkkkkkkkkkk
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pessoaData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) { // Supondo que a API retorne um campo 'success' quando o cadastro é bem-sucedido
            window.location.href = "/Bibliotech-beta-/index.html"; //Se o cadastro for bem sucedido, então o usuário é redirecionado p/ a pagina de login, para poder acessar utilizando seu novo acesso.
        } else {
            alert("Erro ao cadastrar"); //irei remover isso depois, é apenas para fins de testes.
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert("Erro ao cadastrar");
    });
}