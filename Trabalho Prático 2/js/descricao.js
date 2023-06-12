const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

fetch('https://fakestoreapi.com/products/' + productId).then((data) => {

    return data.json();
}).then((produto) =>{
    console.log(produto);
    let dadoProduto = "";



        dadoProduto = `<h1>${produto.title}</h1><br><br>
        <img src="${produto.image}"/> <br><br>
        <p class="rating"><strong>Rating: </strong>${produto.rating.rate}</p>
        <p class="review">${produto.rating.count} Reviews</p>
        <strong><p>$${produto.price}</p></strong><br><br>
        <strong><p>Description: </p></strong>${produto.description}<br><br>
        `
        document.getElementById("dataProduto").innerHTML = dadoProduto;
    })
    .catch((erro) => {
    console.log(erro);
})


