let productsGrid = document.querySelector(".productsWrapper")
let infoProdutos1 = ''

function transformarEmJson(dadosEmString) {
    return dadosEmString.json()
}

function enviarAoConsole(dados) {
    produtosAPI = dados
    console.log("teste", dados)
    console.log(produtosAPI.products)
    infoProdutos1 = produtosAPI.products
    fazerOsValores()
}

function deuRuim() {
    console.log("breh")
}




let produtosAPI = fetch("https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1")
        .then(transformarEmJson)
        .then(enviarAoConsole)
        .catch(deuRuim) 


function fazerOsValores() {
    console.log(infoProdutos1)
    const { id, name, image, installments, oldPrice, price } = infoProdutos1[5]
    console.log(id," - ", name," - ", image," - ", installments," - ", oldPrice," - ", price)
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