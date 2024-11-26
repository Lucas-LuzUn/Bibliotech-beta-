function cadastrarPessoa(event){
    event.preventDefault(); // Evita o envio tradicional do formulário

    // Obtendo os valores dos campos do formulário
    var nome = document.getElementById("nome").value;
    var email= document.getElementById("email").value;
    var RA = document.getElementById("RA").value;
    var curso = document.getElementById("Curso").value;
    var senha = document.getElementById("senha").value;

    // Corpo da requisição com os dados da pessoa
    var pessoaData = {
        nome: nome,
        email: email,
        RA: RA,
        curso: curso,
        senha: senha
    };

    // Fazendo a requisição POST para o endpoint de cadastro da API
    fetch('http://localhost:8080/alunos/cadastrar', { // Substitua pelo endpoint correto da sua API
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pessoaData)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // Verifica o que a API está retornando no console
        if (data.success) { // Supondo que a API retorne 'success' em caso de sucesso
            window.location.href = "/Bibliotech-beta-/index.html"; // Redireciona após sucesso
        } else {
            alert("Erro ao cadastrar"); // Teste para verificar se houve falha no cadastro
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert("Erro ao cadastrar");
    });
}

// Chama a função cadastrarPessoa quando o formulário for submetido
document.getElementById("form").addEventListener("submit", cadastrarPessoa);
