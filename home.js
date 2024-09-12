const apiKey = "AIzaSyDhjlMv4hLPsbO_x1Ge45O_05GLVlfQXh0";

document.addEventListener("DOMContentLoaded", function() {
    var teste = "novel";
    const url_home = `https://www.googleapis.com/books/v1/volumes?q=${teste}&key=${apiKey}`;

    fetch(url_home)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        const tituloBusca = document.getElementById("titulo_busca");
        const listaLivros = document.getElementById("list_livros");

        if (tituloBusca && listaLivros) {
            tituloBusca.innerHTML = "Os mais lidos da semana!";
            
            data.items.forEach(item => {
                const title = item.volumeInfo.title;
                const capa = item.volumeInfo.imageLinks?.thumbnail || 'default-thumbnail.jpg'; // Verifica se a capa existe
                
                const card = document.createElement("div");
                card.classList = 'livros-info';
                const cardItem = `
                    <img class="capa-livro" src="${capa}" alt="Capa do livro"/>
                    <div class="info_livros">
                        <h5 class="titulo-livro">${title}</h5>
                    </div>
                `;
                card.innerHTML = cardItem;
                listaLivros.appendChild(card);
            });
        } else {
            console.error("Elementos com os IDs 'titulo_busca' ou 'list_livros' não foram encontrados.");
        }
    })
    .catch(error => console.error('Erro na requisição:', error));
});

function pesquisar() {
    var busca = document.getElementById("barra_pesquisa").value;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${busca}&key=${apiKey}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data); // Para verificar os dados no console

        const tituloBusca = document.getElementById("titulo_busca");
        const listaLivros = document.getElementById("list_livros");
        
        if (tituloBusca && listaLivros) {
            tituloBusca.innerHTML = `Pesquisando por - ${busca}:`;
            listaLivros.innerHTML = ""; // Limpa o conteúdo anterior

            if (data.items && data.items.length > 0) {
                data.items.forEach(item => {
                    const title = item.volumeInfo.title;
                    const capa = item.volumeInfo.imageLinks.thumbnail; // Verifica se a capa existe
                    
                    const card = document.createElement("div");
                    card.classList = 'livros-info';
                    const cardItem = `
                        <img class="capa-livro" src="${capa}" alt="Capa do livro"/>
                        <div class="info_livros">
                            <h5 class="titulo-livro">${title}</h5>
                        </div>
                    `;
                    card.innerHTML = cardItem;
                    listaLivros.appendChild(card);
                });
            } else {
                listaLivros.innerHTML = "Nenhum livro encontrado.";  // Exibe uma mensagem se não houver resultados
            }
        } else {
            console.error("Elementos com os IDs 'titulo_busca' ou 'list_livros' não foram encontrados.");
        }
    })
    .catch(error => console.error('Erro:', error));
}
