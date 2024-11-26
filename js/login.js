
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
    .then(response => {
        if(!response.ok) {
            return response.json().then(error => {
                throw new Error(error.erro);  //obs: aqui estou assumindo que a api retorna uma mensagem de erro caso de algum erro...
            });
        }

        return response.json();
    })

    .then(data => {
        console.log("Bem Vindo!", data);

        localStorage.setItem("DadosAluno", JSON.stringify(data));

        window.location.href = "/Bibliotech-beta-/pages/home.html";
    })

    .catch(error =>{
        console.error("Error", error.mensage);
        document.getElementById("msg_erro").innerHTML = "Usuário ou senha incorretos!";
    })
}
