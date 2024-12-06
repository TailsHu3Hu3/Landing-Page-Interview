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

const yourName = document.forms['userSign']['yourName']
const yourEmail = document.forms['userSign']['yourEmail']
const yourGender = document.forms['userSign']['genderSelect']
const yourCPF = document.forms['userSign']['cpf']

const yourNameError = document.querySelector('#yourNameError')
const yourEmailError = document.querySelector('#yourEmailError')
const yourGenderError = document.querySelector('#yourGenderError')
const yourCpfError = document.querySelector('#yourCpfError')

const yourSubmitButton = document.querySelector('#submitUserButton')


yourName.addEventListener('blur', nameVerifier)

function nameVerifier() {
    if (yourName.value == '' || yourName.value.includes(' ')) {
        yourName.classList.add('errorBorder')
        yourNameError.classList.add('errorInput')
        yourNameError.classList.remove('hidden')
    } else {
        yourNameError.classList.add('hidden')
        yourName.classList.remove('errorBorder')
        yourNameError.classList.remove('errorInput')
    }
}

yourEmail.addEventListener('blur', emailVerifier)

const emailPattern = /[äáàâãöôóòõüûúùéèêíìîa-zA-Z0-9!#\$%*/?\|\^\{\}`~&'+\-=_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

function emailVerifier() {
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

yourCPF.addEventListener('input', cpfPatternVerify)

function cpfPatternVerify(cpfParameterInput) {
    let cpfInputValue = cpfParameterInput.target.value

    let cpfPattern = cpfInputValue.replace(/\D/g, '')
                                  .replace(/(\d{3})(\d)/, '$1.$2') 
                                  .replace(/(\d{3})(\d)/, '$1.$2') 
                                  .replace(/(\d{3})(\d)/, '$1-$2') 
                                  .replace(/(-\d{2})\d+?$/, '$1');

    cpfParameterInput.target.value = cpfPattern
}

yourCPF.addEventListener('blur', function() {
    let cpfInput = yourCPF.value

    if (!validationCPF(cpfInput)) {
        yourCPF.classList.add('errorBorder')
        yourCpfError.classList.add('errorInput')
        yourCpfError.classList.remove('hidden')

    } else {
        yourCPF.classList.remove('errorBorder')
        yourCpfError.classList.remove('errorInput')
        yourCpfError.classList.add('hidden')
    }
})

function validationCPF(cpfParameter) {
    cpfParameter = cpfParameter.replace(/\D+/g, '')
    let summation = 0
    let remnant;

    if (cpfParameter.length !== 11) {
        return false
    }

    if (/^(\d)\1{10}$/.test(cpfParameter)) {
        return false
    }

    for (let count = 1; count <= 9; count++) {
        summation += parseInt(cpfParameter.substring(count-1, count)) * (11 - count)
    }

    remnant = (summation * 10) % 11
    if ((remnant === 10) || (remnant === 11)) {
        remnant = 0
    }

    if (remnant !== parseInt(cpfParameter.substring(9, 10))) {
        return false
    }

    summation = 0;
    for (count = 1; count <= 10; count++) {
        summation += parseInt(cpfParameter.substring(count - 1, count)) * (12 - count)
    }
    remnant = (summation * 10) % 11

    if ((remnant === 10) || (remnant === 11)) {
        remnant = 0
    }

    if (remnant !== parseInt(cpfParameter.substring(10, 11))) {
        return false
    }

    return true
}



function verifyGender() {
    if (yourGender.value == '') {
        yourGenderError.classList.add('errorInput')
        yourGenderError.classList.remove('hidden')
    } else {
        yourGenderError.classList.remove('errorInput')
        yourGenderError.classList.add('hidden')
    }
}

yourSubmitButton.addEventListener('click', verifyGender)

/***********************************/

const shareForm = document.forms['share']
const shareName = document.forms['share']['nameOfFriend']
const shareEmail = document.forms['share']['emailOfFriend']

const shareNameError = document.querySelector('#shareNameFriend')
const shareEmailError = document.querySelector('#shareEmailFriend')

let nameFilled = false
let emailFilled = false

function shareNameVerifier() {
    if (shareName.value == '' || shareName.value.includes(' ')) {
        shareName.classList.add('errorBorder')
        shareNameError.classList.add('errorInput')
        shareNameError.classList.remove('hidden')
        nameFilled = false
    } else {
        shareName.classList.remove('errorBorder')
        shareNameError.classList.remove('errorInput')
        shareNameError.classList.add('hidden')
        nameFilled = true
    }
}

shareName.addEventListener('blur', shareNameVerifier)

function shareEmailVerifier() {
    let shareVerifyEmail = emailPattern.test(shareEmail.value)

    if (shareVerifyEmail == true) {
        shareEmail.classList.remove('errorBorder')
        shareEmailError.classList.remove('errorInput')
        shareEmailError.classList.add('hidden')
        emailFilled = true
    } else {
        shareEmail.classList.add('errorBorder')
        shareEmailError.classList.add('errorInput')
        shareEmailError.classList.remove('hidden')
        emailFilled = false
    }
}

shareEmail.addEventListener('blur', shareEmailVerifier)

function everythingFilled(event) {
    event.preventDefault()

    if (nameFilled == true && emailFilled == true) {
        localStorage.setItem('friendName', shareName.value)
        shareForm.submit()
    } else {
        shareNameVerifier()
        shareEmailVerifier()
    }
}

shareForm.addEventListener('submit', everythingFilled)