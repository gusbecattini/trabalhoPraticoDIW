fetch('https://fakestoreapi.com/products').then((response) => {
    if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      return response.json();
}).then((objectData) =>{

    let cardsContent = "";
    objectData.forEach((produto) => {
        cardsContent += `
          <div class="card" style="width: 15rem;">
            <img src="${produto.image}" class="card-img-top" alt="imagem do produto">
            <div class="card-body">
              <h5 class="card-title">${produto.title}</h5>
              <p class="rating"><strong>Rating: </strong>${produto.rating.rate}</p>
              <p class="review">${produto.rating.count} Reviews</p>
              <p class="card-text"><p>$${produto.price}</p>${produto.description}</p>
              <a href="../templates/descricao.html?id=${produto.id}" class="btn btn-success">Detalhes</a>
            </div>
          </div>
        `;

    });

        document.getElementById("cards").innerHTML = cardsContent;

  })
  .catch((error) => {
    console.log(error);
  });
