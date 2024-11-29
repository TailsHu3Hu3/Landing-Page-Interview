const productsGrid = document.querySelector(".productsBoxesWrapper")
const addMoreProducts = document.querySelector(".addMoreProductsButton")
let infoProducts = ''
let nextPageAPI = 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1'
let firstPageAPI = ''

function transformJson(dataString) {
    return dataString.json()
}

function arrangingValues(dataJson) {
    firstPageAPI = dataJson
    infoProducts = firstPageAPI.products
    nextPageAPI = 'https://' + firstPageAPI.nextPage
    createValues()
}

function fetchError() {
    console.log("Something went wrong.")
}

function handlingAPI() {
    firstPageAPI = fetch(nextPageAPI)
            .then(transformJson)
            .then(arrangingValues)
            .catch(fetchError)
}

function createValues() {
    for (let conectorProducts of infoProducts) {
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
    }
}

addMoreProducts.addEventListener('click', handlingAPI)

handlingAPI()






