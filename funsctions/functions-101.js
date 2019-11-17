/*let greetUser = function () {
    console.log('Welcome user.')
}

greetUser()
greetUser()
greetUser()

let squareFun = function (num) {
    let result = num * num
    return result
}

let square = squareFun(5)
console.log(square)*/

// challenge
// convertFahrenheitToCelsius

let convertFahrenheitToCelsius = function (temp) {
    return (temp - 32) * 5 / 9
}

let celsius1 = convertFahrenheitToCelsius(32)
let celsius2 = convertFahrenheitToCelsius(68)

console.log(`${celsius1}`)
console.log(`${celsius2}`)