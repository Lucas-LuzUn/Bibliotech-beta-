
function login(event) {
    event.preventDefault(); // Evita que o formulário seja enviado de forma tradicional

    var usuario = document.getElementById("input_usuario").value;
    var senha = document.getElementById("input_senha").value;

    
    // Corpo da requisição com os dados do login
        var loginData = {
            RA: usuario, // Assumindo que o campo na API é RA
            senha: senha
        };


    // Fazendo a requisição POST para o endpoint da API
    fetch('http://localhost:8080/alunos/login', { // Substitua o endpoint pelo correto da sua API
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) { // Supondo que a API retorne um campo 'success' quando o login é válido
            window.location.href = "home.html"; // Redireciona para a página home.html
        } else {
            document.getElementById("msg_erro").innerHTML = "Usuário ou senha incorretos!";
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        document.getElementById("msg_erro").innerHTML = "Usuário ou senha incorretos!";
    });
}