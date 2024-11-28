let productsGrid = document.querySelector(".productsWrapper")
let addMoreProducts = document.querySelector(".addMoreProductsButton")
let infoProdutos1 = ''
let nextPageAPI = 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1'
let firstPageAPI = ''

function transformarEmJson(dadosEmString) {
    return dadosEmString.json()
}

function enviarAoConsole(dados) {
    firstPageAPI = dados
    console.log("teste", dados)
    console.log(firstPageAPI.products)
    infoProdutos1 = firstPageAPI.products
    nextPageAPI = 'https://' + firstPageAPI.nextPage
    fazerOsValores()
}

function deuRuim() {
    console.log("breh")
}





//EU SOU MUITO GOSTOSA PORRAAAAA!!!!!


function criacao() {
    firstPageAPI = fetch(nextPageAPI)
            .then(transformarEmJson)
            .then(enviarAoConsole)
            .catch(deuRuim)
}

function fazerOsValores() {
    console.log(infoProdutos1)
    for (let conectorProducts of infoProdutos1) {
        productsGrid.innerHTML += `
        <article>
            <figure>
                <div class="imageWrapper">
                    <img src="${conectorProducts.image}" alt="">
                </div>
                <figcaption>
                    <span>${conectorProducts.name}</span>
                </figcaption>
            </figure>
            <p class="textBoxProducts">
                ${conectorProducts.description}
            </p>
    
            <div class="pricesBoxProducts">
                <span class="mediaNameBoxProducts">${conectorProducts.name}</span>
                <span class="priceOrigin">De: R$${conectorProducts.oldPrice}</span>
                <span class="presentPrice">Por: R$${conectorProducts.price}</span>
                <span class="portionPrice">ou ${conectorProducts.installments.count}x de R$${conectorProducts.installments.value}</span>
                <button type="button" class="mediaProductsButtonBuy">Comprar</button>
            </div>
                    
            <button type="button" class="productsButtonBuy">Comprar</button>
        </article>
        `

        // A imagem precisa ficar com 253px de height;
    }
}

console.log(productsGrid)

/* https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1 */


console.log("hii!!! >w<")







