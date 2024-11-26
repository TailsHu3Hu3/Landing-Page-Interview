let productsGrid = document.querySelector(".productsWrapper")
let infoProdutos1 = ''

function transformarEmJson(dadosEmString) {
    return dadosEmString.json()
}

function enviarAoConsole(dados) {
    firstPageAPI = dados
    console.log("teste", dados)
    console.log(firstPageAPI.products)
    infoProdutos1 = firstPageAPI.products
    fazerOsValores()
}

function deuRuim() {
    console.log("breh")
}




let firstPageAPI = fetch("https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1")
        .then(transformarEmJson)
        .then(enviarAoConsole)
        .catch(deuRuim) 


function fazerOsValores() {
    console.log(infoProdutos1)
    // BROOOOOOOO JÁ FUNCIONA ASSIM, WHATA HEEEL
    // Vo chorar de emozao 😭
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
/* productsGrid.innerHTML = `
         <article>
            <figure>
                 <div class="imageWrapper">
                     <img src="" alt="">
                 </div>
                 <figcaption>
                     <span>Nome do produto</span>
                 </figcaption>
             </figure>
             <p class="textBoxProducts">
                 Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata.
             </p>
    
             <div class="pricesBoxProducts">
                 <span class="mediaNameBoxProducts">Nome do Produto</span>
                 <span class="priceOrigin">De: R$23,99</span>
                 <span class="presentPrice">Por: R$19,99</span>
                 <span class="portionPrice">ou 2x de R$9,99</span>
                 <button type="button" class="mediaProductsButtonBuy">Comprar</button>
             </div>
                    
             <button type="button" class="productsButtonBuy">Comprar</button>
         </article>
 ` */

/* https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1 */


console.log("hii!!! >w<")