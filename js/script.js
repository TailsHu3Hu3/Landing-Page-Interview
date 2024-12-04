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



/***********************************/

const formYourInfo = document.forms['userSign']
const yourName = document.forms['userSign']['yourName']
const yourEmail = document.forms['userSign']['yourEmail']
const yourGender = document.forms['userSign']['genderSelect']

const yourNameError = document.querySelector('#yourNameError')
const yourEmailError = document.querySelector('#yourEmailError')
const yourGenderError = document.querySelector('#yourGenderError')


yourName.addEventListener('blur', testeDoNome)

function testeDoNome() {
    if (yourName.value == '' || yourName.value.includes(' ')) {
        yourName.classList.add('errorBorder')
        yourNameError.classList.add('errorInput')
        yourNameError.classList.remove('hidden')
    } else {
        console.log('Butou')
        yourNameError.classList.add('hidden')
        yourName.classList.remove('errorBorder')
        yourNameError.classList.remove('errorInput')
    }
}

yourEmail.addEventListener('blur', testeDoEmail)
//Código adaptado por mim de outro projeto
const emailPattern = /[äáàâãöôóòõüûúùéèêíìîa-zA-Z0-9!#\$%*/?\|\^\{\}`~&'+\-=_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


function testeDoEmail() {
    let verifiedEmail = emailPattern.test(yourEmail.value)

    if (verifiedEmail == true) {
        yourEmail.classList.remove('errorBorder')
        yourEmailError.classList.remove('errorInput')
        yourEmailError.classList.add('hidden')

    } else {
        yourEmail.classList.add('errorBorder')
        yourEmailError.classList.add('errorInput')
        yourEmailError.classList.remove('hidden')
    }
}

function testeDoGenero() {
    if (yourGender.value == '') {
        yourGenderError.classList.add('errorInput')
        yourGenderError.classList.remove('hidden')
    } else {
        yourGenderError.classList.remove('errorInput')
        yourGenderError.classList.add('hidden')
    }
}



console.log(formYourInfo)
console.log(yourName)
console.log(yourEmail)
console.log(yourGender)
console.log(yourNameError)
console.log(yourEmailError)

