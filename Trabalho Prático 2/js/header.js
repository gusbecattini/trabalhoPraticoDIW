var headerContent =`<script src="../js/filtro.js"></script>
<link rel="stylesheet" href="../css/card.css">
<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
  <h1 class="logo">8 Bits</h1>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" href="../templates/index.html">Home</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Categorias
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="../templates/mensClothing.html">Roupas Masculinas</a></li>
          <li><a class="dropdown-item" href="../templates/womenClothing.html">Roupas Femininas</a></li>
          <li><a class="dropdown-item" href="../templates/jewelery.html">Joias</a></li>
          <li><a class="dropdown-item" href="../templates/electro.html">Eletrônicos</a></li>
        </ul>
      </li>
    </ul>
    <form class="d-flex" role="search">
        <input id="searchBar" class="form-control me-2" type="search" placeholder="O que procura?" aria-label="Search">
        <button id="searchButton" class="btn btn-outline-success" onclick="FiltroEscrito()" type="button">Pesquisar</button>
      </form>
  </div>
</div>
</nav>`;

var header = document.getElementById("header");
header.innerHTML = headerContent;
var searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", FiltroEscrito);


var button = document.getElementById("searchButton");
button.addEventListener("click", function(event) {
    event.preventDefault();
});


function FiltroEscrito () {
   try{

    var inputUsuario = document.getElementById("searchBar").value;
    inputUsuario = inputUsuario.toLowerCase();



    if(inputUsuario === "jewelery" || inputUsuario === "joias" || inputUsuario === "joia") {
        fetch('https://fakestoreapi.com/products/category/jewelery').then((data) => {
            console.log(data);
            return data.json();
            }).then((objectData) =>{
                console.log(objectData);
                let dadoProduto = "";
                let titulo = "";
                objectData.map((produto)=>{
                titulo = `Filtrado por ${inputUsuario}`
                dadoProduto+=
                `
                <div class="card" style="width: 15rem;">
                <img src="${produto.image}" class="card-img-top" alt="imagem do produto">
                <div class="card-body">
                    <h5 class="card-title">${produto.title}</h5>
                    <p class="rating"><strong>Rating: </strong>${produto.rating.rate}</p>
                    <p class="review">${produto.rating.count} Reviews</p>
                    <p class="card-text"><p>$${produto.price}</p>${produto.description}</p>
                    <a href="../templates/descricao.html?id=${produto.id}" class="btn btn-success">Veja Mais</a>
                </div>
                </div>
                `
            });

            document.getElementById("searchBy").innerText = titulo;
            document.getElementById("cards").innerHTML=dadoProduto;

        }).catch((erro) => {
            console.log(erro);
        })
    } else if(inputUsuario === "men's clothing" || inputUsuario === "mens clothing" || inputUsuario === "roupas masculinas") {

        fetch("https://fakestoreapi.com/products/category/men's%20clothing").then((data) => {
            console.log(data);
            return data.json();
            }).then((objectData) =>{

                let dadoProduto = "";
                let titulo = "";
                objectData.map((produto)=>{
                titulo = `Filtrado por ${inputUsuario}`
                dadoProduto+=
                `<div class="card" style="width: 15rem;">
                <img src="${produto.image}" class="card-img-top" alt="imagem do produto">
                <div class="card-body">
                    <h5 class="card-title">${produto.title}</h5>
                    <p class="rating"><strong>Rating: </strong>${produto.rating.rate}</p>
                    <p class="review">${produto.rating.count} Reviews</p>
                    <p class="card-text"><p>$${produto.price}</p>${produto.description}</p>
                    <a href="../templates/descricao.html?id=${produto.id}" class="btn btn-success">Veja Mais</a>
                </div>
                </div>
                `
            });
            document.getElementById("searchBy").innerText = titulo;
            document.getElementById("cards").innerHTML=dadoProduto;
        }).catch((erro) => {
            console.log(erro);
        })
    } else if(inputUsuario === "women's clothing" || inputUsuario === "womens clothing" || inputUsuario === "women clothing" || inputUsuario === "roupas femininas") {

        fetch("https://fakestoreapi.com/products/category/women's%20clothing").then((data) => {
            console.log(data);
            return data.json();
            }).then((objectData) =>{

                let dadoProduto = "";
                let titulo = "";
                objectData.map((produto)=>{
                titulo = `Filtrado por ${inputUsuario}`
                dadoProduto+=
                `<div class="card" style="width: 15rem;">
                <img src="${produto.image}" class="card-img-top" alt="imagem do produto">
                <div class="card-body">
                    <h5 class="card-title">${produto.title}</h5>
                    <p class="rating"><strong>Rating: </strong>${produto.rating.rate}</p>
                    <p class="review">${produto.rating.count} Reviews</p>
                    <p class="card-text"><p>$${produto.price}</p>${produto.description}</p>
                    <a href="../templates/descricao.html?id=${produto.id}" class="btn btn-success">Veja Mais</a>
                </div>
                </div>
                `
            });
            document.getElementById("searchBy").innerText = titulo;
            document.getElementById("cards").innerHTML=dadoProduto;
        }).catch((erro) => {
            console.log(erro);
        })
    } else if(inputUsuario === "electronics" || inputUsuario === "eletronicos") {

        fetch('https://fakestoreapi.com/products/category/electronics').then((data) => {
            console.log(data);
            return data.json();
            }).then((objectData) =>{

                let dadoProduto = "";
                let titulo = "";
                objectData.map((produto)=>{
                titulo = `Filtrado por ${inputUsuario}`
                dadoProduto+=
                `<div class="card" style="width: 15rem;">
                <img src="${produto.image}" class="card-img-top" alt="imagem do produto">
                <div class="card-body">
                    <h5 class="card-title">${produto.title}</h5>
                    <p class="rating"><strong>Rating: </strong>${produto.rating.rate}</p>
                    <p class="review">${produto.rating.count} Reviews</p>
                    <p class="card-text"><p>$${produto.price}</p>${produto.description}</p>
                    <a href="../templates/descricao.html?id=${produto.id}" class="btn btn-success">Veja Mais</a>
                </div>
                </div>
                `
            });
            document.getElementById("searchBy").innerText = titulo;
            document.getElementById("cards").innerHTML=dadoProduto;
        }) .catch((erro) => {
            console.log(erro);
        })
    } else {
        alert("Else");
        fetch('https://fakestoreapi.com/products').then((data) => {

    return data.json();
}).then((objectData) =>{
    console.log(objectData);
    let dadoProduto = "";
    objectData.map((produto)=>{

        dadoProduto = `<h1>Produto não encontrado.</h1><br><br>

        `
    });

        document.getElementById("cardsPesquisa").innerHTML = dadoProduto;

}).catch((erro) => {
    console.log(erro);
})

    }
} catch(erro) {
    console.log(erro);
}
}
