function cadastrarPessoa(event){
    event.preventDefault();

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var RA = document.getElementById("RA").value;
    var curso = document.getElementById("Curso").value;
    var senha = document.getElementById("senha").value;

    var pessoaData = {
        nome: nome,
        email: email,
        ra: RA,
        senha: senha,
        curso: curso
    };

    fetch('http://localhost:8080/alunos/cadastrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pessoaData)
    })
    .then(response => {
        if (!response.ok) { // Verifica se a resposta da API foi bem-sucedida
            throw new Error('Erro na API: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        if (data.success) {
            window.location.href = "/Bibliotech-beta-/index.html";
        } else {
            alert("Erro ao cadastrar: " + (data.message || "Erro desconhecido"));
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert("Erro ao cadastrar");
    });
}

document.getElementById("form").addEventListener("submit", cadastrarPessoa);
