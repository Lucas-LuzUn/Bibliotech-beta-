const apiKey = "AIzaSyDhjlMv4hLPsbO_x1Ge45O_05GLVlfQXh0";

let id_livro = localStorage.getItem("livro");

document.addEventListener("DOMContentLoaded", function() {
    const url_home = `https://www.googleapis.com/books/v1/volumes?q=${id_livro}&maxResults=1&key=${apiKey}`;

    fetch(url_home)
    .then(response => response.json())
    .then(data =>{
        console.log(data)

        data.items.forEach(item => { // Extrai o título do livro
            const title = item.volumeInfo.title; // (IDEIA) fazer uma variavel que procure o item da array, ex: volumeInfo{pesquisa}
            const capa = item.volumeInfo.imageLinks.thumbnail
            const autor = item.volumeInfo.authors
            const descrição = item.volumeInfo.description
            const sinopse = item.searchInfo.textSnippet

            const card = document.createElement("div")
            card.classList = 'livros-info'
            const cardItem = `
                    <img  class="capa-livro" src=${capa}/>
                    <div class="info_livro">
                        <h1 class="titulo-livro">${title}</h1>
                        <h2 class="sinopse-livro">${sinopse}</h2>
                        <p class="descricao-livro"><h4>Descrição:</h4>${descrição}</p>
                        <h3 class="autor-livro">Autor: ${autor}</h3>
                        <div class="div-button">
                        <button class="alugar-livro">Alugar</button>
                        </div>
                    </div>                       
                `
                card.innerHTML = cardItem
                document.getElementById("livro_aluguel").appendChild(card)       
        }) 
        
    }) 

});
