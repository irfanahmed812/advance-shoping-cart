// main function
function updateProductInput(product, price, isIncreasing) {
    const caseInput = document.getElementById(product + '-quantity');
    // "phone"+"-number" = "phone-number"
    let productNumber = caseInput.value;
    if (isIncreasing) {
        productNumber = parseInt(productNumber) + 1;

    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    caseInput.value = productNumber;

    // total update (phone or case)

    const updateTotal = document.getElementById(product + '-price');
    updateTotal.innerText = productNumber * price;

    calculateTotal()
}

// total input field
function updateProduct(product) {
    const productInput = document.getElementById(product + '-quantity');
    const productQuantity = parseInt(productInput.value);
    return productQuantity;
}


// total calculate
function calculateTotal() {
    const phoneAmount = updateProduct('phone') * 1099;
    const headphoneAmonut = updateProduct('headphone') * 299;
    const macAmount = updateProduct('mac') * 1899;
    const subTotal = phoneAmount + headphoneAmonut + macAmount;
    const discountTotal = subTotal / 3;
    const tax = subTotal / 10;
    const total = (subTotal + tax) - discountTotal;
    const fixed = total.toFixed(2);
    fixed.innerText;

    // sub-total
    document.getElementById('sub-ammount').innerText = subTotal;
    document.getElementById('discount-ammount').innerText = discountTotal
    document.getElementById('tax-ammount').innerText = tax;
    document.getElementById('total-ammount').innerText = total;
}






// phone
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductInput('phone', 1099, true);
})

document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductInput('phone', 1099, false);
})

// case
document.getElementById('headphone-plus').addEventListener('click', function () {

    updateProductInput('headphone', 299, true);
})

document.getElementById('headphone-minus').addEventListener('click', function () {

    updateProductInput('headphone', 299, false)
})

// macbook
document.getElementById('mac-plus').addEventListener('click', function () {
    updateProductInput('mac', 1899, true);
})
document.getElementById('mac-minus').addEventListener('click', function () {
    updateProductInput('mac', 1899, false);
})



// check out btn

document.getElementById('checkout-now').addEventListener('click', function () {
    alert('Thanks for purching our products 😊');
})