 const apiKey = "AIzaSyDhjlMv4hLPsbO_x1Ge45O_05GLVlfQXh0";

let id_livro = localStorage.getItem("Livro");

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
            card.classList = 'container_principal'
            const cardItem = `
                    <div class="container_img">
                        <img  class="capa-livro" src=${capa}/>
                    </div>
                    
                    <div class="info_livro">
                        <h1 class="titulo-livro">${title}</h1>
                        <h3 class="sinopse-livro">${sinopse}</h3>
                        <h3 class="autor-livro">Autor: ${autor}</h3>
                        <button class="button_alugar">Alugar</button>
                    </div>

                    <div class="container_descricao">
                        <p class="descricao-livro"><h3>Descrição:</h3>${descrição}</p>
                    </div>                       
                `
                card.innerHTML = cardItem
                document.getElementById("livro_aluguel").appendChild(card)       
        }) 
        
    }) 

});