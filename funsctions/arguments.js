// challenge
// function with 2 arguments
// total price and tipPercent (default 0.2 (20%))

// print: A 25% tip on $40 would be $10
let toPay = function (total, tipPercent = 0.2) {
    return `A ${tipPercent * 100}% tip on $${total} would be $${total * tipPercent}`
}

let pay = toPay(40, 0.25)
console.log(pay)