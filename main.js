let quantity = document.getElementById("amount")


let number = 0

document.getElementById("amount").textContent = number




function removeClick() {
    number = number - 1
    quantity.textContent = number
}

function addClick() {
    number = number + 1
    quantity.textContent = number
}


let cartNumber = 0

let buyQ = document.getElementById("cartAmount")

document.getElementById("cartAmount").textContent = cartNumber


function buy() {
    cartNumber = number
    buyQ.textContent = number
}
